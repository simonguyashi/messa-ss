import type { Metadata } from "next";
import { UserCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { LEADERSHIP } from "@/lib/data";

export const metadata: Metadata = {
  title: "Leadership & Administration",
  description: "Meet the Head of School, administration and heads of department at Messa Secondary School.",
};

const GROUPS = ["Administration", "Heads of Department"] as const;

// Page purpose: "Who leads and runs this school?" — the question a
// government officer verifies first, and a parent uses to judge legitimacy.
// Kept separate from /about because it is reference information (looked up
// once) rather than narrative (read once, top to bottom).
export default function LeadershipPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="About Messa"
          title="Leadership & Administration"
          description="[Placeholder] Names below are to be confirmed by the school office — the structure reflects typical roles at a Tanzanian secondary school."
          crumbs={[{ label: "About", href: "/about" }, { label: "Leadership" }]}
          image="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Teacher leading a class at Messa Secondary School"
        />

        {GROUPS.map((group) => (
          <section key={group} className="border-t border-navy-50 py-14 first:border-t-0">
            <Container>
              <h2 className="font-heading text-xl font-bold text-navy-900">{group}</h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {LEADERSHIP.filter((p) => p.group === group).map((person) => (
                  <div key={person.role} className="rounded-2xl border border-navy-100 bg-mist p-6 text-center">
                    <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy-100 text-navy-600">
                      <UserCircle2 size={30} />
                    </span>
                    <p className="mt-4 text-sm font-bold text-navy-900">{person.name}</p>
                    <p className="mt-1 text-xs text-slate-500">{person.role}</p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
}
