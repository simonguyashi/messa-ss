import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/sections/home/AnnouncementBar";
import { Hero } from "@/components/sections/home/Hero";
import { RoleSelector } from "@/components/sections/home/RoleSelector";
import { QuickAccess } from "@/components/sections/home/QuickAccess";
import { HomeStats } from "@/components/sections/home/HomeStats";
import { News } from "@/components/sections/News";
import { PrincipalBrief } from "@/components/sections/home/PrincipalBrief";
import { ContactStrip } from "@/components/sections/home/ContactStrip";

// ----------------------------------------------------------------------------
// HOMEPAGE — deliberately short. It answers exactly four questions:
//   1. What school is this?          -> Hero (photo-led, per client direction)
//   2. What do you need today?       -> RoleSelector + QuickAccess
//   3. What's new?                   -> News (latest 3)
//   4. How do I contact the school?  -> ContactStrip
// Everything else (history, mission, achievements, testimonials, full
// facilities tour) has its own page. Nothing appears here "because modern
// websites have it" — every section above answers one of the four questions.
// ----------------------------------------------------------------------------
export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Navbar />
      <main>
        <Hero />
        <RoleSelector />
        <QuickAccess />
        <HomeStats />
        <News limit={3} />
        <PrincipalBrief />
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
