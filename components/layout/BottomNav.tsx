"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { BOTTOM_NAV, PRIMARY_NAV } from "@/lib/nav";
import { SCHOOL } from "@/lib/data";
import { cn } from "@/lib/utils";

export function BottomNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

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
                    "flex min-h-[44px] flex-col items-center justify-center gap-1 py-2.5 text-[10.5px] font-medium transition-colors",
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
          aria-label="Open full site menu"
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
              transition={{ type: "spring", damping: 30, stiffness: 280 }}
              className="fixed inset-x-0 bottom-0 z-50 max-h-[82vh] overflow-y-auto rounded-t-3xl bg-white p-5 pb-10 shadow-premium lg:hidden"
              role="dialog"
              aria-modal="true"
              aria-label="Full site menu"
            >
              <div className="sticky top-0 -mt-5 -mx-5 mb-2 flex items-center justify-between border-b border-navy-50 bg-white px-5 py-4">
                <span className="font-heading text-base font-bold text-navy-900">Menu — {SCHOOL.shortName}</span>
                <button onClick={() => setOpen(false)} aria-label="Close menu" className="flex h-9 w-9 items-center justify-center rounded-full bg-navy-50 text-navy-700">
                  <X size={18} />
                </button>
              </div>

              {/* Every category is visibly expandable — nothing is hidden
                  behind a guess. Matches the desktop mega-menu 1:1 so the
                  site's information architecture never differs by device. */}
              <ul className="mt-2 divide-y divide-navy-50">
                {PRIMARY_NAV.map((item) => {
                  const isOpen = expanded === item.label;
                  return (
                    <li key={item.href}>
                      {item.children ? (
                        <>
                          <button
                            onClick={() => setExpanded(isOpen ? null : item.label)}
                            aria-expanded={isOpen}
                            className="flex min-h-[44px] w-full items-center justify-between gap-3 py-3.5 text-left"
                          >
                            <span className="flex items-center gap-3">
                              <item.icon size={18} className="text-navy-600" />
                              <span className="text-sm font-semibold text-navy-900">{item.label}</span>
                            </span>
                            <ChevronDown size={16} className={cn("text-slate-400 transition-transform", isOpen && "rotate-180")} />
                          </button>
                          <AnimatePresence initial={false}>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <ul className="pb-3 pl-9">
                                  {item.children.map((child) => (
                                    <li key={child.href}>
                                      <Link
                                        href={child.href}
                                        onClick={() => setOpen(false)}
                                        className="flex min-h-[44px] items-center text-sm text-slate-600"
                                      >
                                        {child.label}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex min-h-[44px] items-center gap-3 py-3.5"
                        >
                          <item.icon size={18} className="text-navy-600" />
                          <span className="text-sm font-semibold text-navy-900">{item.label}</span>
                        </Link>
                      )}
                    </li>
                  );
                })}
                <li>
                  <Link href="/parents" onClick={() => setOpen(false)} className="flex min-h-[44px] items-center gap-3 py-3.5">
                    <span className="text-sm font-semibold text-navy-900 pl-[30px]">Parents</span>
                  </Link>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
