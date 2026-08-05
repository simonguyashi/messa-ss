"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Briefcase } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { COMBINATIONS, OLEVEL_SUBJECTS, ALEVEL_SUBJECTS, TOP_SUBJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Academics() {
  const [tab, setTab] = useState<"olevel" | "alevel">("alevel");

  return (
    <section id="academics" className="relative bg-white section-py">
      <Container>
        <SectionHeading
          eyebrow="Academic Programs"
          title="Ordinary &amp; Advanced Level Education"
          description="From Form I to Form VI, Messa offers a broad academic curriculum across sciences, business, languages and social studies."
        />

        {/* Level toggle */}
        <div className="mx-auto mt-10 flex w-fit rounded-full bg-mist p-1.5">
          {[
            { key: "olevel", label: "O-Level (Form I–IV)" },
            { key: "alevel", label: "A-Level (Form V–VI)" },
          ].map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key as "olevel" | "alevel")}
              className={cn(
                "relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors",
                tab === t.key ? "text-white" : "text-navy-700 hover:text-navy-900"
              )}
            >
              {tab === t.key && (
                <motion.span layoutId="level-pill" className="absolute inset-0 rounded-full bg-navy-600" transition={{ type: "spring", duration: 0.5 }} />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {tab === "alevel" ? (
            <motion.div
              key="alevel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="mt-14"
            >
              <p className="mx-auto max-w-2xl text-center text-sm text-slate-500">
                Messa offers {COMBINATIONS.length} A-Level combinations — including PGM and PMCs, specialised
                science &amp; technology pathways rarely found elsewhere in Mwanza City Council.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {COMBINATIONS.map((c, i) => (
                  <motion.div
                    key={c.code}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                    className="group flex flex-col rounded-2xl border border-navy-100 bg-white p-7 shadow-soft transition-all hover:-translate-y-1 hover:shadow-premium"
                  >
                    <div className="flex items-center justify-between">
                      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-600 font-heading text-sm font-bold text-white">
                        {c.code}
                      </span>
                    </div>
                    <h3 className="mt-5 font-heading text-base font-bold text-navy-900">{c.name}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{c.description}</p>
                    <div className="mt-5 border-t border-navy-50 pt-4">
                      <p className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wide text-gold-700">
                        <Briefcase size={13} /> Career Paths
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-slate-500">{c.careers.join(" · ")}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="olevel"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35 }}
              className="mt-14"
            >
              <p className="mx-auto max-w-2xl text-center text-sm text-slate-500">
                {OLEVEL_SUBJECTS.length} subjects are taught across Form I–IV, building the academic foundation
                every Messa student carries into A-Level.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-3">
                {OLEVEL_SUBJECTS.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-navy-100 bg-mist px-4 py-2 text-sm font-medium text-navy-800 transition-colors hover:border-gold-400 hover:bg-gold-50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* A-Level subject list + top performing subjects */}
        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          <div className="rounded-2xl border border-navy-100 bg-mist p-8">
            <h3 className="font-heading text-lg font-bold text-navy-900">A-Level Subjects Offered</h3>
            <p className="mt-2 text-sm text-slate-500">
              {ALEVEL_SUBJECTS.length} subjects taught at Form V–VI, including Computer Science — a rarity in the region.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {ALEVEL_SUBJECTS.map((s) => (
                <span key={s} className="rounded-lg bg-white px-3 py-1.5 text-xs font-medium text-navy-700 shadow-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-navy-100 bg-mist p-8">
            <h3 className="font-heading text-lg font-bold text-navy-900">Top Performing Subjects — ACSEE 2026</h3>
            <p className="mt-2 text-sm text-slate-500">GPA and pass rate for Messa&rsquo;s strongest ACSEE 2026 subjects.</p>
            <ul className="mt-5 space-y-2.5">
              {TOP_SUBJECTS.slice(0, 6).map((s) => (
                <li key={s.name} className="flex items-center justify-between rounded-lg bg-white px-4 py-2.5 text-sm shadow-sm">
                  <span className="font-medium text-navy-800">{s.name}</span>
                  <span className="flex items-center gap-3 text-xs text-slate-500">
                    <span>GPA {s.gpa}</span>
                    <span className="rounded-full bg-gold-50 px-2 py-0.5 font-semibold text-gold-700">{s.pass}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <a href="#admissions" className="group inline-flex items-center gap-2 font-semibold text-navy-700 hover:text-navy-900">
            Learn how to apply
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </Container>
    </section>
  );
}
