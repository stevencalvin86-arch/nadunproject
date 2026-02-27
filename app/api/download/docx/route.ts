import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const name = searchParams.get('name') || 'User';
  const content = `Sinhala Hadahana Report\nName: ${name}\nGenerated: ${new Date().toISOString()}`;
  return new NextResponse(content, { headers: { 'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'Content-Disposition': 'attachment; filename="horoscope.docx"' } });
}
