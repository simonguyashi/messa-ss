"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { ADMISSION_STEPS } from "@/lib/data";

export function Admissions() {
  return (
    <section id="admissions" className="relative overflow-hidden bg-mist section-py">
      <Container>
        <h2 className="text-center font-heading text-2xl font-bold text-navy-900 md:text-3xl">The Application Process</h2>

        <div className="relative mt-14">
          <div className="absolute left-1/2 top-8 hidden h-[calc(100%-4rem)] w-px -translate-x-1/2 bg-navy-100 lg:block" aria-hidden />
          <div className="grid gap-10 lg:grid-cols-4 lg:gap-6">
            {ADMISSION_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative flex flex-col items-center text-center"
              >
                <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-navy-600 font-heading text-lg font-bold text-white shadow-premium">
                  {step.step}
                </span>
                <h3 className="mt-5 font-heading text-base font-bold text-navy-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
                {i < ADMISSION_STEPS.length - 1 && (
                  <ArrowRight className="mt-4 hidden text-navy-200 lg:block" size={20} />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-20 flex max-w-2xl flex-col items-center gap-6 rounded-3xl bg-navy-900 px-8 py-12 text-center text-white shadow-premium"
        >
          <h3 className="font-heading text-2xl font-bold md:text-3xl">Ready to begin your child&rsquo;s journey?</h3>
          <p className="text-white/70">
            Reach out to our admissions team for guidance on Form I and Form V joining instructions.
          </p>
          <Button href="#contact" variant="primary" size="lg">
            Start Your Application <ArrowRight size={18} />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
