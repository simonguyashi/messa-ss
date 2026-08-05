"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NEWS } from "@/lib/data";

export function News() {
  return (
    <section id="news" className="relative bg-mist section-py">
      <Container>
        <SectionHeading
          eyebrow="News &amp; Announcements"
          title="What's Happening at Messa"
          description="The latest updates from admissions, academics and school life."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {NEWS.slice(0, 3).map((n, i) => (
            <motion.article
              key={n.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-premium"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-gold-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-navy-900">
                  {n.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{n.date}</p>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-navy-900">{n.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{n.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700">
                  Read more
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
