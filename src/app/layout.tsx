import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { companyInfo } from "@/utils/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4f46e5" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: `${companyInfo.fullName} - IT & Software Solutions`,
    template: `%s | ${companyInfo.fullName}`,
  },
  description: companyInfo.description,
  keywords: [
    "IT solutions",
    "software development",
    "cloud services",
    "cybersecurity",
    "IT consulting",
    "NCCGL",
    "custom software development",
    "digital transformation",
    "data analytics",
    "enterprise software solutions",
    "web development",
    "mobile app development",
    "API development",
    "DevOps services",
    "IT infrastructure",
  ],
  authors: [{ name: companyInfo.fullName }],
  creator: companyInfo.fullName,
  publisher: companyInfo.fullName,
  applicationName: companyInfo.fullName,
  referrer: "origin-when-cross-origin",
  icons: {
    icon: [
      { url: "/assets/logo/favicon-32x32 (1).png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/assets/logo/favicon-32x32 (1).png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/assets/logo/favicon-32x32 (1).png",
        color: "#4f46e5",
      },
    ],
  },
  manifest: "/manifest.json",
  metadataBase: new URL(`https://${companyInfo.domain}`),
  alternates: {
    canonical: `https://${companyInfo.domain}`,
    languages: {
      "en-US": `https://${companyInfo.domain}`,
      "x-default": `https://${companyInfo.domain}`,
    },
    types: {
      "application/rss+xml": `https://${companyInfo.domain}/rss.xml`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `https://${companyInfo.domain}`,
    siteName: companyInfo.fullName,
    title: `${companyInfo.fullName} - IT & Software Solutions`,
    description: companyInfo.description,
    images: [
      {
        url: `https://${companyInfo.domain}/assets/logo/NccglLogo-02.png`,
        width: 1200,
        height: 630,
        alt: `${companyInfo.fullName} - Leading IT & Software Solutions Provider`,
        type: "image/png",
        secureUrl: `https://${companyInfo.domain}/assets/logo/NccglLogo-02.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyInfo.fullName} - IT & Software Solutions`,
    description: companyInfo.description,
    images: [`https://${companyInfo.domain}/assets/logo/NccglLogo-02.png`],
    creator: "@nccgl",
    site: "@nccgl",
  },
  robots: {
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
  verification: {
    // Add Google Search Console verification code here when available
    // google: "your-google-verification-code",
    // Add other verification codes as needed
    // bing: "your-bing-verification-code",
    // yandex: "your-yandex-verification-code",
  },
  formatDetection: {
    telephone: false,
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: companyInfo.fullName,
  },
  category: "technology",
  classification: "IT Services",
  other: {
    "geo.region": "US",
    "geo.placename": "United States",
    "ICBM": "39.8283, -98.5795", // Center of US, update with actual location
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "mobile-web-app-capable": "yes",
    "format-detection": "telephone=no",
    "language": "en-US",
    "content-language": "en-US",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation"],
  "@id": `https://${companyInfo.domain}/#organization`,
  name: companyInfo.fullName,
  legalName: companyInfo.fullName,
  url: `https://${companyInfo.domain}`,
  logo: {
    "@type": "ImageObject",
    url: `https://${companyInfo.domain}/assets/logo/NccglLogo-02.png`,
    width: 1200,
    height: 630,
  },
  image: `https://${companyInfo.domain}/assets/logo/NccglLogo-02.png`,
  description: companyInfo.description,
  foundingDate: `${companyInfo.establishedYear}-01-01`,
  foundingLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      email: companyInfo.primaryContact,
      contactType: "Customer Service",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    {
      "@type": "ContactPoint",
      email: companyInfo.primaryContact,
      contactType: "Sales",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
    {
      "@type": "ContactPoint",
      email: companyInfo.primaryContact,
      contactType: "Technical Support",
      availableLanguage: ["English"],
      areaServed: "Worldwide",
    },
  ],
  sameAs: [
    // Add social media URLs when available
    // "https://www.linkedin.com/company/nccgl",
    // "https://twitter.com/nccgl",
    // "https://www.facebook.com/nccgl",
  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "50-200",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "US",
    // Add specific address details when available
  },
  areaServed: {
    "@type": "Country",
    name: "Worldwide",
  },
  knowsAbout: [
    "Software Development",
    "Cloud Computing",
    "Cybersecurity",
    "IT Consulting",
    "Data Analytics",
    "Digital Transformation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Software Development",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cloud Solutions",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Cybersecurity",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "IT Consulting",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Analytics",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Digital Transformation",
        },
      },
    ],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `https://${companyInfo.domain}/#website`,
  name: companyInfo.fullName,
  url: `https://${companyInfo.domain}`,
  description: companyInfo.description,
  publisher: {
    "@id": `https://${companyInfo.domain}/#organization`,
  },
  inLanguage: "en-US",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `https://${companyInfo.domain}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="ltr">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href={`https://${companyInfo.domain}`} />
        <link rel="dns-prefetch" href={`https://${companyInfo.domain}`} />
        <meta name="language" content="en-US" />
        <meta name="content-language" content="en-US" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="geo.region" content="US" />
        <meta name="geo.placename" content="United States" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Header />
        <main className="min-h-screen pt-24" id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
