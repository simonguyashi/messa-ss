import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { DownloadsBody } from "@/components/sections/DownloadsBody";

export const metadata: Metadata = {
  title: "Downloads Centre",
  description: "Search and download admission forms, fee structures, the academic calendar and school policies.",
};

// Page purpose: "Where do I find official documents?" — one searchable
// centre instead of PDFs scattered across other pages.
export default function DownloadsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Downloads Centre"
          title="Forms, Policies & Documents"
          description="Search or filter by category to find admission forms, fee structures, the academic calendar and school policies."
          crumbs={[{ label: "Downloads" }]}
        />
        <DownloadsBody />
      </main>
      <Footer />
    </>
  );
}
