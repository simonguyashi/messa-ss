import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ArrowRight, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SCHOOL } from "@/lib/data";

// Purpose: answers homepage question 1 — "What school is this?" — but does
// it primarily through real photography, not paragraphs. WAJA-style school
// presentation: the photo collage says "real institution" faster than text.
// No Swiper/autoplay here — a single priority-loaded image collage keeps
// this fast on 3G, since it's the first thing painted on the page (LCP).
const PHOTOS = {
  main: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1400&auto=format&fit=crop",
  small1: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop",
  small2: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=700&auto=format&fit=crop",
};

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <Container className="grid gap-10 py-12 md:py-16 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Text column */}
        <div className="text-white">
          <div className="flex items-center gap-3">
            <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-premium">
              <Image src={SCHOOL.logo} alt="Messa Secondary School logo" fill className="object-contain p-2" sizes="56px" />
            </span>
            <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/70">
              <ShieldCheck size={13} className="text-gold-400" /> Centre No. {SCHOOL.centreNumber}
            </span>
          </div>

          <h1 className="mt-6 font-heading text-3xl font-bold leading-[1.12] sm:text-4xl lg:text-[2.75rem]">
            Messa Secondary School
          </h1>
          <p className="mt-3 max-w-md text-white/70">
            Private &middot; Boarding &amp; Day &middot; O-Level &amp; A-Level &middot; {SCHOOL.ward}, {SCHOOL.council}
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/admissions"
              className="group flex items-center gap-2 rounded-full bg-gold-600 px-6 py-3 text-sm font-bold text-navy-900 shadow-[0_10px_30px_-8px_rgba(234,179,8,0.6)] transition-transform hover:-translate-y-0.5"
            >
              Apply Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/gallery"
              className="flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-navy-900"
            >
              <PlayCircle size={16} /> See the Campus
            </Link>
          </div>

          <div className="mt-8 grid max-w-sm grid-cols-3 gap-4 border-t border-white/10 pt-6">
            <div>
              <p className="font-heading text-xl font-bold text-gold-400">100%</p>
              <p className="mt-0.5 text-[11px] text-white/60">ACSEE 2026</p>
            </div>
            <div>
              <p className="font-heading text-xl font-bold text-gold-400">{new Date().getFullYear() - SCHOOL.registeredYear}+</p>
              <p className="mt-0.5 text-[11px] text-white/60">Years</p>
            </div>
            <div>
              <p className="font-heading text-xl font-bold text-gold-400">31</p>
              <p className="mt-0.5 text-[11px] text-white/60">Subjects</p>
            </div>
          </div>
        </div>

        {/* Photo collage column — the visual proof this is a real school */}
        <div className="relative grid h-[320px] grid-cols-2 gap-3 sm:h-[400px] lg:h-[440px]">
          <div className="relative col-span-2 overflow-hidden rounded-2xl sm:col-span-1 sm:row-span-2">
            <Image
              src={PHOTOS.main}
              alt="Graduation ceremony at Messa Secondary School"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 420px"
            />
          </div>
          <div className="relative hidden overflow-hidden rounded-2xl sm:block">
            <Image src={PHOTOS.small1} alt="Students on campus" fill className="object-cover" sizes="210px" loading="lazy" />
          </div>
          <div className="relative hidden overflow-hidden rounded-2xl sm:block">
            <Image src={PHOTOS.small2} alt="Science laboratory" fill className="object-cover" sizes="210px" loading="lazy" />
          </div>
          <div className="pointer-events-none absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gold-500/20 blur-2xl" aria-hidden />
        </div>
      </Container>
    </section>
  );
}
