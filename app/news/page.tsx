import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { News as NewsBody } from "@/components/sections/News";

export const metadata: Metadata = {
  title: "News & Announcements",
  description: "The latest news, announcements and events from Messa Secondary School.",
};

// Page purpose: "What's new?" — the full archive; the homepage only ever
// shows the 3 most recent so it stays short.
export default function NewsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          eyebrow="News & Announcements"
          title="What's Happening at Messa"
          description="The latest updates from admissions, academics and school life."
          crumbs={[{ label: "News" }]}
          image="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000&auto=format&fit=crop"
          imageAlt="Messa Secondary School campus grounds"
        />
        <NewsBody showHeading={false} />
      </main>
      <Footer />
    </>
  );
}
