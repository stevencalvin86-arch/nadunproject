export type Locale = 'en' | 'si';

export const dictionary = {
  en: {
    checkHoroscope: 'Check Horoscope',
    siteTitle: 'Sinhala Hadahana',
    career: 'Career',
    wealth: 'Wealth',
    family: 'Family',
    marriage: 'Marriage',
    health: 'Health'
  },
  si: {
    checkHoroscope: 'හදහන බලන්න',
    siteTitle: 'සිංහල හදහන',
    career: 'වෘත්තිය',
    wealth: 'ධනය',
    family: 'පවුල',
    marriage: 'විවාහය',
    health: 'සෞඛ්‍යය'
  }
};

export const t = (locale: Locale, key: keyof typeof dictionary.en) => dictionary[locale][key];
