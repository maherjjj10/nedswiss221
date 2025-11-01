import { NextResponse } from "next/server";

const BASE = "https://www.ned-swiss.ch";
const LOCALES = ["de", "en", "fr"];
const PAGES = ["", "/about", "/services", "/contact", "/blogs"];

export async function GET() {
  const urls = [];

  for (const page of PAGES) {
    const links = LOCALES.map(
      lang =>
        `<xhtml:link rel="alternate" hreflang="${lang}" href="${BASE}/${lang}${page}"/>`
    ).join("");

    const xDefault = `<xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/de${page}"/>`;

    for (const lang of LOCALES) {
      urls.push(`
        <url>
          <loc>${BASE}/${lang}${page}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          ${links}
          ${xDefault}
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
