import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { NEWS } from "@/lib/data";

export function generateStaticParams() {
  return NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = NEWS.find((n) => n.slug === slug);
  if (!item) return {};
  return { title: item.title, description: item.excerpt };
}

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = NEWS.find((n) => n.slug === slug);
  if (!item) notFound();

  return (
    <>
      <Navbar />
      <main>
        <Breadcrumbs items={[{ label: "News", href: "/news" }, { label: item.title }]} />
        <article className="bg-white section-py">
          <Container className="mx-auto max-w-3xl">
            <span className="inline-block rounded-full bg-gold-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gold-700">
              {item.category}
            </span>
            <h1 className="mt-4 font-heading text-3xl font-bold text-navy-900 md:text-4xl">{item.title}</h1>
            <p className="mt-3 text-sm text-slate-400">{item.date}</p>

            <div className="relative mt-8 aspect-video w-full overflow-hidden rounded-2xl">
              <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 768px" />
            </div>

            <p className="mt-8 text-base leading-relaxed text-slate-700">{item.body}</p>

            <Link href="/news" className="mt-10 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-700 hover:text-navy-900">
              <ArrowLeft size={15} /> Back to News
            </Link>
          </Container>
        </article>
      </main>
      <Footer />
    </>
  );
}
