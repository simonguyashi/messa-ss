import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";

type Crumb = { label: string; href?: string };

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
}: {
  eyebrow: string;
  title: string;
  description: string;
  crumbs: Crumb[];
}) {
  return (
    <>
      <Breadcrumbs items={crumbs} />
      <div className="border-b border-navy-50 bg-white py-12 md:py-16">
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
