"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Instagram, Send, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SCHOOL } from "@/lib/data";
import { cn } from "@/lib/utils";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  message: z.string().min(10, "Message should be at least 10 characters"),
});

type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit() {
    // No backend is wired up yet — replace with an API route or email service.
    await new Promise((r) => setTimeout(r, 700));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4500);
  }

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(SCHOOL.mapsEmbedQuery)}&output=embed`;

  return (
    <section id="contact" className="relative bg-white section-py">
      <Container>
        <div className="grid gap-10 lg:grid-cols-5">
          {/* Info + map */}
          <div className="lg:col-span-2">
            <div className="space-y-5">
              {[
                { icon: MapPin, label: "Address", value: SCHOOL.address },
                { icon: Phone, label: "Phone", value: SCHOOL.phone, href: `tel:${SCHOOL.phone.replace(/\s/g, "")}` },
                { icon: Mail, label: "Email", value: SCHOOL.email, href: `mailto:${SCHOOL.email}` },
                { icon: Instagram, label: "Instagram", value: "@messasecondary", href: SCHOOL.instagram },
              ].map((item) => (
                <div key={item.label} className="flex gap-4 rounded-2xl border border-navy-100 bg-mist p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-600 text-white">
                    <item.icon size={18} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="mt-1 block text-sm font-medium text-navy-900 hover:text-gold-700">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-navy-900">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 h-64 w-full overflow-hidden rounded-2xl border border-navy-100 shadow-soft">
              <iframe
                title="Messa Secondary School location map"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Map showing the approximate location of Messa Secondary School"
              />
            </div>
            <p className="mt-2 text-xs text-slate-400">
              Map pin is approximate (Buhongwa Ward, Mwanza CC) — to be replaced with the exact campus location.
            </p>
          </div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="lg:col-span-3 rounded-3xl border border-navy-100 bg-mist p-8 shadow-soft md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-sm font-semibold text-navy-900">Full Name</label>
                <input
                  id="name"
                  {...register("name")}
                  className={cn(
                    "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-navy-600",
                    errors.name ? "border-red-400" : "border-navy-100"
                  )}
                  placeholder="Jane Mwakalinga"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="mt-1.5 text-xs text-red-500">{errors.name.message}</p>}
              </div>

              <div className="sm:col-span-1">
                <label htmlFor="phone" className="text-sm font-semibold text-navy-900">Phone Number</label>
                <input
                  id="phone"
                  {...register("phone")}
                  className={cn(
                    "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-navy-600",
                    errors.phone ? "border-red-400" : "border-navy-100"
                  )}
                  placeholder="+255 7XX XXX XXX"
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <p className="mt-1.5 text-xs text-red-500">{errors.phone.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="email" className="text-sm font-semibold text-navy-900">Email Address</label>
                <input
                  id="email"
                  type="email"
                  {...register("email")}
                  className={cn(
                    "mt-2 w-full rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-navy-600",
                    errors.email ? "border-red-400" : "border-navy-100"
                  )}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="mt-1.5 text-xs text-red-500">{errors.email.message}</p>}
              </div>

              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-semibold text-navy-900">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className={cn(
                    "mt-2 w-full resize-none rounded-xl border bg-white px-4 py-3 text-sm text-navy-900 outline-none transition-colors focus:border-navy-600",
                    errors.message ? "border-red-400" : "border-navy-100"
                  )}
                  placeholder="Tell us about your enquiry — admissions, fees, or a school visit."
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="mt-1.5 text-xs text-red-500">{errors.message.message}</p>}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-600 px-6 py-4 text-sm font-bold text-navy-900 shadow-[0_10px_30px_-8px_rgba(234,179,8,0.6)] transition-all hover:bg-gold-400 hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto"
            >
              {submitted ? (
                <>
                  <CheckCircle2 size={18} /> Message Sent
                </>
              ) : (
                <>
                  <Send size={16} /> {isSubmitting ? "Sending..." : "Send Message"}
                </>
              )}
            </button>
          </motion.form>
        </div>
      </Container>
    </section>
  );
}
