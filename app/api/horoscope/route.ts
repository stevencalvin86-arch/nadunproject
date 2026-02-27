import { NextResponse } from 'next/server';
import { horoscopeSchema } from '@/lib/validation';
import { generateHoroscope } from '@/lib/astrology';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = horoscopeSchema.safeParse({ ...body, latitude: Number(body.latitude), longitude: Number(body.longitude) });
  if (!parsed.success) return NextResponse.json({ error: parsed.error.flatten() }, { status: 400 });
  const data = parsed.data;
  const result = generateHoroscope(data as any);
  const record = await prisma.horoscopeRequest.create({ data: { fullName: data.name, gender: data.gender, dob: new Date(data.dob), tob: data.tob, place: data.place, latitude: data.latitude, longitude: data.longitude, timezone: data.timezone, language: data.language } });
  await prisma.horoscopeResult.create({ data: { requestId: record.id, lagna: result.lagna, rashi: result.rashi, highlightsJson: JSON.stringify(result.highlights), planetaryTableJson: JSON.stringify(result.planetary), predictionsJson: JSON.stringify(result.predictions), timelineJson: JSON.stringify(result.timeline), actionPlanJson: JSON.stringify(result.actionPlan) } });
  return NextResponse.json(result);
}
