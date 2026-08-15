"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      <span className={cn("eyebrow", light && "text-gold-400")}>
        <span className="h-px w-6 bg-gold-600" aria-hidden />
        {eyebrow}
      </span>
      <h2
        className={cn(
          "mt-4 text-3xl md:text-4xl lg:text-[2.75rem] font-bold leading-[1.1] text-balance",
          light ? "text-white" : "text-navy-900"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className={cn("mt-5 text-base md:text-lg leading-relaxed", light ? "text-white/70" : "text-slate-600")}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
