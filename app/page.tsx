import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="bg-gradient-to-r from-blue-900 to-cyan-700 text-white p-10 rounded-2xl">
        <h1 className="text-4xl font-bold">Sinhala Hadahana (සිංහල හදහන)</h1>
        <p className="mt-3 max-w-2xl">Instant bilingual horoscope review with Lagna, Rashi, planetary mapping, predictions, and downloadable reports.</p>
        <Link href="/checker" className="inline-block mt-5 bg-white text-blue-900 px-6 py-3 rounded-lg font-medium">Check Horoscope</Link>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {['Career Forecasts','Marriage Insights','Action Plans'].map((x)=><div key={x} className="bg-white border rounded-xl p-5"><h3 className="font-semibold">{x}</h3><p className="text-sm mt-2">Editable via admin templates and tone presets.</p></div>)}
      </div>
    </section>
  );
}
