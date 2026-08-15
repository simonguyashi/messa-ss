import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("mx-auto w-full max-w-[1320px] container-px", className)} {...props} />;
}
