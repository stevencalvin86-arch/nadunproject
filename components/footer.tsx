import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12 grid md:grid-cols-4 gap-6">
        <div><h3 className="font-semibold">Sinhala Hadahana</h3><p className="text-sm mt-2">Professional horoscope guidance.</p></div>
        <div className="space-y-2"><Link href="/about">About</Link><br/><Link href="/resources">Resources</Link></div>
        <div className="space-y-2"><Link href="/privacy">Privacy</Link><br/><Link href="/terms">Terms</Link></div>
        <div className="space-y-2 text-sm"><p>Contact: hello@sinhala-hadahana.com</p><p>© {new Date().getFullYear()} Sinhala Hadahana</p></div>
      </div>
    </footer>
  );
}
