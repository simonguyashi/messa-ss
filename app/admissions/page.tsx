import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Admissions as AdmissionsProcess } from "@/components/sections/Admissions";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";

export const metadata: Metadata = {
  title: "Admissions",
  description:
    "How to join Messa Secondary School — Form I and Form V admission requirements, the application process, and frequently asked questions.",
};

// Page purpose: "How do I join this school?" — the single most common task
// for a first-time visitor, so it gets a permanent, shareable URL rather
// than being buried mid-scroll on the homepage.
export default function AdmissionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Admissions"
          title="How to Join Messa Secondary School"
          description="A simple, transparent process for Form I and Form V applicants and their families."
          crumbs={[{ label: "Admissions" }]}
          image="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Students walking on campus at Messa Secondary School"
        />
        <AdmissionsProcess />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
