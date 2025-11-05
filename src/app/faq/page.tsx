import { generateSEOMetadata } from "@/components/common/SEO";
import { StructuredData } from "@/components/common/StructuredData";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export const metadata = generateSEOMetadata({
  title: "Frequently Asked Questions",
  description: "Find answers to common questions about NCCGL's services, processes, and solutions. Get expert answers about software development, cloud solutions, cybersecurity, and IT consulting.",
  keywords: ["FAQ", "questions", "IT services", "software development", "cloud solutions", "cybersecurity"],
  url: "/faq",
});

const faqs = [
  {
    question: "What services does NCCGL offer?",
    answer: "We offer a comprehensive range of IT services including custom software development, cloud solutions, cybersecurity, IT consulting, data analytics, and digital transformation services.",
  },
  {
    question: "What industries do you serve?",
    answer: "We work with businesses across various industries including healthcare, finance, manufacturing, retail, education, government, energy, and transportation.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary depending on the scope and complexity. Simple projects may take a few weeks, while large enterprise solutions can take several months. We provide detailed timelines during the planning phase.",
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer ongoing support and maintenance services to ensure your solutions continue to perform optimally. We provide various support packages to meet your needs.",
  },
  {
    question: "What technologies do you work with?",
    answer: "We work with a wide range of modern technologies including React, Node.js, Python, Java, AWS, Azure, and various databases and cloud platforms. We choose technologies based on your specific requirements.",
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Absolutely. We specialize in integrating new solutions with existing systems and infrastructure. Our team ensures seamless integration while maintaining your current operations.",
  },
  {
    question: "How do you ensure data security?",
    answer: "Security is a top priority. We implement industry best practices including encryption, secure coding standards, regular security audits, and compliance with relevant regulations.",
  },
  {
    question: "What is your development process?",
    answer: "We follow an agile development methodology with regular communication and iterative development. We involve clients throughout the process to ensure the solution meets their expectations.",
  },
];

export default function FAQPage() {
  return (
    <>
      <StructuredData type="FAQPage" faqData={faqs} />
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "FAQ", url: "/faq" },
        ]}
      />
      <Section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
          <p className="text-xl text-purple-100">Find answers to common questions</p>
        </div>
      </Section>

      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h2 className="text-xl font-semibold mb-3 text-gray-900">{faq.question}</h2>
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-gray-600 mb-6">
              If you couldn&apos;t find the answer you&apos;re looking for, please don&apos;t hesitate to contact us.
            </p>
            <Button href="/contact" variant="primary" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
