import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { Gallery as GalleryBody } from "@/components/sections/Gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of Messa Secondary School's campus, students, laboratories, sports and events.",
};

// Page purpose: "What does the school look like?"
export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="Campus Gallery"
          title="Life at Messa Secondary School"
          description="A visual look at campus, classrooms, laboratories, sports and school events."
          crumbs={[{ label: "Gallery" }]}
        />
        <GalleryBody />
      </main>
      <Footer />
    </>
  );
}
