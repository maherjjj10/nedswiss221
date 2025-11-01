import { NextResponse } from "next/server";

const BASE = "https://www.ned-swiss.ch";
const LOCALES = ["de", "en", "fr"];
const PAGES = ["", "/about", "/services", "/contact", "/blogs"];

export function GET() {
  const urls = [];

  for (const page of PAGES) {
    for (const lang of LOCALES) {
      urls.push(`
        <url>
          <loc>${BASE}/${lang}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <xhtml:link rel="alternate" hreflang="de" href="${BASE}/de${page}"/>
          <xhtml:link rel="alternate" hreflang="en" href="${BASE}/en${page}"/>
          <xhtml:link rel="alternate" hreflang="fr" href="${BASE}/fr${page}"/>
          <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/de${page}"/>
        </url>
      `);
    }
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:xhtml="http://www.w3.org/1999/xhtml">
    ${urls.join("")}
  </urlset>`;

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
