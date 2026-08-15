import type { MetadataRoute } from "next";
import { NEWS } from "@/lib/data";

const siteUrl = "https://www.messasecondary.sc.tz";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/about",
    "/about/leadership",
    "/academics",
    "/academics/results",
    "/admissions",
    "/students",
    "/parents",
    "/news",
    "/gallery",
    "/downloads",
    "/contact",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.7,
  }));

  const newsRoutes = NEWS.map((n) => ({
    url: `${siteUrl}/news/${n.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticRoutes, ...newsRoutes];
}
