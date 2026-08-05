"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useActiveSection } from "@/hooks/useActiveSection";
import { NAV_LINKS, SCHOOL } from "@/lib/data";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrollPosition(30);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(NAV_LINKS.map((l) => l.href.replace("#", "")));

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500",
        scrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 shrink-0">
          <span
            className={cn(
              "relative flex h-11 w-11 items-center justify-center rounded-full ring-2 transition-colors overflow-hidden bg-white",
              scrolled ? "ring-navy-100" : "ring-white/40"
            )}
          >
            <Image src={SCHOOL.logo} alt="Messa Secondary School logo" fill className="object-contain p-1" sizes="44px" />
          </span>
          <span className="leading-tight">
            <span
              className={cn(
                "block font-heading text-sm md:text-base font-bold tracking-tight transition-colors",
                scrolled ? "text-navy-900" : "text-white"
              )}
            >
              Messa Secondary
            </span>
            <span className={cn("block text-[11px] uppercase tracking-[0.18em]", scrolled ? "text-gold-700" : "text-gold-400")}>
              School · Mwanza
            </span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  scrolled ? "text-navy-700 hover:text-navy-900" : "text-white/85 hover:text-white",
                  isActive && (scrolled ? "text-navy-900" : "text-white")
                )}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className={cn("absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full", scrolled ? "bg-gold-600" : "bg-gold-400")}
                  />
                )}
              </a>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <Button href="#admissions" variant="primary" size="md">
            Apply Now
          </Button>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
            scrolled ? "text-navy-900 bg-navy-50" : "text-white bg-white/10"
          )}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden glass lg:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium text-navy-900 hover:bg-navy-50"
                >
                  {link.label}
                </a>
              ))}
              <Button href="#admissions" variant="primary" className="mt-2 w-full" onClick={() => setOpen(false)}>
                Apply Now
              </Button>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
