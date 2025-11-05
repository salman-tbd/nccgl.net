import { companyInfo } from "@/utils/constants";

interface StructuredDataProps {
  type: "Organization" | "WebSite" | "BreadcrumbList" | "Service" | "Article" | "FAQPage" | "LocalBusiness" | "ContactPoint" | "SoftwareApplication" | "Review";
  breadcrumbs?: Array<{ name: string; url: string }>;
  serviceData?: {
    name: string;
    description: string;
    url: string;
  };
  articleData?: {
    headline: string;
    description: string;
    image?: string;
    datePublished: string;
    dateModified?: string;
    author: string;
    authorRole?: string;
  };
  faqData?: Array<{
    question: string;
    answer: string;
  }>;
  localBusinessData?: {
    name: string;
    description?: string;
    address?: {
      streetAddress?: string;
      addressLocality?: string;
      addressRegion?: string;
      postalCode?: string;
      addressCountry?: string;
    };
    telephone?: string;
    email?: string;
    url?: string;
    priceRange?: string;
    openingHours?: string[];
  };
  contactPointData?: {
    email?: string;
    telephone?: string;
    contactType: string;
    areaServed?: string | string[];
    availableLanguage?: string | string[];
  };
  softwareApplicationData?: {
    name: string;
    description: string;
    applicationCategory: string;
    operatingSystem?: string;
    offers?: {
      price?: string;
      priceCurrency?: string;
    };
  };
  reviewData?: Array<{
    author: string;
    datePublished: string;
    reviewBody: string;
    reviewRating?: {
      ratingValue: number;
      bestRating?: number;
      worstRating?: number;
    };
  }>;
}

export function StructuredData({ 
  type, 
  breadcrumbs, 
  serviceData, 
  articleData, 
  faqData, 
  localBusinessData, 
  contactPointData,
  softwareApplicationData,
  reviewData 
}: StructuredDataProps) {
  const baseUrl = `https://${companyInfo.domain}`;

  const getSchema = () => {
    switch (type) {
      case "Organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: companyInfo.fullName,
          url: baseUrl,
          logo: {
            "@type": "ImageObject",
            url: `${baseUrl}/assets/logo/NccglLogo-02.png`,
            width: 1200,
            height: 630,
          },
          description: companyInfo.description,
          foundingDate: `${companyInfo.establishedYear}-01-01`,
          contactPoint: {
            "@type": "ContactPoint",
            email: companyInfo.primaryContact,
            contactType: "Customer Service",
            areaServed: "Worldwide",
            availableLanguage: ["English"],
          },
          sameAs: [
            // Add social media URLs here when available
          ],
          address: {
            "@type": "PostalAddress",
            addressCountry: "US",
          },
        };

      case "WebSite":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: companyInfo.fullName,
          url: baseUrl,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${baseUrl}/search?q={search_term_string}`,
            },
            "query-input": "required name=search_term_string",
          },
        };

      case "BreadcrumbList":
        if (!breadcrumbs || breadcrumbs.length === 0) return null;
        return {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: breadcrumbs.map((crumb, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: crumb.name,
            item: `${baseUrl}${crumb.url}`,
          })),
        };

      case "Service":
        if (!serviceData) return null;
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: serviceData.name,
          description: serviceData.description,
          url: `${baseUrl}${serviceData.url}`,
          serviceType: serviceData.name,
          areaServed: "Worldwide",
          provider: {
            "@type": "Organization",
            name: companyInfo.fullName,
            url: baseUrl,
            logo: `${baseUrl}/assets/logo/NccglLogo-02.png`,
          },
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/InStock",
          },
        };

      case "Article":
        if (!articleData) return null;
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          headline: articleData.headline,
          description: articleData.description,
          image: articleData.image ? `${baseUrl}${articleData.image}` : `${baseUrl}/assets/logo/NccglLogo-02.png`,
          datePublished: articleData.datePublished,
          dateModified: articleData.dateModified || articleData.datePublished,
          author: {
            "@type": "Person",
            name: articleData.author,
            jobTitle: articleData.authorRole,
          },
          publisher: {
            "@type": "Organization",
            name: companyInfo.fullName,
            logo: {
              "@type": "ImageObject",
              url: `${baseUrl}/assets/logo/NccglLogo-02.png`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `${baseUrl}/blog/${articleData.headline.toLowerCase().replace(/\s+/g, "-")}`,
          },
        };

      case "FAQPage":
        if (!faqData || faqData.length === 0) return null;
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqData.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        };

      case "LocalBusiness":
        if (!localBusinessData) return null;
        return {
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "Organization"],
          name: localBusinessData.name,
          description: localBusinessData.description || companyInfo.description,
          url: localBusinessData.url || baseUrl,
          telephone: localBusinessData.telephone,
          email: localBusinessData.email || companyInfo.primaryContact,
          address: localBusinessData.address ? {
            "@type": "PostalAddress",
            streetAddress: localBusinessData.address.streetAddress,
            addressLocality: localBusinessData.address.addressLocality,
            addressRegion: localBusinessData.address.addressRegion,
            postalCode: localBusinessData.address.postalCode,
            addressCountry: localBusinessData.address.addressCountry || "US",
          } : undefined,
          priceRange: localBusinessData.priceRange,
          openingHours: localBusinessData.openingHours,
          areaServed: {
            "@type": "Country",
            name: "Worldwide",
          },
        };

      case "ContactPoint":
        if (!contactPointData) return null;
        return {
          "@context": "https://schema.org",
          "@type": "ContactPoint",
          email: contactPointData.email || companyInfo.primaryContact,
          telephone: contactPointData.telephone,
          contactType: contactPointData.contactType,
          areaServed: contactPointData.areaServed || "Worldwide",
          availableLanguage: contactPointData.availableLanguage || "English",
        };

      case "SoftwareApplication":
        if (!softwareApplicationData) return null;
        return {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: softwareApplicationData.name,
          description: softwareApplicationData.description,
          applicationCategory: softwareApplicationData.applicationCategory,
          operatingSystem: softwareApplicationData.operatingSystem || "Web, Windows, macOS, Linux, iOS, Android",
          offers: softwareApplicationData.offers ? {
            "@type": "Offer",
            price: softwareApplicationData.offers.price,
            priceCurrency: softwareApplicationData.offers.priceCurrency || "USD",
          } : undefined,
          provider: {
            "@type": "Organization",
            name: companyInfo.fullName,
            url: baseUrl,
          },
        };

      case "Review":
        if (!reviewData || reviewData.length === 0) return null;
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": `${baseUrl}/#organization`,
          aggregateRating: reviewData.length > 0 ? {
            "@type": "AggregateRating",
            ratingValue: reviewData.reduce((sum, review) => sum + (review.reviewRating?.ratingValue || 0), 0) / reviewData.length,
            reviewCount: reviewData.length,
            bestRating: reviewData[0]?.reviewRating?.bestRating || 5,
            worstRating: reviewData[0]?.reviewRating?.worstRating || 1,
          } : undefined,
          review: reviewData.map((review) => ({
            "@type": "Review",
            author: {
              "@type": "Person",
              name: review.author,
            },
            datePublished: review.datePublished,
            reviewBody: review.reviewBody,
            reviewRating: review.reviewRating ? {
              "@type": "Rating",
              ratingValue: review.reviewRating.ratingValue,
              bestRating: review.reviewRating.bestRating || 5,
              worstRating: review.reviewRating.worstRating || 1,
            } : undefined,
          })),
        };

      default:
        return null;
    }
  };

  const schema = getSchema();
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

