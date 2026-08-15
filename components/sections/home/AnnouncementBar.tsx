"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Megaphone, X } from "lucide-react";

// [PLACEHOLDER] Wire this to a real "latest announcement" source once the
// school has a way to publish one (see the Headmaster Dashboard note in
// README.md). Kept as a single line so it never competes with the page
// content below it.
const ANNOUNCEMENT = {
  text: "2026 Admissions are open for Form I and Form V — limited boarding places.",
  href: "/admissions",
};

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: "auto" }}
          exit={{ height: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden bg-gold-600 text-navy-900"
        >
          <div className="mx-auto flex max-w-[1320px] items-center justify-between gap-3 px-4 py-2 text-sm">
            <Link href={ANNOUNCEMENT.href} className="flex min-w-0 items-center gap-2 font-medium">
              <Megaphone size={15} className="shrink-0" />
              <span className="truncate">{ANNOUNCEMENT.text}</span>
              <span className="hidden shrink-0 underline sm:inline">Learn more</span>
            </Link>
            <button
              onClick={() => setVisible(false)}
              aria-label="Dismiss announcement"
              className="shrink-0 rounded-full p-1 hover:bg-navy-900/10"
            >
              <X size={15} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
