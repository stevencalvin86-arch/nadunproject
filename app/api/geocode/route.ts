import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get('q');
  if (!q) return NextResponse.json([]);
  const base = process.env.NOMINATIM_BASE_URL || 'https://nominatim.openstreetmap.org';
  const res = await fetch(`${base}/search?format=json&q=${encodeURIComponent(q)}`, { headers: { 'User-Agent': 'sinhala-hadahana-app' } });
  const data = await res.json();
  return NextResponse.json(data.slice(0, 5));
}
