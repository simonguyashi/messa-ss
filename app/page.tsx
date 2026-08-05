import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Stats } from "@/components/sections/Stats";
import { Academics } from "@/components/sections/Academics";
import { Facilities } from "@/components/sections/Facilities";
import { Gallery } from "@/components/sections/Gallery";
import { SchoolLife } from "@/components/sections/SchoolLife";
import { News } from "@/components/sections/News";
import { Testimonials } from "@/components/sections/Testimonials";
import { Admissions } from "@/components/sections/Admissions";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <WhyChooseUs />
        <Stats />
        <Academics />
        <Facilities />
        <Gallery />
        <SchoolLife />
        <News />
        <Testimonials />
        <Admissions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
