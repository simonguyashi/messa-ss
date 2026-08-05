"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GALLERY, GalleryImage } from "@/lib/data";
import { cn } from "@/lib/utils";

const CATEGORIES: Array<GalleryImage["category"] | "All"> = [
  "All",
  "Campus",
  "Students",
  "Academics",
  "Laboratory",
  "Sports",
  "Events",
];

export function Gallery() {
  const [filter, setFilter] = useState<(typeof CATEGORIES)[number]>("All");
  const images = filter === "All" ? GALLERY : GALLERY.filter((g) => g.category === filter);

  return (
    <section id="gallery" className="relative bg-white section-py">
      <Container>
        <SectionHeading
          eyebrow="Campus Gallery"
          title="Life at Messa Secondary School"
          description="A visual look at campus, classrooms, laboratories, sports and school events."
        />

        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                filter === cat ? "bg-navy-600 text-white" : "bg-mist text-navy-700 hover:bg-navy-50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <PhotoProvider maskOpacity={0.9}>
          <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
            {images.map((img, i) => (
              <motion.div
                key={img.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 6) * 0.06 }}
                className="group relative overflow-hidden rounded-2xl break-inside-avoid"
              >
                <PhotoView src={img.src}>
                  <div className={cn("relative w-full cursor-zoom-in", i % 5 === 0 ? "aspect-[4/5]" : "aspect-[4/3]")}>
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-navy-900/0 transition-colors group-hover:bg-navy-900/20" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-[11px] font-semibold text-navy-800 opacity-0 transition-opacity group-hover:opacity-100">
                      {img.category}
                    </span>
                  </div>
                </PhotoView>
              </motion.div>
            ))}
          </div>
        </PhotoProvider>
      </Container>
    </section>
  );
}
