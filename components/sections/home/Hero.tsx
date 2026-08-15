"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { ShieldCheck, ArrowRight, PlayCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SCHOOL } from "@/lib/data";

import "swiper/css";
import "swiper/css/effect-fade";

// Purpose: answers homepage question 1 — "What school is this?" — through
// real photography as the dominant visual, per client direction. This is a
// background, not a content block: it crossfades slowly (7s, 1.2s fade,
// no arrows/pagination) so it reads as ambient identity, not a carousel
// competing for attention. Height is fixed and modest (not full-viewport)
// so the homepage doesn't get taller than the previous version.
const SLIDES = [
  { src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop", alt: "Graduation ceremony at Messa Secondary School" },
  { src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2000&auto=format&fit=crop", alt: "Students on campus at Messa Secondary School" },
  { src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2000&auto=format&fit=crop", alt: "Science laboratory at Messa Secondary School" },
];

export function Hero() {
  return (
    <section className="relative flex h-[440px] items-end overflow-hidden bg-navy-900 sm:h-[480px] md:h-[520px]">
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 7000, disableOnInteraction: false }}
          loop
          speed={1200}
          className="h-full w-full"
        >
          {SLIDES.map((slide, i) => (
            <SwiperSlide key={slide.src}>
              <div className="relative h-full w-full">
                <Image src={slide.src} alt={slide.alt} fill priority={i === 0} className="object-cover" sizes="100vw" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-t from-ink/92 via-ink/55 to-ink/25" />
      </div>

      <Container className="relative z-10 pb-10 md:pb-12">
        <div className="flex items-center gap-3">
          <span className="relative flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-premium">
            <Image src={SCHOOL.logo} alt="Messa Secondary School logo" fill className="object-contain p-2" sizes="56px" />
          </span>
          <span className="flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-white/70 backdrop-blur-sm">
            <ShieldCheck size={13} className="text-gold-400" /> Centre No. {SCHOOL.centreNumber}
          </span>
        </div>

        <h1 className="mt-5 max-w-xl font-heading text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[2.75rem]">
          Messa Secondary School
        </h1>
        <p className="mt-3 max-w-md text-white/75">
          Private &middot; Boarding &amp; Day &middot; O-Level &amp; A-Level &middot; {SCHOOL.ward}, {SCHOOL.council}
        </p>

        <div className="mt-7 flex flex-wrap items-center gap-3">
          <Link
            href="/admissions"
            className="group flex items-center gap-2 rounded-full bg-gold-600 px-6 py-3 text-sm font-bold text-navy-900 shadow-[0_10px_30px_-8px_rgba(234,179,8,0.6)] transition-transform hover:-translate-y-0.5"
          >
            Apply Now <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/gallery"
            className="flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-navy-900"
          >
            <PlayCircle size={16} /> See the Campus
          </Link>

          <div className="ml-1 hidden items-center gap-5 border-l border-white/15 pl-5 sm:flex">
            <span>
              <span className="font-heading text-lg font-bold text-gold-400">100%</span>
              <span className="ml-1.5 text-xs text-white/60">ACSEE 2026</span>
            </span>
            <span>
              <span className="font-heading text-lg font-bold text-gold-400">{new Date().getFullYear() - SCHOOL.registeredYear}+</span>
              <span className="ml-1.5 text-xs text-white/60">Years</span>
            </span>
            <span>
              <span className="font-heading text-lg font-bold text-gold-400">31</span>
              <span className="ml-1.5 text-xs text-white/60">Subjects</span>
            </span>
          </div>
        </div>
      </Container>
    </section>
  );
}
