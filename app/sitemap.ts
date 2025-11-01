import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const BASE = 'https://www.ned-swiss.ch';

  // اللغات
  const LOCALES = ['de', 'en', 'fr'];

  // الصفحات الأساسية
  const PAGES = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blogs',
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const lang of LOCALES) {
    for (const page of PAGES) {
      entries.push({
        url: `${BASE}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'daily' : 'weekly',
        priority: page === '' ? 1 : 0.8,
      });
    }
  }

  return entries;
}
