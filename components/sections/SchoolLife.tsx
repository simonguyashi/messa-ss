"use client";

import { motion } from "framer-motion";
import { BookOpen, Trophy, Users, Star, Lightbulb, Medal, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SCHOOL_LIFE } from "@/lib/data";

const ICONS: Record<string, LucideIcon> = { BookOpen, Trophy, Users, Star, Lightbulb, Medal };

export function SchoolLife() {
  return (
    <section id="school-life" className="relative scroll-mt-24 overflow-hidden bg-navy-900 section-py text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.05]" aria-hidden />
      <Container className="relative">
        <SectionHeading
          eyebrow="Beyond the Classroom"
          title="A Well-Rounded School Life"
          description="Academics paired with sports, leadership and innovation to develop confident, capable students."
          light
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SCHOOL_LIFE.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-colors hover:border-gold-500/40 hover:bg-white/10"
              >
                <Icon size={26} className="text-gold-400" />
                <h3 className="mt-5 font-heading text-lg font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
