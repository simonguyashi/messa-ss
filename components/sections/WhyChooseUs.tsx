"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  FlaskConical,
  Users,
  ShieldCheck,
  BookOpen,
  Trophy,
  LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VALUE_PILLARS } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = {
  GraduationCap,
  FlaskConical,
  Users,
  ShieldCheck,
  BookOpen,
  Trophy,
};

export function WhyChooseUs() {
  return (
    <section className="relative bg-mist section-py">
      <Container>
        <SectionHeading
          eyebrow="Why Families Choose Messa"
          title="Built for Academic Excellence, Discipline and Growth"
          description="Six reasons parents and students trust Messa Secondary School with their future."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {VALUE_PILLARS.map((pillar, i) => {
            const Icon = ICONS[pillar.icon];
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-premium"
              >
                <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-navy-50 transition-transform duration-500 group-hover:scale-125" aria-hidden />
                <span className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-600 text-white shadow-[0_10px_24px_-8px_rgba(15,61,145,0.6)]">
                  <Icon size={24} />
                </span>
                <h3 className="relative mt-6 font-heading text-lg font-bold text-navy-900">{pillar.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
