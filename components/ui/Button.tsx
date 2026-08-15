import { cn } from "@/lib/utils";
import Link from "next/link";
import { AnchorHTMLAttributes } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: "primary" | "secondary" | "ghost" | "outline-light";
  size?: "md" | "lg";
};

export function Button({ variant = "primary", size = "md", className, children, href, ...props }: Props) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out focus-visible:outline-offset-4";

  const variants: Record<string, string> = {
    primary:
      "bg-gold-600 text-navy-900 hover:bg-gold-400 shadow-[0_10px_30px_-8px_rgba(234,179,8,0.6)] hover:shadow-[0_14px_36px_-6px_rgba(234,179,8,0.75)] hover:-translate-y-0.5",
    secondary:
      "bg-navy-600 text-white hover:bg-navy-700 shadow-[0_10px_30px_-8px_rgba(15,61,145,0.55)] hover:-translate-y-0.5",
    ghost: "bg-white text-navy-900 hover:bg-navy-50 border border-navy-100",
    "outline-light":
      "border border-white/40 text-white hover:bg-white hover:text-navy-900 backdrop-blur-sm",
  };

  const sizes: Record<string, string> = {
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <Link href={href ?? "#"} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      {children}
    </Link>
  );
}
