import { prisma } from '@/lib/db';

export default async function ResourcesAdmin(){
  const posts = await prisma.post.findMany({ where: { type: 'RESOURCE' } });
  return <div><h1 className="text-2xl font-bold">Manage Resources</h1><ul>{posts.map(p=><li key={p.id}>{p.title}</li>)}</ul></div>;
}
