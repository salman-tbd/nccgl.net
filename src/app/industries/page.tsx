import { generateSEOMetadata } from "@/components/common/SEO";
import { StructuredData } from "@/components/common/StructuredData";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { industries, companyInfo } from "@/utils/constants";

export const metadata = generateSEOMetadata({
  title: "Industries We Serve",
  description: `${companyInfo.fullName} provides specialized IT solutions for various industries including healthcare, finance, manufacturing, retail, education, government, energy, and transportation. Industry-specific technology solutions.`,
  keywords: ["IT solutions for healthcare", "finance IT solutions", "manufacturing software", "retail technology", "education IT services", "government IT solutions", "energy sector software", "transportation technology"],
  url: "/industries",
});

const industryDescriptions: Record<string, string> = {
  Healthcare: "HIPAA-compliant solutions for medical practices, hospitals, and healthcare organizations.",
  Finance: "Secure financial technology solutions for banks, insurance companies, and fintech firms.",
  Manufacturing: "Industrial automation and IoT solutions to optimize production and supply chain operations.",
  Retail: "E-commerce platforms and retail technology solutions to enhance customer experience.",
  Education: "Learning management systems and educational technology platforms for schools and universities.",
  Government: "Secure government technology solutions with compliance and security at the forefront.",
  Energy: "Energy management systems and IoT solutions for utility companies and energy providers.",
  Transportation: "Fleet management and logistics solutions for transportation and shipping companies.",
};

const industryFeatures: Record<string, string[]> = {
  Healthcare: [
    "HIPAA & GDPR Compliant Systems",
    "Electronic Health Records (EHR)",
    "Telemedicine Platforms",
    "Healthcare Analytics & Reporting",
    "Patient Portal Solutions",
    "Medical Device Integration"
  ],
  Finance: [
    "Banking & Payment Solutions",
    "Risk Management Systems",
    "Regulatory Compliance Tools",
    "Fraud Detection & Prevention",
    "Blockchain & Cryptocurrency",
    "Investment Management Platforms"
  ],
  Manufacturing: [
    "Industrial IoT & Automation",
    "Supply Chain Management",
    "Quality Control Systems",
    "Predictive Maintenance",
    "ERP Integration",
    "Production Analytics"
  ],
  Retail: [
    "E-commerce Platforms",
    "Point of Sale (POS) Systems",
    "Inventory Management",
    "Customer Loyalty Programs",
    "Omnichannel Solutions",
    "Retail Analytics"
  ],
  Education: [
    "Learning Management Systems",
    "Student Information Systems",
    "Online Learning Platforms",
    "Assessment & Testing Tools",
    "Campus Management Systems",
    "Educational Analytics"
  ],
  Government: [
    "Secure Cloud Infrastructure",
    "Citizen Portal Solutions",
    "Document Management Systems",
    "Compliance & Audit Tools",
    "Data Security & Encryption",
    "Digital Government Services"
  ],
  Energy: [
    "Smart Grid Solutions",
    "Energy Management Systems",
    "Renewable Energy Platforms",
    "Utility Billing Systems",
    "IoT Sensor Networks",
    "Energy Analytics & Forecasting"
  ],
  Transportation: [
    "Fleet Management Systems",
    "Route Optimization",
    "Logistics & Tracking",
    "GPS Integration",
    "Vehicle Telematics",
    "Supply Chain Visibility"
  ],
};

const industryIcons: Record<string, React.ReactElement> = {
  Healthcare: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  ),
  Finance: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Manufacturing: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Retail: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
    </svg>
  ),
  Education: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  ),
  Government: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Energy: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
  ),
  Transportation: (
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
    </svg>
  ),
};

export default function IndustriesPage() {
  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Industries", url: "/industries" },
        ]}
      />
      {/* Hero Section - Fixed to match About Us page gradient */}
      <Section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-purple-200 text-sm font-semibold uppercase tracking-wider">
              Industries We Serve
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Industries We Serve
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Specialized technology solutions across multiple industries
          </p>
        </div>
      </Section>

      {/* Introduction Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">
                Our Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Industry-Specific Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We understand that each industry has unique challenges and requirements. Our
              industry-specific expertise allows us to deliver solutions that address your
              specific needs, regulatory requirements, and business objectives. With deep domain
              knowledge and technical excellence, we help organizations across diverse sectors
              achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </Section>

      {/* Industry Cards Section */}
      <Section background="gray">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div
                key={industry}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg text-white">
                  {industryIcons[industry] || (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{industry}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {industryDescriptions[industry] || `Custom solutions for ${industry} industry`}
                </p>
                <div className="space-y-2">
                  {(industryFeatures[industry] || []).slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-purple-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Industries Choose Us Section */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Why Industries Trust {companyInfo.name}
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our commitment to excellence and industry-specific expertise sets us apart
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Compliance & Security</h3>
              <p className="text-gray-600 leading-relaxed">
                We ensure all solutions meet industry-specific regulatory requirements including HIPAA, GDPR, PCI-DSS, and SOC 2 compliance standards.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl p-8 border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Domain Expertise</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team possesses deep industry knowledge and understanding of sector-specific challenges, enabling us to deliver targeted solutions.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-2xl p-8 border-2 border-teal-200 hover:border-teal-400 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Proven Results</h3>
              <p className="text-gray-600 leading-relaxed">
                Track record of successful implementations across diverse industries, delivering measurable ROI and business value.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock support and maintenance services ensuring your systems run smoothly and efficiently at all times.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl p-8 border-2 border-indigo-200 hover:border-indigo-400 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Scalable Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                Future-proof architecture designed to grow with your business, supporting expansion and evolving industry needs.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-2xl p-8 border-2 border-teal-200 hover:border-teal-400 transition-all duration-300">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Certified professionals with specialized knowledge in your industry, ensuring best practices and optimal outcomes.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Industry Impact Statistics */}
      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">
                Our Impact
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Transforming Industries
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Delivering measurable results across diverse industry sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                500+
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Industry Clients</h3>
              <p className="text-gray-600">Serving businesses across all major sectors</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent mb-3">
                1000+
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Projects Delivered</h3>
              <p className="text-gray-600">Successful implementations worldwide</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-3">
                98%
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Client Satisfaction</h3>
              <p className="text-gray-600">Consistently high satisfaction rates</p>
            </div>

            <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-3">
                8
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Industries Served</h3>
              <p className="text-gray-600">Comprehensive sector coverage</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Detailed Industry Solutions */}
      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">
                Solutions & Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Comprehensive Industry Solutions
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our specialized offerings for each industry
            </p>
          </div>
          <div className="space-y-12">
            {industries.map((industry, index) => (
              <div
                key={industry}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg text-white">
                    {industryIcons[industry] || (
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-900">{industry}</h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {industryDescriptions[industry] || `Custom solutions for ${industry} industry`}
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {(industryFeatures[industry] || []).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-purple-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={`bg-gradient-to-br from-purple-50 via-indigo-50 to-teal-50 rounded-2xl p-8 border-2 border-purple-200 ${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                      <span className="font-semibold text-gray-900">Industry Experience</span>
                      <span className="text-purple-600 font-bold">{new Date().getFullYear() - companyInfo.establishedYear}+ Years</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                      <span className="font-semibold text-gray-900">Active Projects</span>
                      <span className="text-indigo-600 font-bold">100+</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                      <span className="font-semibold text-gray-900">Success Rate</span>
                      <span className="text-teal-600 font-bold">98%</span>
                    </div>
                    <div className="pt-4">
                      <Button href="/contact" variant="primary" size="md" className="w-full">
                        Get Started
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-purple-600 via-indigo-600 to-teal-600 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Don&apos;t See Your Industry?
              </h2>
              <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                We work with businesses across all industries. Our flexible approach and deep
                technical expertise allow us to adapt to any sector&apos;s unique requirements. Contact
                us to discuss how we can help your organization achieve its technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button href="/contact" variant="primary" size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 hover:text-indigo-600 border-0 shadow-lg">
            Contact Us
          </Button>
                <Button href="/services" variant="outline" size="lg" className="border-2 border-white/30 !text-white hover:bg-white/10 backdrop-blur-sm">
                  View Our Services
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
