import { MetadataRoute } from 'next';
import { companyInfo } from '@/utils/constants';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${companyInfo.domain}`;
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/_next/static/',
          '/404',
          '/500',
          '/_next/data/',
          '/private/',
          '/*.json$',
        ],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: 'Googlebot-Image',
        allow: ['/assets/images/', '/assets/logo/'],
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
      {
        userAgent: ['YandexBot', 'Slurp', 'DuckDuckBot', 'Baiduspider'],
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

