import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ResultsTable } from "@/components/sections/ResultsTable";

export const metadata: Metadata = {
  title: "NECTA Results",
  description:
    "Messa Secondary School's official NECTA performance record — ACSEE 2026, CSEE 2025, FTNA 2025 and MOCK examination results.",
};

// Page purpose: "How has the school performed?" — kept separate from
// /academics because it answers a different question (verification /
// track record) for a different primary audience (parents comparing
// schools, government officers verifying standing).
export default function ResultsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Academics"
          title="NECTA Examination Results"
          description="A transparent record of Messa's performance — verified against the official NECTA-linked school profile."
          crumbs={[{ label: "Academics", href: "/academics" }, { label: "Results" }]}
        />
        <ResultsTable />
      </main>
      <Footer />
    </>
  );
}
