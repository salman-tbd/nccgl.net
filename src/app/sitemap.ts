import { MetadataRoute } from 'next';
import { companyInfo, services } from '@/utils/constants';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${companyInfo.domain}`;
  const currentDate = new Date();
  const currentDateISO = currentDate.toISOString();
  
  // Calculate last modified dates based on content type
  const getLastModified = (monthsAgo: number = 0) => {
    const date = new Date(currentDate);
    date.setMonth(date.getMonth() - monthsAgo);
    return date.toISOString();
  };

  // Static routes with optimized priorities and change frequencies
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDateISO,
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: getLastModified(1),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: currentDateISO,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: getLastModified(2),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified: getLastModified(2),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/team`,
      lastModified: getLastModified(3),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDateISO,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: getLastModified(1),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/testimonials`,
      lastModified: getLastModified(2),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: getLastModified(3),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: getLastModified(6),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: getLastModified(12),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: getLastModified(12),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // Dynamic service routes with service-specific priorities
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.id}`,
    lastModified: getLastModified(1),
    changeFrequency: 'monthly' as const,
    priority: 0.85, // Slightly higher than blog posts but lower than main services page
  }));

  // Blog post routes with recent dates for latest posts
  const blogPostIds = [
    'cloud-computing-benefits',
    'cybersecurity-trends',
    'digital-transformation',
    'mobile-app-development',
    'data-analytics',
    'api-development',
  ];
  
  const blogRoutes = blogPostIds.map((id, index) => ({
    url: `${baseUrl}/blog/${id}`,
    lastModified: getLastModified(index < 3 ? 0 : Math.floor(index / 2)), // Recent posts updated more recently
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Case study routes
  const caseStudyIds = [
    'healthcare-system',
    'ecommerce-platform',
  ];
  
  const caseStudyRoutes = caseStudyIds.map((id) => ({
    url: `${baseUrl}/case-studies/${id}`,
    lastModified: getLastModified(2),
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }));

  // Combine all routes
  const allRoutes = [
    ...staticRoutes,
    ...serviceRoutes,
    ...blogRoutes,
    ...caseStudyRoutes,
  ];

  // Sort by priority (highest first) for better SEO
  return allRoutes.sort((a, b) => (b.priority || 0) - (a.priority || 0));
}

