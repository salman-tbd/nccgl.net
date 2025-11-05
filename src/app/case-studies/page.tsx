import { generateSEOMetadata } from "@/components/common/SEO";
import { StructuredData } from "@/components/common/StructuredData";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = generateSEOMetadata({
  title: "Case Studies",
  description: "Explore our successful projects and see how NCCGL has helped businesses achieve their goals through technology solutions. Real-world examples of software development, cloud migration, and digital transformation success stories.",
  keywords: ["IT case studies", "software development projects", "cloud migration success", "digital transformation examples", "IT project success stories", "technology case studies"],
  url: "/case-studies",
});

const caseStudies = [
  {
    id: "healthcare-system",
    title: "Healthcare Management System",
    industry: "Healthcare",
    description: "When a major hospital network approached us with fragmented patient data across multiple systems, we knew we had to build something that would unify their operations. Our team spent months understanding their workflows, from emergency department triage to long-term care coordination. The result was a comprehensive patient management system that connects every department, from admissions to billing. Hospital administrators can now track patient journeys in real-time, doctors have instant access to complete medical histories, and staff members report significantly less time spent on administrative tasks.",
    results: ["40% efficiency improvement", "Reduced patient wait times", "Streamlined workflows"],
    challenge: "Multiple disconnected systems causing data silos and operational inefficiencies",
    timeframe: "12 months",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform Modernization",
    industry: "Retail",
    description: "A national retailer's online platform was struggling to keep up with traffic spikes during sales events, often crashing at critical moments. Their existing system couldn't handle the volume, and customers were abandoning carts due to slow load times. We rebuilt their entire e-commerce infrastructure with a modern architecture that scales automatically. Now they can handle Black Friday traffic without breaking a sweat, and their mobile shopping experience rivals the best in the industry. The platform processes thousands of transactions simultaneously while maintaining sub-second response times.",
    results: ["60% sales increase", "Improved page load speed", "Enhanced user experience"],
    challenge: "Legacy platform unable to scale during peak shopping periods",
    timeframe: "8 months",
  },
  {
    id: "cloud-migration",
    title: "Enterprise Cloud Migration",
    industry: "Finance",
    description: "Migrating a financial institution's entire infrastructure to the cloud required careful planning and zero downtime. We worked closely with their compliance team to ensure every regulation was met, every security protocol followed. The migration happened over several phases, with each system tested thoroughly before going live. Today, their IT team can provision new resources in minutes instead of weeks, and the cost savings have been reinvested into customer-facing innovations. The enhanced security posture has also enabled them to pursue new business opportunities that weren't possible before.",
    results: ["35% cost reduction", "Improved scalability", "Enhanced security"],
    challenge: "On-premise infrastructure limiting growth and increasing operational costs",
    timeframe: "18 months",
  },
  {
    id: "mobile-app",
    title: "Mobile Banking Application",
    industry: "Finance",
    description: "Building a mobile banking app that customers trust with their financial data requires more than just good code. We implemented multi-factor authentication, biometric security, and real-time fraud detection. The app underwent rigorous security testing before launch, and we continue to monitor it around the clock. Users love the intuitive interface that makes complex banking tasks simple, and the bank's customer satisfaction scores have reached record highs. The app now handles millions of transactions monthly with zero security incidents.",
    results: ["100K+ downloads", "High user satisfaction", "Zero security incidents"],
    challenge: "Need for secure, user-friendly mobile banking solution",
    timeframe: "10 months",
  },
  {
    id: "manufacturing-iot",
    title: "IoT Manufacturing Solution",
    industry: "Manufacturing",
    description: "A manufacturing plant needed better visibility into their production lines. Machines would break down unexpectedly, causing costly delays. We installed IoT sensors throughout their facility that monitor equipment health in real-time. The system alerts maintenance teams before problems become failures, and production managers can see exactly what's happening on every line from their dashboard. Predictive maintenance has transformed their operations, reducing unplanned downtime dramatically. Quality control has improved too, as the system flags anomalies immediately.",
    results: ["30% downtime reduction", "Improved quality control", "Real-time insights"],
    challenge: "Unplanned equipment failures disrupting production schedules",
    timeframe: "14 months",
  },
  {
    id: "data-analytics",
    title: "Business Intelligence Platform",
    industry: "Energy",
    description: "An energy company was drowning in data from multiple sources - sensors, meters, weather stations, market prices. They had information but couldn't turn it into decisions. We built a comprehensive analytics platform that aggregates data from all their systems and presents it in actionable dashboards. Executives can now see trends across the entire operation, forecast demand with greater accuracy, and identify cost-saving opportunities. The platform has become central to their strategic planning, and revenue has increased as they've made better-informed decisions about pricing and resource allocation.",
    results: ["Data-driven decisions", "Improved forecasting", "Increased revenue"],
    challenge: "Data scattered across systems preventing strategic decision-making",
    timeframe: "16 months",
  },
  {
    id: "supply-chain",
    title: "Supply Chain Optimization System",
    industry: "Logistics",
    description: "A logistics company needed to optimize their supply chain operations across multiple warehouses and distribution centers. Inventory was often misplaced, delivery routes were inefficient, and customer complaints about late deliveries were increasing. We developed a comprehensive supply chain management system that tracks inventory in real-time, optimizes routes using advanced algorithms, and provides visibility into every shipment. The system integrates with their existing warehouse management software and provides predictive analytics for demand forecasting. Delivery times have improved significantly, and the company has reduced operational costs while increasing customer satisfaction.",
    results: ["25% delivery time improvement", "Reduced inventory costs", "Higher customer satisfaction"],
    challenge: "Inefficient supply chain operations affecting delivery performance",
    timeframe: "11 months",
  },
  {
    id: "telecom-platform",
    title: "Telecommunications Billing Platform",
    industry: "Telecommunications",
    description: "A telecommunications provider was struggling with their billing system's inability to handle complex pricing structures and real-time usage calculations. Billing errors were common, customer service teams spent hours resolving disputes, and revenue was being lost due to system limitations. We designed and implemented a new billing platform that processes millions of transactions daily, handles complex pricing rules, and provides real-time usage monitoring. The system integrates seamlessly with their network infrastructure to capture usage data accurately. Billing accuracy has improved dramatically, customer disputes have decreased, and the platform supports their growth into new service offerings.",
    results: ["99.9% billing accuracy", "Reduced customer disputes", "Support for new services"],
    challenge: "Legacy billing system unable to handle complex pricing and real-time processing",
    timeframe: "13 months",
  },
  {
    id: "education-portal",
    title: "University Learning Management System",
    industry: "Education",
    description: "A university needed to modernize their learning management system to support online and hybrid learning models. Their existing platform couldn't handle the increased demand during the pandemic, and faculty struggled with limited features. We built a comprehensive learning management system that supports video lectures, interactive assignments, real-time collaboration, and comprehensive assessment tools. The platform integrates with their student information system and provides analytics for both students and faculty. Student engagement has increased, faculty report improved teaching capabilities, and the university can now offer more flexible learning options.",
    results: ["Increased student engagement", "Improved teaching tools", "Flexible learning options"],
    challenge: "Outdated learning platform limiting online and hybrid education capabilities",
    timeframe: "15 months",
  },
];

const statistics = [
  { value: "150+", label: "Projects Completed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Industry Experts" },
  { value: "24/7", label: "Support Available" },
];

export default function CaseStudiesPage() {
  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Case Studies", url: "/case-studies" },
        ]}
      />
      {/* Hero Section with Industries Page Gradient */}
      <Section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-purple-200 text-sm font-semibold uppercase tracking-wider">
              Case Studies
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Real results from real projects across various industries
          </p>
        </div>
      </Section>

      {/* Introduction Section with Gradient Background */}
      <Section className="bg-gradient-to-b from-slate-50 via-indigo-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Proven Solutions, Measurable Impact
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-slate-700 leading-relaxed">
              <p>
                Our case studies showcase the tangible impact of our technology solutions on businesses across different industries. Each project represents months of collaboration, careful planning, and meticulous execution. We don&apos;t just deliver software - we deliver transformation that drives real business outcomes.
              </p>
              <p>
                From healthcare systems that improve patient care to e-commerce platforms that drive revenue growth, every case study tells a story of challenge, innovation, and success. These projects demonstrate our commitment to understanding our clients&apos; unique needs and delivering solutions that exceed expectations.
              </p>
              <p>
                Below you&apos;ll find detailed accounts of how we&apos;ve helped organizations overcome complex challenges, optimize operations, and achieve their strategic goals through technology. Each case study includes the specific challenges faced, the solutions implemented, and the measurable results achieved.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Statistics Section */}
      <Section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-indigo-100 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies Grid Section */}
      <Section className="bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Featured Case Studies
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Explore our portfolio of successful implementations across diverse industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} hover className="flex flex-col">
                <div className="mb-4">
                  <span className="inline-block bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 text-xs font-semibold px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-slate-900">{study.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow text-sm leading-relaxed line-clamp-4">{study.description}</p>
                <div className="mb-4 pb-4 border-b border-gray-200">
                  <p className="text-xs text-gray-500 mb-2">
                    <span className="font-semibold">Challenge:</span> {study.challenge}
                  </p>
                  <p className="text-xs text-gray-500">
                    <span className="font-semibold">Timeline:</span> {study.timeframe}
                  </p>
                </div>
                <ul className="space-y-2 mb-6">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {result}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Methodology Section */}
      <Section className="bg-gradient-to-b from-slate-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Approach
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Every project begins with understanding your business, your challenges, and your goals
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Discovery & Planning</h3>
              <p className="text-slate-600 leading-relaxed">
                We start by deeply understanding your business processes, technical requirements, and strategic objectives. Our team conducts thorough analysis to identify opportunities and potential challenges.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Development & Implementation</h3>
              <p className="text-slate-600 leading-relaxed">
                Our experienced development teams build solutions using industry best practices and modern technologies. We maintain constant communication throughout the development process to ensure alignment with your vision.
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-slate-900">Support & Optimization</h3>
              <p className="text-slate-600 leading-relaxed">
                After deployment, we provide comprehensive support and continuously monitor system performance. We work with you to optimize operations and identify opportunities for further improvement.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Call to Action Section */}
      <Section className="bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss how we can help your business achieve similar results. Our team is ready to understand your challenges and develop a solution tailored to your needs.
          </p>
          <Button href="/contact" variant="primary" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-0 shadow-lg shadow-indigo-500/50">
            Get in Touch
          </Button>
        </div>
      </Section>
    </>
  );
}
