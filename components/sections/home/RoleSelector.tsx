"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Users2, Backpack, ClipboardList, GraduationCap, Info, ShieldCheck, ArrowRight, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ROLES } from "@/lib/nav";

const ICONS: Record<string, LucideIcon> = { Users2, Backpack, ClipboardList, GraduationCap, Info, ShieldCheck };

// Purpose: this is the "reception desk" question — "What can I help you
// with?" — placed first so a visitor is routed to their task in one click
// instead of scrolling through content meant for someone else.
export function RoleSelector() {
  return (
    <section className="relative -mt-8 md:-mt-10">
      <Container>
        <div className="rounded-2xl border border-navy-100 bg-white p-5 shadow-premium md:p-7">
          <p className="text-sm font-semibold text-navy-900">I am a...</p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {ROLES.map((role, i) => {
              const Icon = ICONS[role.icon];
              return (
                <motion.div
                  key={role.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    href={role.href}
                    className="group flex h-full flex-col items-start gap-2 rounded-xl border border-navy-50 bg-mist p-4 transition-all hover:-translate-y-0.5 hover:border-gold-400 hover:shadow-soft"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-navy-600 text-white">
                      <Icon size={17} />
                    </span>
                    <span className="text-sm font-bold text-navy-900">{role.label}</span>
                    <span className="text-xs leading-snug text-slate-500">{role.question}</span>
                    <span className="mt-auto flex items-center gap-1 pt-1 text-xs font-semibold text-navy-700 opacity-0 transition-opacity group-hover:opacity-100">
                      Go <ArrowRight size={12} />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
