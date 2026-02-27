import Link from 'next/link';
import { prisma } from '@/lib/db';

export default async function Resources() {
  const posts = await prisma.post.findMany({ where: { type: 'RESOURCE', published: true } });
  return <div className="space-y-4"><h1 className="text-3xl font-bold">Resources</h1><input className="border p-2 rounded w-full" placeholder="Search resources"/><div className="grid gap-3">{posts.map(p=><Link key={p.id} href={`/blog/${p.slug}`} className="bg-white border p-4 rounded"><h3 className="font-semibold">{p.title}</h3><p>{p.excerpt}</p></Link>)}</div></div>;
}
