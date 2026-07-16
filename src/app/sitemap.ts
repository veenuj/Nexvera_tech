import { MetadataRoute } from 'next';
import { serviceLocations } from '@/data/locations';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nexveratechnologies.com';

  // 1. Core Static Pages
  const staticRoutes = [
    '',
    '/contact',
    '/services/software',
    '/services/ai',
    '/services/web',
    '/services/marketing',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8, // Home page gets highest priority (1.0)
  }));

  // 2. Dynamic Location Pages (Programmatic SEO)
  const locationRoutes = serviceLocations.map((location) => ({
    url: `${baseUrl}/locations/${location.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.9, // High priority (0.9) to push local SEO dominance
  }));

  // 3. Return the combined sitemap array for Next.js to render as XML
  return [...staticRoutes, ...locationRoutes];
}