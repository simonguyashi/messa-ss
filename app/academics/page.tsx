import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Academics as AcademicsBody } from "@/components/sections/Academics";
import { Facilities } from "@/components/sections/Facilities";

export const metadata: Metadata = {
  title: "Academics — Subjects & Combinations",
  description:
    "Explore Messa Secondary School's O-Level and A-Level subjects, all 10 A-Level combinations including PMCs and PGM, and academic facilities.",
};

// Page purpose: "What do I study here?" — subjects, combinations and the
// facilities that support them belong together; performance data (a
// different question) lives on the separate /academics/results page.
export default function AcademicsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Academics"
          title="What You'll Study at Messa"
          description="18 O-Level subjects, 13 A-Level subjects, and 10 A-Level combinations — taught across dedicated science, ICT and humanities facilities."
          crumbs={[{ label: "Academics" }]}
        />
        <AcademicsBody />
        <Facilities />
      </main>
      <Footer />
    </>
  );
}
