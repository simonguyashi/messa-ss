import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";

// Purpose: gives the homepage a human welcome without turning it into the
// full "About" story. Two sentences, then a link — matches the rule that
// marketing/narrative content belongs on /about, not Home.
export function PrincipalBrief() {
  return (
    <section className="bg-white py-14 md:py-16">
      <Container>
        <div className="flex flex-col items-center gap-6 rounded-2xl border border-navy-100 bg-mist p-8 text-center md:flex-row md:text-left">
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-4 ring-white shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300&auto=format&fit=crop"
              alt="Head of School"
              fill
              className="object-cover"
              sizes="80px"
            />
          </div>
          <div className="flex-1">
            <Quote size={18} className="mx-auto text-gold-500 md:mx-0" />
            <p className="mt-2 text-slate-700">
              [Placeholder] &ldquo;Every student who walks through our gates deserves discipline, high expectations
              and genuine care — that is the foundation of everything we do at Messa.&rdquo;
            </p>
            <p className="mt-2 text-sm font-semibold text-navy-900">[Placeholder Name] — Head of School</p>
          </div>
          <Link href="/about" className="group flex shrink-0 items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-navy-900">
            Read full message
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
