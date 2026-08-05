"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SCHOOL } from "@/lib/data";

import "swiper/css";
import "swiper/css/effect-fade";

const SLIDES = [
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2400&auto=format&fit=crop",
    alt: "Graduation ceremony",
  },
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2400&auto=format&fit=crop",
    alt: "African students on campus",
  },
  {
    src: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2400&auto=format&fit=crop",
    alt: "Science laboratory",
  },
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2400&auto=format&fit=crop",
    alt: "School campus building",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink text-white">
      <div className="absolute inset-0">
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 5500, disableOnInteraction: false }}
          loop
          speed={1400}
          className="h-full w-full"
        >
          {SLIDES.map((slide) => (
            <SwiperSlide key={slide.src}>
              <div className="relative h-full w-full">
                <Image src={slide.src} alt={slide.alt} fill priority className="object-cover" sizes="100vw" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/85 via-ink/60 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />
      </div>

      {/* Floating decorative shapes */}
      <div className="pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-gold-600/10 blur-3xl animate-float-slow" aria-hidden />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-96 w-96 rounded-full bg-navy-400/20 blur-3xl animate-float-slower" aria-hidden />

      <Container className="relative z-10 pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div initial="hidden" animate="visible" custom={0} variants={fadeUp}>
            <span className="relative mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-premium overflow-hidden">
              <Image src={SCHOOL.logo} alt="Messa Secondary School logo" fill className="object-contain p-2" sizes="80px" />
            </span>
          </motion.div>

          <motion.span initial="hidden" animate="visible" custom={1} variants={fadeUp} className="eyebrow justify-center text-gold-400">
            <span className="h-px w-6 bg-gold-500" aria-hidden />
            Private &middot; Boarding &amp; Day &middot; O-Level &amp; A-Level
          </motion.span>

          <motion.h1
            initial="hidden"
            animate="visible"
            custom={2}
            variants={fadeUp}
            className="mt-6 font-heading text-4xl font-bold leading-[1.08] text-balance sm:text-5xl md:text-6xl lg:text-[4.2rem]"
          >
            Messa Secondary School
          </motion.h1>

          <motion.p initial="hidden" animate="visible" custom={3} variants={fadeUp} className="mx-auto mt-6 max-w-xl text-lg text-white/75 md:text-xl">
            Inspiring Excellence &middot; Building Future Leaders
          </motion.p>

          <motion.div initial="hidden" animate="visible" custom={4} variants={fadeUp} className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="#admissions" variant="primary" size="lg">
              Apply Now <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#about" variant="outline-light" size="lg">
              <PlayCircle size={18} />
              Explore Campus
            </Button>
          </motion.div>

          <motion.div initial="hidden" animate="visible" custom={5} variants={fadeUp} className="mx-auto mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-white/10 pt-8 text-left">
            <div>
              <p className="font-heading text-2xl font-bold text-gold-400">100%</p>
              <p className="mt-1 text-xs text-white/60">ACSEE 2026 Pass Rate</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-gold-400">{new Date().getFullYear() - SCHOOL.registeredYear}+</p>
              <p className="mt-1 text-xs text-white/60">Years of Excellence</p>
            </div>
            <div>
              <p className="font-heading text-2xl font-bold text-gold-400">31</p>
              <p className="mt-1 text-xs text-white/60">Subjects Offered</p>
            </div>
          </motion.div>
        </div>
      </Container>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/60 hover:text-white"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ChevronDown size={28} />
      </motion.a>
    </section>
  );
}
