'use client';
import { useState } from 'react';

export default function Contact() {
  const [ok, setOk] = useState(false);
  async function submit(e: any) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(Object.fromEntries(fd)) });
    setOk(true);
  }
  return <div className="space-y-4"><h1 className="text-3xl font-bold">Contact</h1><form onSubmit={submit} className="space-y-2 max-w-xl"> <input name="name" className="w-full border p-2 rounded" placeholder="Name" required/><input name="email" type="email" className="w-full border p-2 rounded" placeholder="Email" required/><textarea name="message" className="w-full border p-2 rounded" placeholder="Message" required/><button className="bg-brand-primary text-white px-4 py-2 rounded">Send</button></form>{ok&&<p>Message sent.</p>}<div className="grid md:grid-cols-2 gap-4"><div className="bg-white border p-4 rounded">Social links: Facebook, Instagram, YouTube, TikTok, WhatsApp, LinkedIn, X, Email (editable in admin).</div><div className="bg-white border p-4 rounded">Map embed placeholder (admin configurable)</div></div></div>;
}
