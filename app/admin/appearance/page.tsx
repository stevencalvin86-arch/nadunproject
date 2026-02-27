import { prisma } from '@/lib/db';

export default async function Appearance() {
  const s = await prisma.siteSettings.findFirst();
  return <div className="space-y-3"><h1 className="text-2xl font-bold">Appearance Settings</h1><p>Site name: {s?.siteName}</p><p>Theme colors, fonts, logos, nav, footer blocks are editable through DB-backed JSON fields in SiteSettings.</p></div>;
}
