import { generateSEOMetadata } from "@/components/common/SEO";
import { StructuredData } from "@/components/common/StructuredData";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = generateSEOMetadata({
  title: "Solutions",
  description: "Industry-specific technology solutions designed to address your unique business challenges. Enterprise software, cloud migration, digital transformation, and custom IT solutions.",
  keywords: ["enterprise software solutions", "cloud migration services", "digital transformation solutions", "custom IT solutions", "business technology solutions", "IT consulting solutions"],
  url: "/solutions",
});

const solutions = [
  {
    title: "Enterprise Software Solutions",
    description: "We build robust software platforms that grow with your organization. Our enterprise solutions handle complex workflows, thousands of users, and massive data volumes without breaking a sweat.",
    features: ["Scalable architecture that handles growth", "Enterprise-grade security and compliance", "Custom integrations with existing systems", "24/7 monitoring and support"],
    useCases: ["ERP systems for manufacturing", "CRM platforms for sales teams", "Project management tools for large teams"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Cloud Migration Services",
    description: "Moving to the cloud doesn't have to be disruptive. We plan every detail, execute with precision, and ensure your business keeps running smoothly throughout the transition.",
    features: ["Zero downtime migration strategies", "Cost optimization and resource planning", "Performance improvements post-migration", "Ongoing cloud management and optimization"],
    useCases: ["Legacy system modernization", "Infrastructure scaling", "Multi-cloud deployments"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: "Mobile Application Development",
    description: "Mobile apps that your users actually want to use. We focus on intuitive design, smooth performance, and features that genuinely solve problems for your customers.",
    features: ["Native and cross-platform development", "User-centric design principles", "High performance optimization", "App store optimization and deployment"],
    useCases: ["Customer-facing mobile apps", "Internal employee tools", "IoT device management apps"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Platforms",
    description: "Online stores that convert visitors into customers. We build e-commerce platforms that handle high traffic, process payments securely, and provide analytics that help you grow your sales.",
    features: ["Secure payment processing", "Comprehensive inventory management", "Real-time analytics dashboards", "Multi-channel selling capabilities"],
    useCases: ["B2C retail stores", "B2B wholesale platforms", "Marketplace integrations"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
  },
  {
    title: "Data Analytics Solutions",
    description: "Turn your data into decisions. We build analytics platforms that make sense of complex data, reveal trends you didn't know existed, and give your team the insights they need to act.",
    features: ["Real-time dashboards and reporting", "Predictive analytics and forecasting", "Business intelligence tools", "Custom data visualization"],
    useCases: ["Sales performance tracking", "Operational efficiency analysis", "Customer behavior insights"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "API Development & Integration",
    description: "Connect your systems seamlessly. We build APIs that are reliable, well-documented, and designed to make integration straightforward for your team and your partners.",
    features: ["RESTful and GraphQL APIs", "Microservices architecture", "Third-party system integrations", "API documentation and testing"],
    useCases: ["System-to-system communication", "Partner ecosystem connections", "Internal service mesh architecture"],
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business, your challenges, and your goals. This isn't about selling you a solution—it's about finding the right fit.",
  },
  {
    step: "02",
    title: "Strategy & Design",
    description: "Our team designs a solution architecture that aligns with your technical requirements and business objectives. You'll see exactly what we're building before we build it.",
  },
  {
    step: "03",
    title: "Development & Testing",
    description: "We build your solution using industry best practices, with regular check-ins so you're always in the loop. Quality assurance happens throughout, not just at the end.",
  },
  {
    step: "04",
    title: "Deployment & Support",
    description: "We handle deployment smoothly and provide ongoing support. Your solution will continue to evolve with your business needs.",
  },
];

const technologies = [
  "Cloud Platforms", "Microservices", "Containerization", "CI/CD Pipelines",
  "Machine Learning", "Blockchain", "IoT Integration", "Serverless Architecture"
];

export default function SolutionsPage() {
  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions" },
        ]}
      />
      {/* Enhanced Hero Section */}
      <Section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <span className="px-6 py-3 rounded-full text-sm font-semibold bg-white/10 backdrop-blur-sm border border-white/20 text-white">
                Technology Solutions
              </span>
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              Solutions That Drive
              <span className="block bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Real Business Results
              </span>
            </h1>
            <p className="text-lg lg:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
              Every business faces unique challenges. We build technology solutions that address your specific needs, 
              not generic software that forces you to change how you work. Our approach is practical, results-driven, 
              and focused on delivering value from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/contact" variant="primary" size="lg" className="bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800 text-white shadow-xl px-8 py-4 text-lg">
                Discuss Your Needs
              </Button>
              <Button href="/case-studies" variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm">
                View Success Stories
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Introduction Section */}
      <Section className="py-16 lg:py-20 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Solving Real Problems, Not Just Building Software
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
              We&apos;ve worked with companies across industries, from startups to Fortune 500 enterprises. 
              What we&apos;ve learned is that successful technology solutions aren&apos;t about using the latest frameworks 
              or following trendy methodologies—they&apos;re about understanding your business deeply and building 
              exactly what you need to succeed.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-slate-600 font-medium">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
              <div className="text-slate-600 font-medium">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-indigo-600 mb-2">25+</div>
              <div className="text-slate-600 font-medium">Years of Experience</div>
            </div>
          </div>
        </div>
      </Section>

      {/* Solutions Grid Section */}
      <Section className="py-20 lg:py-28 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Solution Portfolio
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions across the technology spectrum, each designed to solve specific business challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {solutions.map((solution, index) => (
              <Card key={index} hover className="flex flex-col group">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                    {solution.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{solution.title}</h3>
                <p className="text-slate-600 mb-6 flex-grow leading-relaxed">{solution.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-slate-900 mb-3 uppercase tracking-wide">Key Capabilities</h4>
                  <ul className="space-y-3">
                    {solution.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <svg className="w-5 h-5 text-indigo-600 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <h4 className="text-sm font-semibold text-slate-900 mb-2 uppercase tracking-wide">Common Use Cases</h4>
                  <ul className="space-y-1">
                    {solution.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-sm text-slate-500 flex items-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 mr-2"></span>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              How We Build Your Solution
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures your project stays on track, on budget, and delivers real value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start mb-4">
                  <div className="text-5xl font-bold text-indigo-100 mr-4 leading-none">{step.step}</div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gradient-to-r from-indigo-200 to-transparent" style={{ width: 'calc(100% - 4rem)' }}></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Technology Stack Section */}
      <Section className="py-20 lg:py-28 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Built on Modern Technology
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and proven frameworks to build solutions that are scalable, secure, and maintainable
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200 text-center hover:shadow-md transition-shadow">
                <div className="text-slate-700 font-medium">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Why Choose Us Section */}
      <Section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Why Companies Choose Our Solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Expert Team</h3>
              <p className="text-slate-600 leading-relaxed">
                Seasoned professionals with deep expertise across industries and technologies
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Delivery</h3>
              <p className="text-slate-600 leading-relaxed">
                Agile methodologies that get solutions to market faster without compromising quality
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Cost Effective</h3>
              <p className="text-slate-600 leading-relaxed">
                Solutions designed to maximize ROI and minimize total cost of ownership
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ongoing Support</h3>
              <p className="text-slate-600 leading-relaxed">
                Continuous support and optimization to ensure your solution evolves with your business
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 lg:py-28 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Build Your Solution?
          </h2>
          <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl mx-auto">
              Every great solution starts with a conversation. Let&apos;s talk about your challenges,
            explore what&apos;s possible, and create a plan that makes sense for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="outline" size="lg" className="bg-white text-indigo-600 hover:bg-slate-100 shadow-xl px-8 py-4 text-lg font-semibold border-0">
              Schedule a Consultation
            </Button>
            <Button href="/case-studies" variant="outline" size="lg" className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm">
              View Case Studies
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
