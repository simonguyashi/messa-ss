import type { Metadata } from "next";
import { Award, UserCircle2 } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { About as AboutStory } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { ACHIEVEMENTS, LEADERSHIP, SCHOOL } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Messa Secondary School's history, mission, vision, values, leadership and academic achievements in Mwanza, Tanzania.",
};

// Page purpose: "What kind of school is this, and who runs it?" — this is
// where narrative/marketing content lives (history, mission, achievements)
// so it never competes with task-oriented content on the homepage.
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="About Messa"
          title="A Legacy of Discipline and Academic Excellence"
          description={`Registered in ${SCHOOL.registeredYear}, Messa Secondary School is a private boarding and day school in Buhongwa Ward, Mwanza City Council.`}
          crumbs={[{ label: "About" }]}
        />

        <AboutStory />
        <WhyChooseUs />

        {/* Leadership */}
        <section id="leadership" className="bg-white section-py">
          <Container>
            <h2 className="font-heading text-2xl font-bold text-navy-900 md:text-3xl">School Leadership</h2>
            <p className="mt-2 max-w-xl text-slate-600">
              [Placeholder] Names to be confirmed by the school office — structure shown reflects typical roles.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {LEADERSHIP.map((person) => (
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

        {/* Achievements */}
        <section className="bg-mist section-py">
          <Container>
            <h2 className="font-heading text-2xl font-bold text-navy-900 md:text-3xl">Achievements</h2>
            <p className="mt-2 max-w-xl text-slate-600">Verified results and recognitions from NECTA performance records.</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {ACHIEVEMENTS.map((a) => (
                <div key={a} className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-soft">
                  <Award size={18} className="mt-0.5 shrink-0 text-gold-600" />
                  <p className="text-sm leading-relaxed text-slate-700">{a}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
