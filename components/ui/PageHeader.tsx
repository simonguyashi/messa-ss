import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
  /** Optional photographic hero background (220–300px). Omit only where
   * the page itself IS the visual experience (e.g. Gallery). */
  image?: string;
  imageAlt?: string;
}) {
  if (!image) {
    return (
      <>
        <Breadcrumbs items={crumbs} />
        <div className="border-b border-navy-50 bg-white py-10 md:py-12">
          <Container>
            <span className="eyebrow">
              <span className="h-px w-6 bg-gold-600" aria-hidden />
              {eyebrow}
            </span>
            <h1 className="mt-4 max-w-2xl font-heading text-3xl font-bold text-navy-900 md:text-4xl">{title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">{description}</p>
          </Container>
        </div>
      </>
    );
  }

  return (
    <div className="relative flex h-[240px] flex-col justify-between overflow-hidden sm:h-[260px] md:h-[280px]">
      <Image
        src={image}
        alt={imageAlt ?? ""}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/35" />

      {/* Breadcrumb integrated into the hero band, not a separate bar */}
      <nav aria-label="Breadcrumb" className="relative z-10">
        <Container>
          <ol className="flex flex-wrap items-center gap-1.5 pt-4 text-xs text-white/70">
            <li className="flex items-center gap-1.5">
              <Link href="/" className="flex items-center gap-1 hover:text-white">
                <Home size={12} /> Home
              </Link>
            </li>
            {crumbs.map((item, i) => (
              <li key={item.label} className="flex items-center gap-1.5">
                <ChevronRight size={12} className="text-white/40" />
                {item.href && i !== crumbs.length - 1 ? (
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                ) : (
                  <span className="font-medium text-white" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Container>
      </nav>

      <div className="relative z-10">
        <Container className="pb-6 md:pb-7">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">
            <span className="h-px w-6 bg-gold-500" aria-hidden />
            {eyebrow}
          </span>
          <h1 className="mt-2.5 max-w-2xl font-heading text-2xl font-bold text-white text-balance md:text-3xl">{title}</h1>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/75 md:text-base">{description}</p>
        </Container>
      </div>
    </div>
  );
}
