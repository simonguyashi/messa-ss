"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TESTIMONIALS } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section className="relative bg-white section-py">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Voices from Our Community"
          description="What parents, students and alumni say about their experience at Messa."
        />

        <div className="mx-auto mt-16 max-w-3xl">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            pagination={{ clickable: true, bulletClass: "swiper-pagination-bullet !bg-navy-200", bulletActiveClass: "swiper-pagination-bullet-active !bg-navy-600" }}
            loop
            className="pb-14"
          >
            {TESTIMONIALS.map((t) => (
              <SwiperSlide key={t.id}>
                <div className="rounded-3xl border border-navy-100 bg-mist p-10 text-center">
                  <Quote className="mx-auto text-gold-500" size={32} />
                  <p className="mt-6 text-lg leading-relaxed text-navy-900 md:text-xl">&ldquo;{t.quote}&rdquo;</p>
                  <div className="mt-8 flex items-center justify-center gap-3">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white shadow-soft">
                      <Image src={t.image} alt={t.name} fill className="object-cover" sizes="48px" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-navy-900">{t.name}</p>
                      <p className="text-xs text-slate-500">{t.role}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </section>
  );
}
