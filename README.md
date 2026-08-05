# Messa Secondary School — Official Website

Premium marketing website for Messa Secondary School (Centre No. S4575), Buhongwa, Mwanza City Council, Tanzania.

## Stack
Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons · Swiper · React CountUp · React Photo View · React Hook Form + Zod

## Getting started
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Content sourced from
- Official school profile: https://shuleyetu.co.tz/shuleni/school/s4575-messa-secondary-school-mwanza-cc
- Logo: https://media.shuleyetu.co.tz/logo/s4575
- Instagram: https://www.instagram.com/messasecondary/?hl=en

## Replacing placeholder content
Search the codebase for `[Placeholder` / `[PLACEHOLDER]` to find every field that should be
replaced with school-verified information (headmaster's message, email address, exact map
coordinates, news articles, and testimonials). All other academic data (combinations, subjects,
NECTA results, achievements) is sourced directly from the official profile above.

All photography is temporary — sourced from Unsplash — and organized in `lib/data.ts` so it can
be swapped for real school photography without touching component code.

## Folder structure
```
app/            Routes, layout, global styles, metadata
components/
  layout/       Navbar, Footer
  sections/     Hero, About, Academics, Gallery, Contact, etc.
  ui/           Reusable primitives (Button, Container, SectionHeading)
hooks/          useScrollPosition, useActiveSection
lib/            data.ts (single source of school content), utils.ts
types/          Shared TypeScript types
```
