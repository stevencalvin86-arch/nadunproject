import { prisma } from '@/lib/db';

export default async function BlogDetail({ params }: { params: { slug: string } }) {
  const post = await prisma.post.findUnique({ where: { slug: params.slug } });
  if (!post) return <div>Not found</div>;
  return <article className="prose max-w-none"><h1>{post.title}</h1><p>{post.content}</p></article>;
}
