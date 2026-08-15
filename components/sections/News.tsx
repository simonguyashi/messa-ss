"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NEWS } from "@/lib/data";

export function News({ limit, showHeading = true }: { limit?: number; showHeading?: boolean }) {
  const items = limit ? NEWS.slice(0, limit) : NEWS;

  return (
    <section id="news" className="relative bg-mist section-py">
      <Container>
        {showHeading && (
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="eyebrow">
                <span className="h-px w-6 bg-gold-600" aria-hidden />
                News &amp; Announcements
              </span>
              <h2 className="mt-3 font-heading text-2xl font-bold text-navy-900 md:text-3xl">What&rsquo;s Happening at Messa</h2>
            </div>
            {limit && (
              <Link href="/news" className="text-sm font-semibold text-navy-700 hover:text-navy-900">
                View all news →
              </Link>
            )}
          </div>
        )}

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((n, i) => (
            <motion.article
              key={n.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft transition-all hover:-translate-y-1.5 hover:shadow-premium"
            >
              <Link href={`/news/${n.slug}`} className="relative h-52 w-full overflow-hidden">
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
              </Link>
              <div className="flex flex-1 flex-col p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-slate-400">{n.date}</p>
                <h3 className="mt-2 font-heading text-lg font-bold leading-snug text-navy-900">
                  <Link href={`/news/${n.slug}`}>{n.title}</Link>
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{n.excerpt}</p>
                <Link href={`/news/${n.slug}`} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700">
                  Read more
                  <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
