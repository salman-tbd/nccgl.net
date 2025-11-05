import { Metadata } from "next";
import { companyInfo } from "@/utils/constants";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  noindex?: boolean;
  url?: string;
  image?: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  section?: string;
  tags?: string[];
}

export function generateSEOMetadata({
  title,
  description,
  keywords = [],
  noindex = false,
  url,
  image,
  type = "website",
  publishedTime,
  modifiedTime,
  author,
  section,
  tags = [],
}: SEOProps = {}): Metadata {
  // Ensure title doesn't have double pipe if empty
  const pageTitle = title || "";
  const defaultTitle = pageTitle 
    ? `${pageTitle} | ${companyInfo.fullName}`
    : `${companyInfo.fullName} - IT & Software Solutions`;
  
  // Ensure description is between 120-160 characters for optimal SEO
  // Google typically displays 150-160 characters, but we aim for 120-160 for best results
  let defaultDescription = description || companyInfo.description;
  // Truncate if too long (max 160 chars for optimal display)
  if (defaultDescription.length > 160) {
    defaultDescription = defaultDescription.substring(0, 157).trim() + "...";
  }
  // Ensure minimum length if too short (min 120 chars for better SEO, but don't force if original is shorter)
  if (defaultDescription.length < 120 && description) {
    // If we have a provided description that's too short, try to expand it
    const fallbackDesc = companyInfo.description;
    if (fallbackDesc.length >= 120 && fallbackDesc.length <= 160) {
      defaultDescription = `${description} - ${fallbackDesc.substring(0, 160 - description.length - 3)}...`;
    } else if (fallbackDesc.length > 160) {
      defaultDescription = `${description} - ${fallbackDesc.substring(0, 160 - description.length - 3)}...`;
    }
  }
  
  const defaultKeywords = [
    ...keywords,
    ...tags,
    "software development",
    "IT solutions",
    "cloud services",
    "digital transformation",
    companyInfo.name,
  ];
  
  const baseUrl = `https://${companyInfo.domain}`;
  const canonicalUrl = url ? `${baseUrl}${url}` : baseUrl;
  
  // Ensure image URL is absolute
  let ogImage = image || `${baseUrl}/assets/logo/NccglLogo-02.png`;
  if (ogImage && !ogImage.startsWith('http')) {
    ogImage = `${baseUrl}${ogImage.startsWith('/') ? ogImage : '/' + ogImage}`;
  }

  // Build OpenGraph metadata
  const openGraphMetadata: {
    title: string;
    description: string;
    url: string;
    siteName: string;
    type: "website" | "article";
    locale: string;
    images: Array<{
      url: string;
      width: number;
      height: number;
      alt: string;
      type?: string;
      secureUrl?: string;
    }>;
    publishedTime?: string;
    modifiedTime?: string;
    authors?: string[];
    section?: string;
    tags?: string[];
  } = {
    title: defaultTitle,
    description: defaultDescription,
    url: canonicalUrl,
    siteName: companyInfo.fullName,
    type: type,
    locale: "en_US",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: pageTitle ? `${pageTitle} - ${companyInfo.fullName}` : `${companyInfo.fullName} - IT & Software Solutions`,
        type: "image/png",
        secureUrl: ogImage,
      },
    ],
  };

  // Add article-specific metadata
  if (type === "article") {
    if (publishedTime) openGraphMetadata.publishedTime = publishedTime;
    if (modifiedTime) openGraphMetadata.modifiedTime = modifiedTime;
    if (author) openGraphMetadata.authors = [author];
    if (section) openGraphMetadata.section = section;
    if (tags.length > 0) openGraphMetadata.tags = tags;
  }

  return {
    title: defaultTitle,
    description: defaultDescription,
    keywords: defaultKeywords,
    authors: author ? [{ name: author }] : [{ name: companyInfo.fullName }],
    creator: author || companyInfo.fullName,
    publisher: companyInfo.fullName,
    robots: noindex 
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : { 
          index: true, 
          follow: true, 
          googleBot: { 
            index: true, 
            follow: true, 
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
          },
        },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-US": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: openGraphMetadata,
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: [ogImage],
      creator: "@nccgl",
      site: "@nccgl",
    },
    // Additional SEO meta tags
    applicationName: companyInfo.fullName,
    referrer: "origin-when-cross-origin",
    formatDetection: {
      telephone: false,
      email: false,
      address: false,
    },
    category: section || "technology",
    classification: "IT Services",
    other: {
      "format-detection": "telephone=no",
      "mobile-web-app-capable": "yes",
      "apple-mobile-web-app-capable": "yes",
      "apple-mobile-web-app-status-bar-style": "default",
      "language": "en-US",
      "content-language": "en-US",
      "revisit-after": "7 days",
      "distribution": "global",
      "rating": "general",
      "audience": "all",
      "coverage": "worldwide",
      "target": "all",
    },
  };
}
