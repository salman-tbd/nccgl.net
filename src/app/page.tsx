import Link from "next/link";
import { companyInfo, services, industries } from "@/utils/constants";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import { generateSEOMetadata } from "@/components/common/SEO";
import { StructuredData } from "@/components/common/StructuredData";

export const metadata = generateSEOMetadata({
  title: "Home",
  description: "Leading software development and IT solutions provider since 1999. Specializing in custom software, cloud solutions, cybersecurity, and digital transformation for businesses worldwide.",
  keywords: ["IT solutions", "software development company", "cloud services", "cybersecurity solutions", "digital transformation", "enterprise software", "custom software development"],
  url: "/",
});

export default function Home() {
  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
        ]}
      />
      {/* Hero Section with Image on Right */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 overflow-hidden" aria-label="Hero section">
        <div className="absolute inset-0 bg-grid-pattern opacity-10" aria-hidden="true"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <header className="text-white z-10">
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent"> Advanced Technology</span>
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-300 leading-relaxed">
                {companyInfo.fullName} delivers cutting-edge technology services to help businesses thrive in the digital age.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/services" variant="primary" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white border-0 shadow-lg shadow-indigo-500/50">
                  Explore Our Services
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-2 border-white/30 !text-white font-semibold hover:bg-white/10 backdrop-blur-sm">
                  Get Started
                </Button>
              </div>
            </header>
            
            {/* Right Image/Design */}
            <div className="relative z-10 hidden lg:block" aria-hidden="true">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 rounded-3xl blur-3xl transform rotate-6" aria-hidden="true"></div>
                <div className="relative bg-gradient-to-br from-slate-800/90 to-indigo-900/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="h-2 bg-indigo-500/30 rounded w-32 mb-2"></div>
                        <div className="h-2 bg-indigo-500/20 rounded w-24"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-2xl font-bold text-indigo-400 mb-1">500+</div>
                        <div className="text-sm text-gray-400">Projects</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-2xl font-bold text-cyan-400 mb-1">98%</div>
                        <div className="text-sm text-gray-400">Satisfaction</div>
                      </div>
                      <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                        <div className="text-2xl font-bold text-indigo-400 mb-1">24/7</div>
                        <div className="text-sm text-gray-400">Support</div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-3/4"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 w-4/5"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                        <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-500 w-2/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <Section className="py-20 lg:py-28 bg-white" aria-labelledby="why-choose-us-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 id="why-choose-us-heading" className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Why Choose {companyInfo.name}</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              With years of experience, we bring expertise and innovation to every project, delivering exceptional results that drive business success.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            <Card hover className="border-2 border-slate-100 hover:border-indigo-200 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Expert Team</h3>
              <p className="text-slate-600 leading-relaxed">
                Our team of certified professionals brings years of industry experience to deliver exceptional results.
              </p>
            </Card>
            <Card hover className="border-2 border-slate-100 hover:border-indigo-200 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Proven Track Record</h3>
              <p className="text-slate-600 leading-relaxed">
                We have successfully completed hundreds of projects for clients across various industries.
              </p>
            </Card>
            <Card hover className="border-2 border-slate-100 hover:border-indigo-200 transition-all duration-300">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Innovation First</h3>
              <p className="text-slate-600 leading-relaxed">
                We stay ahead of technology trends to provide solutions that drive real business value.
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section background="gray" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="services-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 id="services-heading" className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Our Services</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored to meet your business needs and drive growth.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={service.id} hover className="border-2 border-slate-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                  index % 3 === 0 ? 'from-indigo-500 to-indigo-600' :
                  index % 3 === 1 ? 'from-cyan-500 to-cyan-600' :
                  'from-purple-500 to-purple-600'
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.shortDescription}</p>
                <Link
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group-hover:gap-2 gap-1"
                >
                  Learn More
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/services" variant="primary" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30">
              View All Services
            </Button>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section className="py-20 lg:py-28 bg-white" aria-labelledby="team-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Our Team
              </span>
            </div>
            <h2 id="team-heading" className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Meet Our Expert Team</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Talented professionals dedicated to delivering innovative technology solutions and exceptional results for your business.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { name: "Rajesh Kumar", role: "Chief Executive Officer", initial: "R" },
              { name: "Priya Sharma", role: "Chief Technology Officer", initial: "P" },
              { name: "Arjun Patel", role: "Head of Development", initial: "A" },
            ].map((member, index) => (
              <Card key={index} hover className="border-2 border-slate-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group text-center">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold text-white">
                    {member.initial}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-slate-900">{member.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Leading our team with years of industry experience and a passion for innovation.
                </p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button href="/team" variant="primary" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30">
              View Full Team
            </Button>
          </div>
        </div>
      </Section>

      {/* Industries Section */}
      <Section background="gray" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="industries-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Industries We Serve
              </span>
            </div>
            <h2 id="industries-heading" className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Industries We Serve</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Specialized technology solutions tailored to meet the unique needs of businesses across diverse industries.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {industries.slice(0, 8).map((industry, index) => (
              <Card key={industry} hover className="border-2 border-slate-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${
                  index % 4 === 0 ? 'from-indigo-500 to-indigo-600' :
                  index % 4 === 1 ? 'from-cyan-500 to-cyan-600' :
                  index % 4 === 2 ? 'from-purple-500 to-purple-600' :
                  'from-indigo-500 to-cyan-500'
                } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2 text-slate-900 group-hover:text-indigo-600 transition-colors">{industry}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Custom technology solutions designed for {industry.toLowerCase()} sector requirements.
                </p>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button href="/industries" variant="primary" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30">
              Explore All Industries
            </Button>
          </div>
        </div>
      </Section>

      {/* How We Work / Process Section */}
      <Section className="py-20 lg:py-28 bg-white" aria-labelledby="process-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Our Process
              </span>
            </div>
            <h2 id="process-heading" className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">How We Work</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful project delivery from concept to completion.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-indigo-200"></div>
            {[
              { step: "01", title: "Discovery", description: "We analyze your business needs, challenges, and goals to create a comprehensive strategy.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" },
              { step: "02", title: "Planning", description: "Detailed project planning with timelines, milestones, and resource allocation for smooth execution.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" },
              { step: "03", title: "Development", description: "Agile development process with regular updates, testing, and quality assurance throughout.", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
              { step: "04", title: "Launch & Support", description: "Seamless deployment followed by ongoing support, maintenance, and optimization services.", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
            ].map((item, index) => (
              <div key={index} className="relative z-10">
                <Card className="border-2 border-slate-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Case Studies Preview Section */}
      <Section background="gray" className="py-20 lg:py-28 bg-gradient-to-b from-slate-50 to-white" aria-labelledby="case-studies-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Success Stories
              </span>
            </div>
            <h2 id="case-studies-heading" className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">Case Studies</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Real results from real clients. See how we&apos;ve helped businesses transform and grow.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Healthcare Management System", industry: "Healthcare", results: ["40% efficiency improvement", "Reduced patient wait times"], description: "Unified patient management system connecting all departments for seamless operations." },
              { title: "E-Commerce Platform Modernization", industry: "Retail", results: ["60% sales increase", "Improved page load speed"], description: "Modern scalable platform handling peak traffic with exceptional performance." },
              { title: "Cloud Migration Success", industry: "Finance", results: ["Zero downtime", "50% cost reduction"], description: "Seamless cloud migration ensuring business continuity and improved scalability." },
            ].map((study, index) => (
              <Card key={index} hover className="border-2 border-slate-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300 group">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full mb-3">
                    {study.industry}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-indigo-600 transition-colors">{study.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{study.description}</p>
                <div className="space-y-2 mb-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm text-slate-600">
                      <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/case-studies"
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 transition-colors group-hover:gap-2 gap-1"
                >
                  View Case Study
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/case-studies" variant="primary" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30">
              View All Case Studies
            </Button>
          </div>
        </div>
      </Section>

      {/* Testimonials Preview Section */}
      <Section className="py-20 lg:py-28 bg-white" aria-labelledby="testimonials-heading">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Client Testimonials
              </span>
            </div>
            <h2 id="testimonials-heading" className="text-4xl lg:text-5xl font-bold mb-4 text-slate-900">What Our Clients Say</h2>
            <p className="text-lg lg:text-xl text-slate-600 max-w-3xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what our clients have to say about working with us.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", company: "TechCorp Industries", role: "CEO", content: "NCCGL transformed our business operations with their innovative software solutions. The team was professional, responsive, and delivered exceptional results that exceeded our expectations." },
              { name: "Priya Sharma", company: "HealthCare Plus", role: "CTO", content: "Working with NCCGL was a game-changer. They understood our unique requirements and delivered a solution that exceeded our expectations. Highly recommended." },
              { name: "Amit Patel", company: "Financial Services Group", role: "VP of Technology", content: "The cloud migration project was executed flawlessly. NCCGL's expertise and attention to detail ensured zero downtime and improved performance significantly." },
            ].map((testimonial, index) => (
              <Card key={index} className="border-2 border-slate-100 hover:border-indigo-300 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 mb-6 leading-relaxed italic">&quot;{testimonial.content}&quot;</p>
                <div className="border-t border-slate-100 pt-4">
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button href="/testimonials" variant="primary" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30">
              Read More Testimonials
            </Button>
          </div>
        </div>
      </Section>

      {/* About Company Section */}
      <Section className="py-20 lg:py-28 bg-white" aria-labelledby="about-section-heading">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                  About {companyInfo.name}
                </span>
              </div>
              <h2 id="about-section-heading" className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900">
                Leading Technology Solutions Provider Since {companyInfo.establishedYear}
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {companyInfo.fullName} has been at the forefront of technological innovation for over {new Date().getFullYear() - companyInfo.establishedYear} years. We specialize in delivering cutting-edge software solutions, cloud services, and digital transformation strategies that help businesses thrive in today&apos;s competitive landscape.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our team of experienced professionals combines technical expertise with business acumen to deliver solutions that not only meet but exceed our clients&apos; expectations. We pride ourselves on building long-term partnerships and delivering measurable results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/about" variant="primary" size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-500/30">
                  Learn More About Us
                </Button>
                <Button href="/contact" variant="outline" size="lg" className="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50">
                  Get In Touch
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card className="border-2 border-slate-100 p-6 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Security First</h3>
                  <p className="text-slate-600 text-sm">Enterprise-grade security and compliance standards</p>
                </Card>
                <Card className="border-2 border-slate-100 p-6 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Innovation</h3>
                  <p className="text-slate-600 text-sm">Cutting-edge technologies and methodologies</p>
                </Card>
              </div>
              <div className="space-y-6 mt-12">
                <Card className="border-2 border-slate-100 p-6 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Expert Team</h3>
                  <p className="text-slate-600 text-sm">Certified professionals with years of experience</p>
                </Card>
                <Card className="border-2 border-slate-100 p-6 hover:shadow-lg transition-all">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Proven Results</h3>
                  <p className="text-slate-600 text-sm">Track record of successful project delivery</p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-12 lg:py-16 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Heading */}
            <h2 className="text-2xl lg:text-3xl font-bold mb-3 text-white text-center leading-tight">
              Ready to Transform Your Business?
            </h2>
            
            {/* Description */}
            <p className="text-sm lg:text-base text-gray-300 mb-6 max-w-2xl mx-auto text-center leading-relaxed">
              Let&apos;s discuss how our innovative technology solutions can help your business thrive in the digital age. Get in touch with our experts today.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Button 
                href="/contact" 
                variant="primary" 
                size="md" 
                className="bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 text-white shadow-2xl shadow-indigo-500/50 border-0 px-5 py-2.5 text-sm font-semibold"
              >
                Get Started Today
              </Button>
              <Button 
                href="/services" 
                variant="outline" 
                size="md" 
                className="border-2 border-white/30 !text-white hover:bg-white/10 backdrop-blur-sm px-5 py-2.5 text-sm font-semibold"
              >
                Explore Our Services
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4 border-t border-white/10">
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-white mb-0.5">500+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-white mb-0.5">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-white mb-0.5">24/7</div>
                <div className="text-sm text-gray-400">Support Available</div>
              </div>
              <div className="text-center">
                <div className="text-xl lg:text-2xl font-bold text-white mb-0.5">26+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
