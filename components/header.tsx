'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Header() {
  const [lang, setLang] = useState<'en'|'si'>('en');
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl">Sinhala Hadahana</Link>
        <div className="flex gap-4 items-center">
          <Link href="/checker" className="bg-brand-primary text-white px-4 py-2 rounded-lg">{lang==='en'?'Check Horoscope':'හදහන බලන්න'}</Link>
          <button aria-label="switch language" onClick={()=>setLang(lang==='en'?'si':'en')} className="border px-3 py-1 rounded">{lang.toUpperCase()}</button>
        </div>
      </nav>
    </header>
  );
}
