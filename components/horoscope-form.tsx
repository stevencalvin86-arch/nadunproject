'use client';
import { useState } from 'react';

type Result = any;

export function HoroscopeForm() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [form, setForm] = useState({ name: '', gender: 'male', dob: '', tob: '', place: '', latitude: 6.9271, longitude: 79.8612, timezone: 'Asia/Colombo', language: 'en' });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/horoscope', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) });
    setResult(await res.json());
    setLoading(false);
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <form onSubmit={submit} className="space-y-3 bg-white p-6 rounded-xl border">
        {['name','dob','tob','place'].map((f) => (
          <input key={f} aria-label={f} required placeholder={f.toUpperCase()} type={f==='dob'?'date':f==='tob'?'time':'text'} className="w-full border rounded p-2" value={(form as any)[f]} onChange={(e)=>setForm({...form,[f]:e.target.value})}/>
        ))}
        <select className="w-full border rounded p-2" value={form.gender} onChange={e=>setForm({...form,gender:e.target.value})}><option>male</option><option>female</option></select>
        <select className="w-full border rounded p-2" value={form.language} onChange={e=>setForm({...form,language:e.target.value as any})}><option value="en">English</option><option value="si">සිංහල</option></select>
        <button className="w-full bg-brand-primary text-white py-2 rounded">{loading?'Generating...':'Generate'}</button>
      </form>
      <div className="bg-white p-6 rounded-xl border">
        {!result ? <p>Result will appear instantly here.</p> : (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-2">
              <div className="p-3 rounded bg-slate-50"><strong>Lagna</strong><div>{result.lagna}</div></div>
              <div className="p-3 rounded bg-slate-50"><strong>Rashi</strong><div>{result.rashi}</div></div>
            </div>
            <table className="w-full text-sm"><thead><tr><th>Planet</th><th>Longitude</th><th>Sign</th><th>House</th></tr></thead><tbody>{result.planetary?.map((p:any)=><tr key={p.planet}><td>{p.planet}</td><td>{p.longitude}</td><td>{p.sign}</td><td>{p.house}</td></tr>)}</tbody></table>
            <div className="flex gap-2">
              <a className="border px-3 py-1 rounded" href={`/api/download/pdf?name=${encodeURIComponent(form.name)}`}>Download PDF</a>
              <a className="border px-3 py-1 rounded" href={`/api/download/docx?name=${encodeURIComponent(form.name)}`}>Download DOCX</a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
