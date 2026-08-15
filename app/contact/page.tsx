import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Contact as ContactBody } from "@/components/sections/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Messa Secondary School — phone, email, address, office hours and location map in Buhongwa Ward, Mwanza City Council.",
};

// Page purpose: "How do I reach the school?" — one question, one page.
export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Get in Touch"
          title="Visit or Contact Messa Secondary School"
          description="Our admissions office is ready to answer questions about enrolment, fees and school life."
          crumbs={[{ label: "Contact" }]}
        />
        <ContactBody />
      </main>
      <Footer />
    </>
  );
}
