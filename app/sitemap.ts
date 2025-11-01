import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = "https://www.ned-swiss.ch";
  const LOCALES = ["de", "en", "fr"];
  const PAGES = ["", "/about", "/services", "/contact", "/blogs"];

  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const page of PAGES) {
    for (const lang of LOCALES) {
      const url = `${BASE}/${lang}${page}`;

      entries.push({
        url,
        lastModified: now,
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: {
            de: `${BASE}/de${page}`,
            en: `${BASE}/en${page}`,
            fr: `${BASE}/fr${page}`,
            "x-default": `${BASE}/de${page}`,
          },
        },
      });
    }
  }

  return entries;
}
