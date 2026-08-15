import Image from "next/image";
import { ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SCHOOL } from "@/lib/data";

// Purpose: answers question 1 of the homepage's four — "What school is this?"
// No autoplay slider, no video background: a single optimized image keeps
// this fast on 3G, and a static band is scanned in under a second rather
// than requiring the visitor to wait through a slideshow transition.
export function IdentityBand() {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=2000&auto=format&fit=crop"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900 via-navy-900/95 to-navy-900/80" />
      </div>

      <Container className="relative flex flex-col items-start gap-6 py-12 md:flex-row md:items-center md:justify-between md:py-14">
        <div className="flex items-center gap-4">
          <span className="relative flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-premium">
            <Image src={SCHOOL.logo} alt="Messa Secondary School logo" fill className="object-contain p-2" sizes="64px" />
          </span>
          <div>
            <h1 className="font-heading text-xl font-bold sm:text-2xl">Messa Secondary School</h1>
            <p className="mt-1 text-sm text-white/70">
              Private &middot; Boarding &amp; Day &middot; O-Level &amp; A-Level &middot; {SCHOOL.ward}, {SCHOOL.council}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70">
          <ShieldCheck size={15} className="text-gold-400" />
          Centre No. {SCHOOL.centreNumber} &middot; Verified NECTA record
        </div>
      </Container>
    </section>
  );
}
