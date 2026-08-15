"use client";

import { useState, useMemo } from "react";
import { Search, FileDown, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { DOWNLOADS, DOWNLOAD_CATEGORIES } from "@/lib/downloads";
import { cn } from "@/lib/utils";

export function DownloadsBody() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("All");

  const results = useMemo(() => {
    return DOWNLOADS.filter((d) => {
      const matchesQuery = d.title.toLowerCase().includes(query.toLowerCase());
      const matchesCategory = category === "All" || d.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <section className="bg-white section-py">
      <Container>
        {/* Search + filter — matches the brief's requirement that every
            document be searchable, not just browsable in a long list */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Search size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              type="text"
              placeholder="Search documents (e.g. 'fees', 'admission form')"
              className="w-full rounded-full border border-navy-100 bg-mist py-3 pl-11 pr-4 text-sm text-navy-900 outline-none focus:border-navy-600"
              aria-label="Search downloads"
            />
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["All", ...DOWNLOAD_CATEGORIES].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                category === cat ? "bg-navy-600 text-white" : "bg-mist text-navy-700 hover:bg-navy-50"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {results.map((doc) => (
            <div key={doc.title} className="flex items-start gap-4 rounded-2xl border border-navy-100 bg-mist p-5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy-600 text-white">
                <FileDown size={19} />
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wide text-gold-700">{doc.category}</p>
                <h3 className="mt-1 font-heading text-sm font-bold text-navy-900">{doc.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{doc.description}</p>
                {doc.file ? (
                  <a href={doc.file} className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-navy-700 hover:text-navy-900">
                    <FileDown size={13} /> Download PDF
                  </a>
                ) : (
                  <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400">
                    <Clock size={13} /> Coming soon
                  </span>
                )}
              </div>
            </div>
          ))}
          {results.length === 0 && (
            <p className="col-span-2 py-10 text-center text-sm text-slate-500">No documents match your search.</p>
          )}
        </div>
      </Container>
    </section>
  );
}
