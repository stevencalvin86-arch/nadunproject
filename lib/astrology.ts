import { addMinutes } from 'date-fns';

const signs = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces'];
const planets = ['Sun','Moon','Mars','Mercury','Jupiter','Venus','Saturn','Rahu','Ketu'];

const hash = (s: string) => s.split('').reduce((a,c)=>a+c.charCodeAt(0),0);

export function generateHoroscope(input: {
  name: string; dob: string; tob: string; latitude: number; longitude: number; language: 'en'|'si';
}) {
  const [h,m] = input.tob.split(':').map(Number);
  const baseDate = addMinutes(new Date(input.dob), h * 60 + m);
  const seed = hash(`${input.name}${baseDate.toISOString()}${input.latitude}${input.longitude}`);
  const lagna = signs[seed % 12];
  const rashi = signs[(seed + 3) % 12];
  const planetary = planets.map((planet, i) => {
    const longitude = (seed * (i + 7) * 1.618) % 360;
    return {
      planet,
      longitude: longitude.toFixed(2),
      sign: signs[Math.floor(longitude / 30)],
      house: ((Math.floor(longitude / 30) + 12 - (seed % 12)) % 12) + 1,
      notes: input.language === 'si' ? 'සමාන බලපෑම් දක්වයි.' : 'Moderate influence with growth potential.'
    };
  });

  const text = input.language === 'si'
    ? {
      highlights: ['නව අවස්ථා තේරීමේ කාලය.', 'පවුල් සහයෝගය ශක්තිමත්.', 'වැඩ කාර්යක්ෂමතාව ඉහළ යයි.'],
      predictions: {
        career: 'වෘත්තීය මට්ටම උසස් කිරීමට නියමිත කාලසටහනක් භාවිතා කරන්න.',
        wealth: 'ස්ථාවර ඉතුරුම් සැලැස්මක් ඔබට වාසියක් ගෙනේ.',
        family: 'සංවාදය වැඩි කර සම්බන්ධතා ශක්තිමත් කරගන්න.',
        marriage: 'අවබෝධය සහ ගෞරවය ප්‍රමුඛ කර ගන්න.',
        health: 'නින්ද, ජලපානය, සහ නිතිපතා ව්‍යායාමය අත්‍යවශ්‍යයි.'
      },
      timeline: {
        past: 'පසුගිය කාලයෙහි ඔබ පරීක්ෂාකාරී තීරණ මගින් අත්දැකීම් ලබා ගත්හ.',
        present: 'දැනට වගකීම් සහ අවස්ථා සමබරව පවතින අවධියකි.',
        future: 'ඉදිරි මාසවල ශක්තිමත් වෘත්තීය සහ ආර්ථික වර්ධනයක් පෙනේ.'
      },
      actionPlan: ['සතියකට එක් ඉලක්කයක් සම්පූර්ණ කරන්න.', 'මාසික වියදම් සැලැස්මක් තබා ගන්න.', 'අධික ආතතිය අඩු කිරීමට භාවනාව පුරුදු කරන්න.']
    }
    : {
      highlights: ['A period to choose new opportunities wisely.', 'Family support remains strong.', 'Professional efficiency rises steadily.'],
      predictions: {
        career: 'Use a structured schedule to unlock your next career level.',
        wealth: 'A disciplined savings plan will improve financial stability.',
        family: 'Frequent communication strengthens emotional bonds.',
        marriage: 'Lead with empathy, respect, and clear expectations.',
        health: 'Prioritize sleep, hydration, and regular movement.'
      },
      timeline: {
        past: 'You built resilience through practical and careful decisions.',
        present: 'You are balancing responsibility and opportunity effectively.',
        future: 'The coming months show strong potential for career and financial growth.'
      },
      actionPlan: ['Finish one priority goal every week.', 'Track monthly spending and savings.', 'Practice meditation to reduce stress and improve focus.']
    };

  return { lagna, rashi, planetary, ...text };
}
