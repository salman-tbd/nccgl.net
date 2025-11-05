import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { notFound } from "next/navigation";
import { generateSEOMetadata } from "@/components/common/SEO";
import { StructuredData } from "@/components/common/StructuredData";
import { companyInfo } from "@/utils/constants";

interface CaseStudyPageProps {
  params: Promise<{
    id: string;
  }>;
}

interface CaseStudy {
  title: string;
  industry: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

const caseStudies: Record<string, CaseStudy> = {
  "healthcare-system": {
    title: "Healthcare Management System",
    industry: "Healthcare",
    client: "Large Hospital Network",
    challenge: "The client needed a unified system to manage patient records, appointments, and administrative tasks across multiple hospital locations.",
    solution: "We developed a comprehensive healthcare management system with integrated modules for patient management, appointment scheduling, billing, and reporting.",
    results: [
      "40% improvement in operational efficiency",
      "Reduced patient wait times by 30%",
      "Streamlined workflows across departments",
      "Improved patient satisfaction scores",
      "Compliance with healthcare regulations",
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "HIPAA Compliance"],
  },
  "ecommerce-platform": {
    title: "E-Commerce Platform Modernization",
    industry: "Retail",
    client: "National Retailer",
    challenge: "An outdated e-commerce platform was limiting growth and causing poor user experience.",
    solution: "We completely modernized the platform with a new architecture, improved performance, and enhanced features including mobile optimization and advanced analytics.",
    results: [
      "60% increase in online sales",
      "50% improvement in page load speed",
      "Enhanced mobile shopping experience",
      "Improved conversion rates",
      "Better inventory management",
    ],
    technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe API", "Cloudflare"],
  },
};

export function generateStaticParams() {
  return Object.keys(caseStudies).map((id) => ({ id }));
}

export async function generateMetadata({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const caseStudy = caseStudies[id];
  
  if (!caseStudy) {
    return generateSEOMetadata({
      title: "Case Study Not Found",
      description: "The requested case study could not be found.",
      noindex: true,
    });
  }

  return generateSEOMetadata({
    title: `${caseStudy.title} - Case Study | ${companyInfo.name}`,
    description: `${caseStudy.title} case study in ${caseStudy.industry} industry. ${caseStudy.challenge} - See how ${companyInfo.name} delivered ${caseStudy.results.join(", ")}.`,
    keywords: [`${caseStudy.industry} case study`, caseStudy.title.toLowerCase(), "IT solutions", "software development", "technology implementation"],
    url: `/case-studies/${id}`,
  });
}

export default async function CaseStudyDetailPage({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const caseStudy = caseStudies[id];

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
          { name: caseStudy.title, url: `/case-studies/${id}` },
        ]}
      />
      <Section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4">
            <span className="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full">
              {caseStudy.industry}
            </span>
          </div>
          <h1 className="text-5xl font-bold mb-6">{caseStudy.title}</h1>
          <p className="text-xl text-blue-100">Client: {caseStudy.client}</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
              <p className="text-gray-700 leading-relaxed">{caseStudy.challenge}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Our Solution</h2>
              <p className="text-gray-700 leading-relaxed">{caseStudy.solution}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Results</h2>
              <ul className="space-y-3">
                {caseStudy.results.map((result: string, idx: number) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{result}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3">
                {caseStudy.technologies.map((tech: string, idx: number) => (
                  <span
                    key={idx}
                    className="bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Similar Results?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Let&apos;s discuss how we can help your business achieve similar outcomes.
          </p>
          <Button href="/contact" variant="primary" size="lg">
            Contact Us
          </Button>
        </div>
      </Section>
    </>
  );
}
