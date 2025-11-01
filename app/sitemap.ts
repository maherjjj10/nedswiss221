import { MetadataRoute } from "next";

const BASE = "https://www.ned-swiss.ch";
const LOCALES = ["de", "en", "fr"];
const PAGES = ["", "/about", "/services", "/contact", "/blogs"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const path of PAGES) {
    const alts = {
      de: `${BASE}/de${path}`,
      en: `${BASE}/en${path}`,
      fr: `${BASE}/fr${path}`,
      "x-default": `${BASE}/de${path}`,
    };

    for (const lang of LOCALES) {
      entries.push({
        url: `${BASE}/${lang}${path}`,
        lastModified: now,
        changeFrequency: path === "" ? "daily" : "weekly",
        priority: path === "" ? 1 : 0.8,
        alternates: { languages: alts },
      });
    }
  }

  return entries;
}
