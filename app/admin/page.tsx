import Link from 'next/link';

export default function Admin() {
  return <div className="space-y-4"><h1 className="text-3xl font-bold">Admin Dashboard</h1><div className="grid md:grid-cols-3 gap-3">{[
    ['Appearance','/admin/appearance'],['Posts','/admin/posts'],['Resources','/admin/resources'],['SEO','/admin/seo'],['Inbox','/admin/inbox']
  ].map(([l,h])=><Link className="bg-white border p-4 rounded" key={h} href={h}>{l}</Link>)}</div></div>;
}
