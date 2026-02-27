import { HoroscopeForm } from '@/components/horoscope-form';

export default function CheckerPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">Horoscope Checker</h1>
      <p>Enter birth details to generate Lagna, Rashi, and predictions instantly.</p>
      <HoroscopeForm />
      <p className="text-xs text-slate-600">For informational/entertainment purposes; not medical/legal/financial advice.</p>
    </section>
  );
}
