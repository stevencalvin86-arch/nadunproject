# Sinhala Hadahana (සිංහල හදහන)

Production-ready full-stack Next.js app for instant bilingual horoscope reviews with admin CMS, branding controls, SEO, and downloadable reports.

## Tech stack
- Next.js 14 (App Router) + TypeScript + Tailwind CSS
- Prisma ORM (SQLite local; PostgreSQL-compatible models)
- NextAuth (Credentials + Google provider scaffold)
- API routes for horoscope generation, geocoding, contact inbox, and downloads

## Features delivered
- Public pages: Home, About, Contact, Resources, Blog List/Detail, Horoscope Checker, FAQ, Privacy, Terms
- Horoscope tool inputs: name, gender, DOB, TOB, place, language
- Horoscope output: Lagna, Rashi, planetary table, predictions, timeline, action plan
- Admin dashboard: overview, appearance, posts/resources, SEO, inbox
- SEO basics: robots, sitemap, metadata scaffold, social-ready structure
- Data models: User, SiteSettings, Post, Category, Tag, MediaAsset, ContactMessage, HoroscopeRequest, HoroscopeResult
- Seed content aligned to business proposal assumptions and made admin-editable

## Important note on astrology accuracy
This implementation uses a deterministic astronomy-style approximation engine in `lib/astrology.ts` for local feasibility. For production-grade astrological precision, swap to Swiss Ephemeris via Node bindings or a Python FastAPI microservice with `pyswisseph`.

## Environment variables
Copy `.env.example` to `.env`.

## Setup
```bash
npm install
npx prisma migrate dev --name init
npm run prisma:seed
npm run dev
```

## Build
```bash
npm run build
npm run start
```

## Deployment
- Set env vars on your hosting provider.
- Use PostgreSQL by changing `provider` and `DATABASE_URL`.
- Run migrations and seed in CI/CD.

## Directory structure
- `app/` routes and API handlers
- `components/` reusable UI
- `lib/` utilities (auth, db, i18n, astrology, validation)
- `prisma/` schema + seed
- `public/` static assets


## Netlify deployment (fixes 404 routing)
- Use the official Next.js runtime plugin so Netlify serves App Router routes and API handlers correctly.
- This repo includes `netlify.toml` with `@netlify/plugin-nextjs`.
- In Netlify UI, avoid setting a custom publish directory like `.next`; let the plugin manage routing/artifacts.
- Required env vars on Netlify:
  - `DATABASE_URL`
  - `NEXTAUTH_SECRET`
  - `NEXTAUTH_URL`
