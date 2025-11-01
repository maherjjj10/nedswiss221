import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.ned-swiss.ch';
  const locale = 'de'; // German locale only
  
  // Define all static routes
  const routes = [
    '',
    '/about',
    '/services',
    '/contact',
    '/blogs',
  ];

  // Define service sub-routes
  const serviceRoutes = [
    '/services',
    
  ];

  // Generate sitemap entries for German (de) locale only
  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Add main routes for German locale
  routes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}/${locale}${route}`,
      lastModified: new Date(),
      changeFrequency: route === '' ? 'daily' : 'weekly',
      priority: route === '' ? 1 : 0.8,
    });
  });

  

  // Add additional important pages
  sitemapEntries.push(
    {
      url: `${baseUrl}/robots.txt`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.1,
    }
  );

  return sitemapEntries;
} 