export const dynamic = 'force-dynamic';

import { prisma } from '@/lib/db';

export default async function SEO(){
  const s = await prisma.siteSettings.findFirst();
  return <div><h1 className="text-2xl font-bold">SEO Settings</h1><p>Default Title: {s?.defaultMetaTitle}</p><p>Description: {s?.defaultMetaDescription}</p><p>Robots index: {s?.robotsAllowIndex ? 'enabled' : 'disabled'}</p></div>;
}
