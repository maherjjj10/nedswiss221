import { MetadataRoute } from 'next';

const BASE = 'https://www.ned-swiss.ch';
const LOCALES = ['de', 'en', 'fr'];
const PAGES = ['', '/about', '/services', '/contact', '/blogs'];

function alternatesFor(path: string) {
  const map: Record<string, string> = {};
  for (const l of LOCALES) map[l] = `${BASE}/${l}${path}`;
  map['x-default'] = `${BASE}/de${path}`; // اختر اللغة الافتراضية
  return map;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const page of PAGES) {
    for (const lang of LOCALES) {
      entries.push({
        url: `${BASE}/${lang}${page}`,
        lastModified: now,
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
        alternates: { languages: alternatesFor(page) },
      });
    }
  }

  return entries;
}

