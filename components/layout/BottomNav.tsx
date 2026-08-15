"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { BOTTOM_NAV, PRIMARY_NAV } from "@/lib/nav";
import { SCHOOL } from "@/lib/data";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <nav
        aria-label="Primary mobile navigation"
        className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-100 bg-white/95 backdrop-blur-md lg:hidden"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <ul className="grid grid-cols-5">
          {BOTTOM_NAV.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex flex-col items-center gap-1 py-2.5 text-[10.5px] font-medium transition-colors",
                    active ? "text-navy-700" : "text-slate-400"
                  )}
                >
                  <span className={cn("flex h-8 w-8 items-center justify-center rounded-full", active && "bg-navy-50")}>
                    <item.icon size={18} strokeWidth={active ? 2.4 : 2} />
                  </span>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setOpen(true)}
          aria-label="More navigation options"
          className="absolute -top-14 right-3 flex h-11 w-11 items-center justify-center rounded-full bg-navy-600 text-white shadow-premium"
        >
          <Menu size={20} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-ink/50 lg:hidden"
            />
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 260 }}
              className="fixed inset-x-0 bottom-0 z-50 rounded-t-3xl bg-white p-6 pb-10 shadow-premium lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Full site menu"
            >
              <div className="flex items-center justify-between">
                <span className="font-heading text-base font-bold text-navy-900">Menu — {SCHOOL.shortName}</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-full bg-navy-50 p-2 text-navy-700">
                  <X size={18} />
                </button>
              </div>
              <ul className="mt-5 grid grid-cols-2 gap-3">
                {PRIMARY_NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl border border-navy-100 bg-mist px-4 py-3.5 text-sm font-semibold text-navy-800"
                    >
                      <item.icon size={18} className="text-navy-600" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
