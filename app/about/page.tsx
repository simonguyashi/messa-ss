import type { Metadata } from "next";
import Link from "next/link";
import { Award, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { About as AboutStory } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { SchoolProfile } from "@/components/sections/SchoolProfile";
import { ACHIEVEMENTS, SCHOOL } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Official profile, history, mission, vision, values and academic achievements of Messa Secondary School in Mwanza, Tanzania.",
};

// Page purpose: "What kind of school is this, and who runs it (at a glance)?"
// This is where narrative/marketing and verified institutional content
// lives, so it never competes with task-oriented content on the homepage.
// Full staff/leadership detail lives on its own page: /about/leadership.
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
          image="https://images.unsplash.com/photo-1622758940712-d946ce143bbf?q=80&w=464&auto=format&fit=crop"
          imageAlt="Messa Secondary School campus building"
        />

        <SchoolProfile />

        <div id="story" className="scroll-mt-24">
          <AboutStory />
        </div>
        <WhyChooseUs />

        {/* Leadership teaser — full detail lives on its own page since
            "who leads the school" is a distinct question from "what kind
            of school is this" */}
        <section className="bg-white py-14">
          <Container className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-navy-100 bg-mist p-8 text-center sm:flex-row sm:text-left">
            <div>
              <h2 className="font-heading text-lg font-bold text-navy-900">School Leadership &amp; Staff</h2>
              <p className="mt-1 text-sm text-slate-600">Meet the Head of School, administration and departments.</p>
            </div>
            <Link href="/about/leadership" className="flex shrink-0 items-center gap-1.5 rounded-full bg-navy-600 px-5 py-2.5 text-sm font-semibold text-white">
              View Leadership <ArrowRight size={15} />
            </Link>
          </Container>
        </section>

        {/* Achievements */}
        <section id="achievements" className="scroll-mt-24 bg-mist section-py">
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
