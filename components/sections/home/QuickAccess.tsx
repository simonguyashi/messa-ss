"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  FileEdit, Wallet, BarChart3, CalendarDays, NotebookPen, FileText,
  Download, Clock, Megaphone, Images, MapPin, Phone, LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { QUICK_ACCESS } from "@/lib/nav";

const ICONS: Record<string, LucideIcon> = {
  FileEdit, Wallet, BarChart3, CalendarDays, NotebookPen, FileText,
  Download, Clock, Megaphone, Images, MapPin, Phone,
};

// Purpose: answers homepage question 2 — "What do you need today?" Every
// tile is a service ("Apply for Admission") not a feature ("Our Library"),
// per the reception-desk principle: visitors solve a task, they don't
// browse a brochure.
export function QuickAccess() {
  return (
    <section className="bg-mist py-14 md:py-16">
      <Container>
        <div className="flex items-end justify-between">
          <h2 className="font-heading text-xl font-bold text-navy-900 md:text-2xl">Quick Access</h2>
          <span className="hidden text-sm text-slate-500 sm:block">Everything you need, one tap away</span>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {QUICK_ACCESS.map((item, i) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: (i % 6) * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="group flex min-h-[104px] flex-col items-center justify-center gap-2.5 rounded-2xl bg-white p-4 text-center shadow-soft transition-all hover:-translate-y-1 hover:shadow-premium"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy-50 text-navy-600 transition-colors group-hover:bg-gold-500 group-hover:text-navy-900">
                    <Icon size={20} />
                  </span>
                  <span className="text-xs font-semibold leading-tight text-navy-800">{item.label}</span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
