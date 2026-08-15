"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ChevronDown } from "lucide-react";
import { PRIMARY_NAV } from "@/lib/nav";
import { SCHOOL } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SearchOverlay } from "@/components/layout/SearchOverlay";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      {/* Top identity strip — government-site trust cue: reachable info always visible */}
      <div className="hidden bg-navy-900 py-1.5 text-white/80 lg:block">
        <Container className="flex items-center justify-between text-xs">
          <span>Centre No. {SCHOOL.centreNumber} &middot; {SCHOOL.council}, {SCHOOL.region}</span>
          <span className="flex items-center gap-4">
            <a href={`tel:${SCHOOL.phone.replace(/\s/g, "")}`} className="hover:text-white">{SCHOOL.phone}</a>
            <a href={SCHOOL.profileUrl} target="_blank" rel="noreferrer" className="hover:text-gold-400">
              Verified School Profile
            </a>
          </span>
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-navy-100 bg-white/95 backdrop-blur-md">
        <Container className="flex h-[72px] items-center justify-between">
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <span className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-navy-100">
              <Image src={SCHOOL.logo} alt="Messa Secondary School logo" fill className="object-contain p-1" sizes="44px" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block font-heading text-sm font-bold text-navy-900">Messa Secondary</span>
              <span className="block text-[11px] uppercase tracking-[0.16em] text-gold-700">School &middot; Mwanza</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-0.5 xl:flex">
            {PRIMARY_NAV.map((item) => {
              const active = isActive(item.href);
              if (item.children) {
                return (
                  <div
                    key={item.href}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "flex items-center gap-1 rounded-full px-3 py-2 text-[12.5px] font-medium text-navy-700 transition-colors hover:bg-navy-50",
                        active && "text-navy-900 bg-navy-50"
                      )}
                    >
                      {item.label}
                      <ChevronDown size={12} />
                    </Link>
                    <AnimatePresence>
                      {openDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full w-80 overflow-hidden rounded-xl border border-navy-100 bg-white p-2 shadow-premium"
                        >
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block rounded-lg px-4 py-3 hover:bg-mist"
                            >
                              <span className="block text-sm font-semibold text-navy-900">{child.label}</span>
                              <span className="block text-xs text-slate-500">{child.description}</span>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-3 py-2 text-[12.5px] font-medium text-navy-700 transition-colors hover:bg-navy-50",
                    active && "text-navy-900 bg-navy-50"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              aria-label="Search the site"
              className="flex h-10 w-10 items-center justify-center rounded-full text-navy-700 hover:bg-navy-50"
            >
              <Search size={19} />
            </button>
            <Button href="/admissions" variant="primary" size="md" className="hidden lg:inline-flex">
              Apply Now
            </Button>
          </div>
        </Container>
      </header>

      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
