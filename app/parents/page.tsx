import type { Metadata } from "next";
import Link from "next/link";
import { Wallet, Megaphone, Users, FileStack, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { News } from "@/components/sections/News";
import { FEE_NOTICE } from "@/lib/data";

export const metadata: Metadata = {
  title: "Parents",
  description: "Fee information, announcements, meetings and downloads for parents and guardians at Messa Secondary School.",
};

export default function ParentsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Parents"
          title="Everything for Parents & Guardians"
          description="Fees, announcements, meetings and communication — how to stay informed about your child's progress."
          crumbs={[{ label: "Parents" }]}
          image="https://images.unsplash.com/photo-1758270704113-9fb2ac81788f?q=80&w=1031&auto=format&fit=crop"
          imageAlt="School assembly event at Messa Secondary School"
        />

        <section id="fees" className="scroll-mt-24 border-t border-navy-50 py-14">
          <Container>
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-600 text-white">
                <Wallet size={20} />
              </span>
              <div className="flex-1">
                <h2 className="font-heading text-xl font-bold text-navy-900">{FEE_NOTICE.headline}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600">{FEE_NOTICE.note}</p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/downloads" className="flex items-center gap-1.5 rounded-full bg-navy-600 px-5 py-2.5 text-sm font-semibold text-white">
                    Fee Structure (Downloads) <ArrowRight size={15} />
                  </Link>
                  <Link href="/contact" className="flex items-center gap-1.5 rounded-full border border-navy-200 px-5 py-2.5 text-sm font-semibold text-navy-800">
                    Ask the Bursar's Office
                  </Link>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section id="announcements" className="scroll-mt-24 border-t border-navy-50 bg-mist">
          <div className="pt-14">
            <Container className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-600 text-white">
                <Megaphone size={20} />
              </span>
              <div>
                <h2 className="font-heading text-xl font-bold text-navy-900">Latest Announcements</h2>
                <p className="mt-1 text-sm text-slate-500">Recent school news relevant to parents.</p>
              </div>
            </Container>
          </div>
          <News limit={3} showHeading={false} />
        </section>

        <section id="meetings" className="scroll-mt-24 border-t border-navy-50 py-14">
          <Container className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-600 text-white">
                <Users size={20} />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-navy-900">Parent Meetings</h3>
                <p className="mt-1 text-sm text-slate-500">[Placeholder] Termly parent meeting dates will be posted here.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-white p-6 shadow-soft">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-600 text-white">
                <FileStack size={20} />
              </span>
              <div>
                <h3 className="font-heading text-base font-bold text-navy-900">Progress Reports</h3>
                <p className="mt-1 text-sm text-slate-500">[Placeholder] Contact the school office to request your child's report.</p>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
