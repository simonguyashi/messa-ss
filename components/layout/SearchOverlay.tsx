"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X, FileText, LayoutGrid, Wrench } from "lucide-react";
import { SEARCH_INDEX } from "@/lib/search-index";

const GROUP_ICON = { Page: LayoutGrid, Document: FileText, Service: Wrench };

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 80);
    else setQuery("");
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.keywords.some((k) => k.toLowerCase().includes(q))
    ).slice(0, 8);
  }, [query]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Search the site"
            className="fixed inset-x-4 top-20 z-[70] mx-auto max-w-xl overflow-hidden rounded-2xl bg-white shadow-premium sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2"
          >
            <div className="flex items-center gap-3 border-b border-navy-50 px-5 py-4">
              <Search size={20} className="shrink-0 text-navy-400" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                placeholder="Search fees, results, admissions, notes..."
                className="w-full bg-transparent text-sm text-navy-900 outline-none placeholder:text-slate-400"
                aria-label="Search query"
              />
              <button onClick={onClose} aria-label="Close search" className="shrink-0 rounded-full p-1.5 text-slate-400 hover:bg-navy-50">
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {query && results.length === 0 && (
                <p className="px-4 py-8 text-center text-sm text-slate-500">
                  No results for &ldquo;{query}&rdquo;. Try &ldquo;fees&rdquo;, &ldquo;results&rdquo; or &ldquo;admissions&rdquo;.
                </p>
              )}
              {!query && (
                <p className="px-4 py-6 text-center text-sm text-slate-400">
                  Try: fees &middot; results &middot; admissions &middot; notes &middot; timetable
                </p>
              )}
              {results.map((r) => {
                const Icon = GROUP_ICON[r.group];
                return (
                  <Link
                    key={r.url}
                    href={r.url}
                    onClick={onClose}
                    className="flex items-start gap-3 rounded-xl px-4 py-3 transition-colors hover:bg-mist"
                  >
                    <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-navy-50 text-navy-600">
                      <Icon size={16} />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold text-navy-900">{r.title}</span>
                      <span className="block text-xs text-slate-500">{r.description}</span>
                    </span>
                  </Link>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
