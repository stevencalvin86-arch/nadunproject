import { prisma } from '@/lib/db';

type ContactMessageRow = Awaited<ReturnType<typeof prisma.contactMessage.findMany>>[number];

export default async function Inbox() {
  const msgs = await prisma.contactMessage.findMany({
    orderBy: { createdAt: 'desc' }
  });

  return (
    <div>
      <h1 className="text-2xl font-bold">Contact Inbox</h1>
      <table className="w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {msgs.map((m: ContactMessageRow) => (
            <tr key={m.id}>
              <td>{m.name}</td>
              <td>{m.email}</td>
              <td>{m.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
