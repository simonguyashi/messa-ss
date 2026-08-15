# Messa Secondary School — Official Website

A digital school office for Messa Secondary School (Centre No. S4575), Buhongwa, Mwanza City Council, Tanzania.

## Design philosophy

This is a **multi-page portal**, not a single scrolling landing page. Every page answers exactly
one question, has its own permanent URL, and is reachable in one or two clicks from anywhere on
the site (top nav, mobile bottom nav, search, or the homepage "I am a..." role selector).

| Page | Question it answers |
|---|---|
| `/` | What school is this? What do I need today? What's new? How do I contact you? |
| `/about` | What kind of school is this (official profile + story)? |
| `/about/leadership` | Who leads and runs the school? |
| `/academics` | What do I study here? |
| `/academics/results` | How has the school performed, by year? |
| `/admissions` | How do I join? |
| `/students` | Where do I find my notes, timetable, papers, results? |
| `/parents` | Fees, announcements, meetings — how do I stay informed? |
| `/news` + `/news/[slug]` | What's new? |
| `/gallery` | What does the school look like? |
| `/downloads` | Where do I find official documents (searchable)? |
| `/contact` | How do I reach the school? |

The homepage hero is deliberately photo-led (real school imagery is the largest element on the
page) while the rest of the homepage stays short — this mirrors how WAJA-style school sites
establish "this is a real institution" visually, without turning the homepage back into a long
scroller. Every dropdown in the top navigation and the mobile "Menu" sheet expose the full
information architecture (NECTA-style density) so nothing is hidden behind a guess.

### Photography system
- **Home** — a slow crossfading hero (3 photos, 7s per slide, no arrows/dots) — ambient identity,
  not a carousel competing for attention.
- **Every internal page except Gallery** — a compact 240–280px photographic band with a dark
  overlay, breadcrumb and title integrated into it (replaces what used to be two separate white
  bars, so this adds no extra scroll versus the previous version).
- **Gallery** — no photographic header, since the gallery itself is the visual experience.
- All photography is reused from a single vetted pool of URLs across the site (see `lib/data.ts`
  and the `image`/`imageAlt` props on each page's `PageHeader` call) rather than introducing new,
  unverified image links.

## Stack
Next.js 15 (App Router) · TypeScript · Tailwind CSS · Framer Motion · Lucide Icons · Swiper ·
React CountUp · React Photo View · React Hook Form + Zod

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
replaced with school-verified information: headmaster's message, leadership names, email
address, exact map coordinates, fee structure, news articles, testimonials, and every document
in `lib/downloads.ts` (currently `file: null`, shown as "Coming soon" in the Downloads Centre —
set `file` to a real path under `/public/docs` once a PDF exists).

Academic data (combinations, subjects, NECTA results, achievements) is sourced directly from the
official profile above and does not need verification unless the school's standing changes.

All photography is temporary — sourced from Unsplash — and organized in `lib/data.ts` so it can
be swapped for real school photography without touching component code.

## Next phase: Headmaster Dashboard

Several pages (`/students`, `/parents`, `/downloads`) currently show an honest "Coming soon"
state for content the school hasn't digitised yet (notes, timetable, calendar, fee structure).
The natural next step — **not built here because it requires a real backend** — is a small admin
dashboard so staff can publish this content without a developer:

- Post announcements → feeds the homepage `AnnouncementBar` and `/parents#announcements`
- Upload documents (fees, calendar, timetable, forms) → feeds `lib/downloads.ts` / `/downloads`
- Publish news → feeds `/news`
- Manage gallery images → feeds `/gallery`
- Publish exam results → feeds `/academics/results`

This needs: authentication (e.g. NextAuth), a database (e.g. Postgres via Supabase/Neon, or a
headless CMS like Sanity), and file storage for PDFs/images (e.g. S3-compatible storage). The
current site's content already lives in typed data files (`lib/data.ts`, `lib/downloads.ts`,
`lib/nav.ts`) specifically so that migrating each one to a database table later is a contained,
predictable change rather than a rewrite.

## Performance notes (built for 3G / older Android)
- No autoplay video, no large hero video background
- Images lazy-load by default (Next.js `<Image>`) except the one above-the-fold identity image
- Each route only loads the libraries it needs (e.g. Swiper is not loaded on `/downloads`)
- Static generation (SSG) for every page — first byte is fast, no server round-trip per request

## Folder structure
```
app/                  Routes (one folder per URL), layout, sitemap.ts, robots.ts
components/
  layout/             Navbar, Footer, BottomNav, Breadcrumbs, SearchOverlay
  sections/           Reusable page sections (About, Academics, Contact, etc.)
  sections/home/       Homepage-only sections (IdentityBand, RoleSelector, QuickAccess...)
  ui/                 Reusable primitives (Button, Container, PageHeader)
lib/                  data.ts (school content), nav.ts (navigation/roles/quick access),
                      search-index.ts, downloads.ts, utils.ts
types/                Shared TypeScript types
```
