import Image from "next/image";
import { Instagram, MapPin, Phone, Mail, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SCHOOL } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] bg-grid-pattern bg-[size:36px_36px]"
        aria-hidden
      />
      <Container className="relative py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white overflow-hidden">
                <Image src={SCHOOL.logo} alt="Messa Secondary School logo" fill className="object-contain p-1" sizes="48px" />
              </span>
              <span className="font-heading text-lg font-bold">Messa Secondary School</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-white/60">
              A private boarding and day secondary school in Mwanza, Tanzania — building future leaders through
              academic excellence since {SCHOOL.registeredYear}.
            </p>
            <a
              href={SCHOOL.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Messa Secondary School on Instagram"
              className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-gold-500 hover:text-gold-400"
            >
              <Instagram size={18} />
            </a>
          </div>

          <nav aria-label="Quick links">
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">Quick Links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-white">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">Explore</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/65">
              <li><a href="#admissions" className="transition-colors hover:text-white">Admissions</a></li>
              <li><a href="#gallery" className="transition-colors hover:text-white">Gallery</a></li>
              <li><a href="#academics" className="transition-colors hover:text-white">Academic Combinations</a></li>
              <li><a href="#contact" className="transition-colors hover:text-white">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-gold-400">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm text-white/65">
              <li className="flex gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-gold-500" />
                <span>{SCHOOL.address}</span>
              </li>
              <li className="flex gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-gold-500" />
                <a href={`tel:${SCHOOL.phone.replace(/\s/g, "")}`} className="hover:text-white">{SCHOOL.phone}</a>
              </li>
              <li className="flex gap-3">
                <Mail size={18} className="mt-0.5 shrink-0 text-gold-500" />
                <a href={`mailto:${SCHOOL.email}`} className="hover:text-white">{SCHOOL.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Messa Secondary School. All rights reserved.</p>
          <a
            href={SCHOOL.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-white/45 transition-colors hover:text-gold-400"
          >
            <ShieldCheck size={14} />
            Verified School Profile — Official Academic Information
          </a>
        </div>
      </Container>
    </footer>
  );
}
