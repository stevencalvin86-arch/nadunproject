import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function POST(req: Request) {
  const body = await req.json();
  await prisma.contactMessage.create({ data: { name: body.name || '', email: body.email || '', message: body.message || '' } });
  return NextResponse.json({ ok: true });
}
