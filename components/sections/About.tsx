"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target, Eye, HeartHandshake, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SCHOOL } from "@/lib/data";

const PILLARS = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To provide disciplined, high-quality secondary education that equips every student with the knowledge, character and confidence to excel — academically and beyond.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be recognised as one of Mwanza Region's leading private secondary schools, known for academic excellence and the leaders it produces.",
  },
  {
    icon: HeartHandshake,
    title: "Our Core Values",
    text: "Discipline, integrity, academic excellence, respect and community — the foundation of every student's journey at Messa.",
  },
];

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-white section-py">
      <Container>
        <SectionHeading
          eyebrow="Who We Are"
          title="A Legacy of Discipline and Academic Excellence"
          description={`Registered in ${SCHOOL.registeredYear}, Messa Secondary School is a private boarding and day school in Buhongwa Ward, Mwanza City Council, offering both O-Level and A-Level education to boys and girls.`}
        />

        <div className="mt-16 grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-premium">
              <Image
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop"
                alt="Students at Messa Secondary School campus"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 480px"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 w-56 rounded-2xl bg-white p-5 shadow-premium sm:right-6 md:-right-10">
              <p className="font-heading text-3xl font-bold text-navy-900">100%</p>
              <p className="mt-1 text-sm text-slate-500">ACSEE &amp; FTNA pass rate, 2025/26</p>
            </div>
            <div className="absolute -left-6 top-8 hidden h-24 w-24 rounded-full bg-gold-400/20 blur-2xl sm:block" aria-hidden />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3 className="font-heading text-2xl font-bold text-navy-900">A Message from the Headmaster</h3>
            <div className="relative mt-5 rounded-2xl border border-navy-100 bg-mist p-7">
              <Quote className="text-gold-500" size={28} />
              <p className="mt-4 text-slate-600 leading-relaxed">
                [Placeholder] &ldquo;At Messa Secondary School, we believe every student deserves an environment
                built on discipline, high expectations and genuine care. Our results reflect the effort of our
                teachers, the commitment of our parents, and the determination of our students. We look forward
                to welcoming your family into ours.&rdquo;
              </p>
              <p className="mt-4 text-sm font-semibold text-navy-900">[Placeholder Name] — Head of School</p>
            </div>

            <p className="mt-6 text-slate-600 leading-relaxed">
              Messa operates as both a Boarding and Day school for Form I–VI, teaching{" "}
              <strong className="text-navy-900">18 O-Level</strong> and{" "}
              <strong className="text-navy-900">13 A-Level</strong> subjects. The school also serves as an
              official private-candidate examination centre (registration P4575), reflecting NECTA&rsquo;s
              confidence in its administration and facilities.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group rounded-2xl border border-navy-100 bg-white p-8 shadow-soft transition-all hover:-translate-y-1 hover:shadow-premium"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy-50 text-navy-600 transition-colors group-hover:bg-navy-600 group-hover:text-white">
                <p.icon size={22} />
              </span>
              <h4 className="mt-5 font-heading text-lg font-bold text-navy-900">{p.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
