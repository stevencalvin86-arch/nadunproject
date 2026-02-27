import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.siteSettings.upsert({
    where: { id: 'default' },
    create: {
      id: 'default',
      siteName: 'Sinhala Hadahana',
      tagline: 'සිංහල හදහන - Instant Astrology Insights',
      navItemsJson: JSON.stringify([
        { labelEn: 'Home', labelSi: 'මුල් පිටුව', href: '/' },
        { labelEn: 'Checker', labelSi: 'හදහන', href: '/checker' },
        { labelEn: 'Resources', labelSi: 'සම්පත්', href: '/resources' },
        { labelEn: 'Blog', labelSi: 'ලිපි', href: '/blog' },
        { labelEn: 'Contact', labelSi: 'සම්බන්ධ වන්න', href: '/contact' }
      ]),
      socialLinksJson: JSON.stringify({ facebook: '#', instagram: '#', youtube: '#', whatsapp: '#' }),
      horoscopeTemplatesJson: JSON.stringify({
        en: { career: 'Steady growth through disciplined effort.' },
        si: { career: 'පිළිවෙල සහිත උත්සාහයෙන් වෘත්තීය වර්ධනය සිදුවේ.' }
      })
    },
    update: {}
  });

  await prisma.user.upsert({
    where: { email: 'admin@sinhala-hadahana.com' },
    create: { email: 'admin@sinhala-hadahana.com', name: 'Admin', role: "ADMIN", passwordHash: 'demo-admin-password' },
    update: {}
  });

  await prisma.post.createMany({
    data: [
      {
        title: 'How Lagna Influences Career',
        slug: 'lagna-career-guide',
        excerpt: 'Understand ascendant impact on work and leadership.',
        content: 'Professional service model aligned with modern horoscope consulting packages.',
        type: "BLOG",
        published: true,
        featured: true
      },
      {
        title: 'Birth Time Accuracy Checklist',
        slug: 'birth-time-accuracy',
        excerpt: 'Steps to improve birth-time based reading quality.',
        content: 'Collect hospital record, verify timezone, and location coordinates.',
        type: "RESOURCE",
        published: true,
        featured: true
      }
    ]
  });
}

main().finally(async () => prisma.$disconnect());
