import { prisma } from '@/lib/db';

export default async function PostsAdmin(){
  const posts = await prisma.post.findMany({ where: { type: 'BLOG' } });
  return <div><h1 className="text-2xl font-bold">Manage Posts</h1><ul>{posts.map(p=><li key={p.id}>{p.title} - {p.published?'Published':'Draft'}</li>)}</ul></div>;
}
