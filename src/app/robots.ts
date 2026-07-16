import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // It's best practice to keep crawlers out of backend API routes or private files
      disallow: ['/api/', '/private/'], 
    },
    // This explicitly tells Google exactly where to find the dynamic sitemap we just built
    sitemap: 'https://nexveratechnologies.com/sitemap.xml',
  };
}