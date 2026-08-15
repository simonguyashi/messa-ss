import type { Metadata } from "next";
import Link from "next/link";
import { NotebookPen, FileText, Clock, CalendarDays, BarChart3, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { SchoolLife } from "@/components/sections/SchoolLife";
import { OLEVEL_SUBJECTS, ALEVEL_SUBJECTS } from "@/lib/data";

export const metadata: Metadata = {
  title: "Students",
  description: "Learning notes, past papers, timetable, academic calendar and results for Messa Secondary School students.",
};

// [PLACEHOLDER] Notes/papers/timetable are not yet digitised — shown as an
// honest "coming soon" state per subject rather than fabricated content or
// dead links. This is where the future Headmaster Dashboard (see README)
// would let staff upload real files directly into these lists.
function ResourceBlock({
  id,
  icon: Icon,
  title,
  question,
  subjects,
}: {
  id: string;
  icon: React.ElementType;
  title: string;
  question: string;
  subjects: string[];
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-navy-50 py-14">
      <Container>
        <div className="flex items-start gap-4">
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-600 text-white">
            <Icon size={20} />
          </span>
          <div>
            <h2 className="font-heading text-xl font-bold text-navy-900">{title}</h2>
            <p className="mt-1 text-sm text-slate-500">{question}</p>
          </div>
        </div>
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((s) => (
            <div key={s} className="flex items-center justify-between rounded-xl border border-navy-50 bg-mist px-4 py-3 text-sm">
              <span className="font-medium text-navy-800">{s}</span>
              <span className="text-xs text-slate-400">Coming soon</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default function StudentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Students"
          title="Your Learning Resources"
          description="Notes, past papers, timetable, calendar and results — everything you need for the term, in one place."
          crumbs={[{ label: "Students" }]}
          image="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Students studying in a classroom at Messa Secondary School"
        />

        <ResourceBlock id="notes" icon={NotebookPen} title="Learning Notes" question="Where can I find subject notes?" subjects={[...OLEVEL_SUBJECTS.slice(0, 6)]} />
        <ResourceBlock id="past-papers" icon={FileText} title="Past Papers" question="Where can I find previous exam papers?" subjects={[...ALEVEL_SUBJECTS.slice(0, 6)]} />

        <section id="timetable" className="scroll-mt-24 border-t border-navy-50 bg-mist py-14">
          <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-600 text-white">
                <Clock size={20} />
              </span>
              <div>
                <h2 className="font-heading text-xl font-bold text-navy-900">Class Timetable</h2>
                <p className="mt-1 text-sm text-slate-500">[Placeholder] The current term's timetable will be published here.</p>
              </div>
            </div>
            <Link href="/downloads" className="flex shrink-0 items-center gap-1.5 rounded-full bg-navy-600 px-5 py-2.5 text-sm font-semibold text-white">
              Check Downloads <ArrowRight size={15} />
            </Link>
          </Container>
        </section>

        <section id="calendar" className="scroll-mt-24 border-t border-navy-50 py-14">
          <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-600 text-white">
                <CalendarDays size={20} />
              </span>
              <div>
                <h2 className="font-heading text-xl font-bold text-navy-900">Academic Calendar</h2>
                <p className="mt-1 text-sm text-slate-500">[Placeholder] Term dates and holidays will be published here.</p>
              </div>
            </div>
            <Link href="/downloads" className="flex shrink-0 items-center gap-1.5 rounded-full bg-navy-600 px-5 py-2.5 text-sm font-semibold text-white">
              Check Downloads <ArrowRight size={15} />
            </Link>
          </Container>
        </section>

        <section id="results" className="scroll-mt-24 border-t border-navy-50 bg-mist py-14">
          <Container className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-600 text-white">
                <BarChart3 size={20} />
              </span>
              <div>
                <h2 className="font-heading text-xl font-bold text-navy-900">School Results</h2>
                <p className="mt-1 text-sm text-slate-500">View Messa's official NECTA performance record.</p>
              </div>
            </div>
            <Link href="/academics/results" className="flex shrink-0 items-center gap-1.5 rounded-full bg-gold-600 px-5 py-2.5 text-sm font-bold text-navy-900">
              View Results <ArrowRight size={15} />
            </Link>
          </Container>
        </section>

        <SchoolLife />
      </main>
      <Footer />
    </>
  );
}
