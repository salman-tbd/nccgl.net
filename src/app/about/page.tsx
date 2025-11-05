import { generateSEOMetadata } from "@/components/common/SEO";
import { StructuredData } from "@/components/common/StructuredData";
import Section from "@/components/ui/Section";
import { companyInfo } from "@/utils/constants";

export const metadata = generateSEOMetadata({
  title: "About Us",
  description: `Learn about ${companyInfo.fullName}, established in ${companyInfo.establishedYear}. Discover our mission, values, expert team, and commitment to delivering exceptional IT services and software solutions.`,
  keywords: ["about NCCGL", "IT company history", "software development team", "technology expertise", "company values", "IT services provider"],
  url: "/about",
});

export default function AboutPage() {
  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "About Us", url: "/about" },
        ]}
      />
      <Section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-purple-200 text-sm font-semibold uppercase tracking-wider">
              About Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            About {companyInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Delivering innovative software solutions since {companyInfo.establishedYear}
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-4">
                <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">
                  Our Journey
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 leading-tight">
                Our Story
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>
                  {companyInfo.fullName} was founded in {companyInfo.establishedYear} with a
                  simple mission: to help businesses thrive in the digital age through innovative
                  technology solutions. What started as a small team of passionate developers has
                  grown into a trusted partner for organizations across various industries.
                </p>
                <p>
                  Over the years, we have worked with hundreds of clients, from startups to Fortune
                  500 companies. Our commitment to excellence and customer satisfaction has been the
                  cornerstone of our success. We believe that technology should empower businesses,
                  not complicate them.
                </p>
                <p>
                  Today, {companyInfo.name} continues to evolve, staying ahead of technological trends and
                  adapting to the ever-changing needs of our clients. We combine technical expertise
                  with business acumen to deliver solutions that drive real results.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative">
                {/* Timeline Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-indigo-100 to-teal-100 rounded-3xl blur-2xl opacity-50"></div>
                
                {/* Main Stats Container */}
                <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-2xl border border-purple-100">
                  {/* Years Timeline Header */}
                  <div className="mb-8 pb-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-left">
                        <div className="text-sm font-semibold text-purple-600 uppercase tracking-wider mb-1">Established</div>
                        <div className="text-3xl font-bold text-gray-900">{companyInfo.establishedYear}</div>
                      </div>
                      <div className="relative flex-1 mx-6">
                        <div className="h-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-teal-500 rounded-full"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-4 h-4 bg-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-1">Present</div>
                        <div className="text-3xl font-bold text-gray-900">{new Date().getFullYear()}</div>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <div className="inline-block bg-gradient-to-r from-purple-600 via-indigo-600 to-teal-600 text-white px-6 py-2 rounded-full">
                        <span className="text-2xl font-bold">{new Date().getFullYear() - companyInfo.establishedYear}+</span>
                        <span className="text-sm font-medium ml-2">Years of Excellence</span>
                      </div>
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border-2 border-purple-200 group-hover:border-purple-400 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-1">500+</div>
                        <div className="text-gray-700 font-medium text-sm">Happy Clients</div>
                      </div>
                    </div>

                    <div className="group relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border-2 border-indigo-200 group-hover:border-indigo-400 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-700 bg-clip-text text-transparent mb-1">1000+</div>
                        <div className="text-gray-700 font-medium text-sm">Projects Delivered</div>
                      </div>
                    </div>

                    <div className="group relative sm:col-span-2 lg:col-span-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <div className="relative bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border-2 border-teal-200 group-hover:border-teal-400 transition-all duration-300">
                        <div className="flex items-center justify-between mb-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-teal-700 bg-clip-text text-transparent mb-1">50+</div>
                        <div className="text-gray-700 font-medium text-sm">Team Members</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">
                What We Stand For
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Values</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do and shape our commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
              <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We strive for excellence in every project, ensuring the highest quality standards
                in everything we do.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
              <div className="bg-gradient-to-br from-indigo-500 to-teal-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We work closely with our clients as partners, building strong relationships based
                on trust and mutual respect.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
              <div className="bg-gradient-to-br from-teal-500 to-purple-600 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We embrace new technologies and innovative approaches to solve complex business
                challenges.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-emerald-400 via-cyan-400 to-blue-400 rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative z-10">
                <div className="inline-block mb-4">
                  <span className="text-emerald-700 text-sm font-semibold uppercase tracking-wider">
                    Our Purpose
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Mission</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  To empower businesses with cutting-edge technology solutions that drive growth,
                  efficiency, and competitive advantage. We are committed to delivering exceptional
                  value through innovation, expertise, and unwavering dedication to our clients&apos;
                  success.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-rose-400 via-pink-400 to-orange-400 rounded-3xl p-10 md:p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
              <div className="relative z-10">
                <div className="inline-block mb-4">
                  <span className="text-rose-700 text-sm font-semibold uppercase tracking-wider">
                    Our Future
                  </span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Vision</h2>
                <p className="text-lg leading-relaxed text-gray-800">
                  To be the world&apos;s most trusted technology partner, recognized for transforming
                  businesses through innovative solutions. We envision a future where technology
                  seamlessly integrates with human potential, creating unprecedented opportunities
                  for growth and success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">What Sets Us Apart</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Discover the unique advantages that make {companyInfo.name} the preferred choice for businesses worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Proven Track Record</h3>
              <p className="text-gray-600 leading-relaxed">
                With over {new Date().getFullYear() - companyInfo.establishedYear} years of experience, we&apos;ve successfully delivered thousands of projects across diverse industries, building a reputation for reliability and excellence.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cutting-Edge Technology</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay at the forefront of technological innovation, leveraging the latest tools, frameworks, and methodologies to deliver solutions that are future-ready and scalable.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Our dedicated support team is available around the clock to ensure your systems run smoothly, providing rapid response times and proactive monitoring.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Enterprise Security</h3>
              <p className="text-gray-600 leading-relaxed">
                Security is our top priority. We implement industry-leading security practices and compliance standards to protect your data and infrastructure.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-teal-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Cost-Effective Solutions</h3>
              <p className="text-gray-600 leading-relaxed">
                We deliver maximum value for your investment, optimizing costs without compromising on quality, helping you achieve better ROI on your technology investments.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Expert Team</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team consists of certified professionals with deep expertise across various technologies, ensuring you receive the best guidance and implementation.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">
                Our Approach
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">How We Work</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our proven methodology ensures successful project delivery and client satisfaction
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10">
                  <span className="text-3xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Discovery</h3>
                <p className="text-gray-600 leading-relaxed">
                  We begin by understanding your business, challenges, and goals through comprehensive consultation and analysis.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 transform translate-x-4"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10">
                  <span className="text-3xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Planning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our team creates a detailed roadmap with milestones, timelines, and deliverables tailored to your specific needs.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500 to-teal-500 transform translate-x-4"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10">
                  <span className="text-3xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Development</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build your solution using agile methodologies, ensuring regular updates and continuous feedback integration.
                </p>
              </div>
              <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-teal-500 to-purple-500 transform translate-x-4"></div>
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10">
                  <span className="text-3xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Deployment</h3>
                <p className="text-gray-600 leading-relaxed">
                  We ensure smooth deployment with comprehensive testing, training, and ongoing support for long-term success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">
                Technology Expertise
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Technologies We Master</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We work with cutting-edge technologies to deliver innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Cloud Computing", "AI & Machine Learning", "Cybersecurity", 
              "Mobile Development", "Web Development", "Data Analytics",
              "DevOps", "Blockchain", "IoT Solutions",
              "Enterprise Software", "API Development", "Microservices"
            ].map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-sm font-semibold text-gray-900">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-purple-600 text-sm font-semibold uppercase tracking-wider">
                Recognition
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Awards & Achievements</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and clients worldwide
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 border-2 border-purple-200">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">25+</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Industry Awards</h3>
              <p className="text-gray-600 leading-relaxed">
                Recognized for innovation, quality, and customer satisfaction across multiple industry categories.
              </p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-teal-50 rounded-2xl p-8 border-2 border-indigo-200">
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-teal-600 bg-clip-text text-transparent mb-4">98%</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Client Satisfaction</h3>
              <p className="text-gray-600 leading-relaxed">
                Our clients consistently rate us highly for service quality, technical expertise, and project delivery.
              </p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-2xl p-8 border-2 border-teal-200">
              <div className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-purple-600 bg-clip-text text-transparent mb-4">ISO</div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Certified Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                ISO certified processes ensuring quality, security, and compliance in all our operations and deliverables.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
