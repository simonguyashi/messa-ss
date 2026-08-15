"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Container } from "@/components/ui/Container";
import { STATS } from "@/lib/data";

export function HomeStats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-y border-navy-50 bg-white py-10">
      <Container>
        <div ref={ref} className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="text-center md:border-r md:border-navy-50 md:last:border-none"
            >
              <p className="font-heading text-3xl font-bold text-navy-900 sm:text-4xl">
                {inView ? <CountUp end={stat.value} duration={1.8} /> : 0}
                {stat.suffix}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.1em] text-slate-500 sm:text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
