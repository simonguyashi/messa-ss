import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";

type Crumb = { label: string; href?: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="border-b border-navy-50 bg-mist/60">
      <Container>
        <ol className="flex flex-wrap items-center gap-1.5 py-3 text-xs sm:text-sm">
          <li className="flex items-center gap-1.5">
            <Link href="/" className="flex items-center gap-1 text-slate-500 hover:text-navy-700">
              <Home size={13} /> Home
            </Link>
          </li>
          {items.map((item, i) => (
            <li key={item.label} className="flex items-center gap-1.5">
              <ChevronRight size={13} className="text-slate-300" />
              {item.href && i !== items.length - 1 ? (
                <Link href={item.href} className="text-slate-500 hover:text-navy-700">
                  {item.label}
                </Link>
              ) : (
                <span className="font-medium text-navy-800" aria-current="page">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </nav>
  );
}
