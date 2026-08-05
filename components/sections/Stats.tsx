"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { STATS, ACHIEVEMENTS } from "@/lib/data";

export function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-navy-900 py-20 md:py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern bg-[size:40px_40px] opacity-[0.06]" aria-hidden />
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-gold-600/10 blur-3xl" aria-hidden />

      <Container className="relative">
        <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center md:border-r md:border-white/10 md:last:border-none"
            >
              <p className="font-heading text-4xl font-bold text-gold-400 sm:text-5xl">
                {inView ? <CountUp end={stat.value} duration={2} /> : 0}
                {stat.suffix}
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.14em] text-white/60 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-4 border-t border-white/10 pt-12 md:grid-cols-2">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-start gap-3"
            >
              <Award size={18} className="mt-0.5 shrink-0 text-gold-400" />
              <p className="text-sm text-white/75 leading-relaxed">{a}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
