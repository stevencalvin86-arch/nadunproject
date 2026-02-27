import Link from 'next/link';
import { prisma } from '@/lib/db';

export default async function Blog() {
  const posts = await prisma.post.findMany({ where: { type: 'BLOG', published: true } });
  return <div><h1 className="text-3xl font-bold mb-4">Blog</h1><div className="grid gap-3">{posts.map(p=><Link key={p.id} href={`/blog/${p.slug}`} className="bg-white border p-4 rounded"><h3>{p.title}</h3><p>{p.excerpt}</p></Link>)}</div></div>;
}
