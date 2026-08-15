import Link from "next/link";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SCHOOL } from "@/lib/data";

export function ContactStrip() {
  return (
    <section className="bg-navy-900 py-12 text-white">
      <Container className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div className="grid gap-4 sm:grid-cols-3 md:gap-8">
          <span className="flex items-center justify-center gap-2 text-sm text-white/80 md:justify-start">
            <MapPin size={16} className="text-gold-400" /> {SCHOOL.ward}, {SCHOOL.council}
          </span>
          <a href={`tel:${SCHOOL.phone.replace(/\s/g, "")}`} className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white md:justify-start">
            <Phone size={16} className="text-gold-400" /> {SCHOOL.phone}
          </a>
          <a href={`mailto:${SCHOOL.email}`} className="flex items-center justify-center gap-2 text-sm text-white/80 hover:text-white md:justify-start">
            <Mail size={16} className="text-gold-400" /> {SCHOOL.email}
          </a>
        </div>
        <Link
          href="/contact"
          className="group flex items-center gap-1.5 rounded-full bg-gold-600 px-5 py-2.5 text-sm font-bold text-navy-900 transition-colors hover:bg-gold-400"
        >
          Full Contact Page <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </Container>
    </section>
  );
}
