"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { EXAM_RESULTS, TOP_SUBJECTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ResultsTable() {
  const years = useMemo(
    () => Array.from(new Set(EXAM_RESULTS.map((r) => r.year))).sort((a, b) => b - a),
    []
  );
  const [year, setYear] = useState<number>(years[0]);
  const filtered = EXAM_RESULTS.filter((r) => r.year === year);

  return (
    <section className="bg-white section-py">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy-900 md:text-3xl">Examination Results</h2>
            <p className="mt-2 max-w-2xl text-slate-600">
              Official NECTA performance record. Select a year to view that year's results.
            </p>
          </div>
          <div className="flex gap-2">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setYear(y)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-bold transition-colors",
                  year === y ? "bg-navy-600 text-white" : "bg-mist text-navy-700 hover:bg-navy-50"
                )}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-navy-100">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead className="bg-navy-900 text-white">
              <tr>
                <th className="px-5 py-3.5 font-semibold">Examination</th>
                <th className="px-5 py-3.5 font-semibold">Year</th>
                <th className="px-5 py-3.5 font-semibold">GPA</th>
                <th className="px-5 py-3.5 font-semibold">Pass Rate</th>
                <th className="px-5 py-3.5 font-semibold">Sat / Passed</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((r, i) => (
                <motion.tr
                  key={r.exam + r.year}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                  className="border-t border-navy-50 even:bg-mist"
                >
                  <td className="px-5 py-4">
                    <p className="font-bold text-navy-900">{r.exam}</p>
                    <p className="text-xs text-slate-500">{r.label}</p>
                  </td>
                  <td className="px-5 py-4 text-slate-700">{r.year}</td>
                  <td className="px-5 py-4 text-slate-700">{r.gpa}</td>
                  <td className="px-5 py-4">
                    <span className="rounded-full bg-gold-50 px-3 py-1 text-xs font-bold text-gold-700">{r.passRate}</span>
                  </td>
                  <td className="px-5 py-4 text-slate-700">{r.sat} / {r.passed}</td>
                </motion.tr>
              ))}
              {filtered.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-5 py-8 text-center text-sm text-slate-500">
                    No published results for {year} yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {year === years[0] && (
          <div className="mt-12">
            <h3 className="flex items-center gap-2 font-heading text-lg font-bold text-navy-900">
              <TrendingUp size={20} className="text-gold-600" /> Top Performing Subjects — ACSEE {years[0]}
            </h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {TOP_SUBJECTS.map((s) => (
                <div key={s.name} className="flex items-center justify-between rounded-xl border border-navy-50 bg-mist px-5 py-3.5">
                  <span className="text-sm font-semibold text-navy-800">{s.name}</span>
                  <span className="flex items-center gap-3 text-xs text-slate-500">
                    <span>GPA {s.gpa}</span>
                    <span className="rounded-full bg-white px-2.5 py-1 font-semibold text-gold-700 shadow-sm">{s.pass}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
