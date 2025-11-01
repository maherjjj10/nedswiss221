import { MetadataRoute } from "next";

const BASE = "https://www.ned-swiss.ch";
const LOCALES = ["de", "en", "fr"];
const PAGES = ["", "/about", "/services", "/contact", "/blogs"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const page of PAGES) {
    const alternates = {
      de: `${BASE}/de${page}`,
      en: `${BASE}/en${page}`,
      fr: `${BASE}/fr${page}`,
      "x-default": `${BASE}/de${page}`,
    };

    for (const lang of LOCALES) {
      entries.push({
        url: `${BASE}/${lang}${page}`,
        lastModified: now,
        changeFrequency: page === "" ? "daily" : "weekly",
        priority: page === "" ? 1 : 0.8,
        alternates: {
          languages: alternates,
        },
      });
    }
  }

  return entries;
}
