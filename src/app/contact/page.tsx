import { generateSEOMetadata } from "@/components/common/SEO";
import { StructuredData } from "@/components/common/StructuredData";
import Section from "@/components/ui/Section";
import ContactForm from "@/components/forms/ContactForm";
import { companyInfo } from "@/utils/constants";

export const metadata = generateSEOMetadata({
  title: "Contact Us",
  description: `Get in touch with ${companyInfo.fullName} for expert IT solutions and software development services. Contact our team for consultations, quotes, and support.`,
  keywords: ["contact NCCGL", "IT consulting contact", "software development consultation", "get quote", "IT services contact"],
  url: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Contact", url: "/contact" },
        ]}
      />
      <StructuredData
        type="ContactPoint"
        contactPointData={{
          email: companyInfo.primaryContact,
          contactType: "Customer Service",
          areaServed: "Worldwide",
          availableLanguage: "English",
        }}
      />
      {/* Hero Section with Industries Page Gradient */}
      <Section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-purple-200 text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            We&apos;d love to hear from you. Get in touch and let&apos;s discuss how we can help.
          </p>
        </div>
      </Section>

      {/* Main Content Section */}
      <Section className="bg-gradient-to-b from-slate-50 via-indigo-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Contact Information */}
            <div>
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4 text-lg text-slate-700 leading-relaxed">
                  <p>
                    Whether you have a question about our services, need technical support, or want to discuss a potential project, we&apos;re here to help. Our team is committed to providing timely and professional assistance.
                  </p>
                  <p>
                    Fill out the contact form and we&apos;ll get back to you as soon as possible. For urgent matters, please reach out directly via email, and we&apos;ll prioritize your request.
                  </p>
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-6">
                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">Email Address</h3>
                      <a 
                        href={`mailto:${companyInfo.primaryContact}`} 
                        className="text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200 inline-flex items-center"
                      >
                        {companyInfo.primaryContact}
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                      <p className="text-slate-600 text-sm mt-2">
                        Send us an email anytime and we&apos;ll respond promptly
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">Response Time</h3>
                      <p className="text-indigo-600 font-medium">
                        We typically respond within 24 hours
                      </p>
                      <p className="text-slate-600 text-sm mt-2">
                        Our team reviews all inquiries during business hours and aims for quick turnaround
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  <div className="flex items-start">
                    <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mr-5 flex-shrink-0 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900 mb-2 text-lg">Business Hours</h3>
                      <p className="text-indigo-600 font-medium">
                        Monday - Friday: 10:00 AM - 7:00 PM
                      </p>
                      <p className="text-slate-600 text-sm mt-2">
                        We&apos;re available during standard business hours for your convenience
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-slate-100">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-600 mb-8">
                  Complete the form below and we&apos;ll get back to you as soon as possible
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Additional Information Section */}
      <Section className="bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose NCCGL?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We provide comprehensive technology solutions tailored to your business needs
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Fast Response</h3>
              <p className="text-slate-600">
                We understand the importance of timely communication and respond to all inquiries promptly
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Expert Team</h3>
              <p className="text-slate-600">
                Our experienced professionals are ready to help you with comprehensive technology solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Proven Solutions</h3>
              <p className="text-slate-600">
                We deliver results-driven technology solutions that help businesses achieve their goals
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
