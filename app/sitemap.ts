import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.SITE_URL || 'http://localhost:3000';
  return ['','/about','/contact','/resources','/blog','/checker','/faq','/privacy','/terms'].map((path)=>({ url: `${base}${path}`, lastModified: new Date() }));
}
