import { generateSEOMetadata } from "@/components/common/SEO";
import { StructuredData } from "@/components/common/StructuredData";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import Image from "next/image";

export const metadata = generateSEOMetadata({
  title: "Client Testimonials",
  description: "Read what our clients have to say about working with NCCGL Software Solutions. Real testimonials from satisfied customers about our IT services, software development, and technology solutions.",
  keywords: ["client testimonials", "customer reviews", "IT services reviews", "software development testimonials", "client feedback", "customer testimonials"],
  url: "/testimonials",
});

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechCorp Industries",
    role: "CEO",
    content: "CreateIT transformed our business operations with their innovative software solutions. The team was professional, responsive, and delivered exceptional results that exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "HealthCare Plus",
    role: "CTO",
    content: "Working with CreateIT was a game-changer. They understood our unique requirements and delivered a solution that exceeded our expectations. Highly recommended.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    company: "Financial Services Group",
    role: "VP of Technology",
    content: "The cloud migration project was executed flawlessly. CreateIT's expertise and attention to detail ensured zero downtime and improved performance significantly.",
    rating: 5,
  },
  {
    name: "Anjali Singh",
    company: "Retail Solutions Inc",
    role: "Director of IT",
    content: "Their mobile application development services are outstanding. The app has been well-received by our customers and has significantly increased engagement and sales.",
    rating: 5,
  },
  {
    name: "Vikram Mehta",
    company: "Manufacturing Co",
    role: "Operations Manager",
    content: "The IoT solution implemented by CreateIT has revolutionized our production monitoring. We've seen significant improvements in efficiency, quality, and cost reduction.",
    rating: 5,
  },
  {
    name: "Sneha Reddy",
    company: "Education Systems",
    role: "IT Director",
    content: "CreateIT developed a comprehensive learning management system that has enhanced our educational offerings. The platform is intuitive, feature-rich, and user-friendly.",
    rating: 5,
  },
  {
    name: "Arjun Desai",
    company: "E-Commerce Solutions",
    role: "Chief Technology Officer",
    content: "The digital transformation initiative led by CreateIT has completely modernized our operations. Their strategic approach and technical excellence have been invaluable.",
    rating: 5,
  },
  {
    name: "Kavita Nair",
    company: "Healthcare Innovations",
    role: "Head of Digital Strategy",
    content: "CreateIT's expertise in healthcare technology solutions is unmatched. They delivered a robust system that improved patient care and operational efficiency.",
    rating: 5,
  },
  {
    name: "Rohit Gupta",
    company: "FinTech Solutions",
    role: "VP of Engineering",
    content: "The security and compliance features implemented by CreateIT are exceptional. Our financial platform is now more secure and reliable than ever before.",
    rating: 5,
  },
  {
    name: "Deepika Iyer",
    company: "Logistics & Supply Chain",
    role: "Operations Director",
    content: "CreateIT's supply chain management system has streamlined our entire logistics process. We've achieved remarkable improvements in delivery times and cost savings.",
    rating: 5,
  },
  {
    name: "Suresh Menon",
    company: "Real Estate Tech",
    role: "Chief Executive Officer",
    content: "The property management platform developed by CreateIT has transformed how we operate. The system is intuitive, powerful, and has increased our productivity significantly.",
    rating: 5,
  },
  {
    name: "Meera Joshi",
    company: "Banking & Finance",
    role: "Chief Digital Officer",
    content: "CreateIT's banking solutions have revolutionized our customer experience. The digital banking platform is secure, user-friendly, and has received excellent feedback from our customers.",
    rating: 5,
  },
];

export default function TestimonialsPage() {
  const reviewData = testimonials.map((testimonial) => ({
    author: `${testimonial.name} (${testimonial.role}, ${testimonial.company})`,
    datePublished: new Date().toISOString().split('T')[0], // Use current date or actual dates if available
    reviewBody: testimonial.content,
    reviewRating: {
      ratingValue: testimonial.rating,
      bestRating: 5,
      worstRating: 1,
    },
  }));

  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Testimonials", url: "/testimonials" },
        ]}
      />
      <StructuredData type="Review" reviewData={reviewData} />
      {/* Header Section with Background Image 1 */}
      <Section className="relative py-20 lg:py-28 px-4 overflow-hidden bg-transparent">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"></div>
        </div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="mb-4">
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-semibold px-5 py-2 rounded-full border border-white/30">
              TESTIMONIALS
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Client Testimonials
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            See what our clients have to say about working with CreateIT
          </p>
        </div>
      </Section>

      {/* Testimonials Section with Background Image 2 */}
      <Section className="relative py-16 lg:py-24 px-4 overflow-hidden bg-transparent">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/images/businesspeople-are-their-business-trip (1).jpg"
            alt="Client testimonials and success stories background - NCCGL Software Solutions"
            fill
            className="object-cover"
            sizes="100vw"
            priority={false}
          />
          <div className="absolute inset-0 bg-white/95 backdrop-blur-sm"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We&apos;re proud of the relationships we&apos;ve built with our clients. Here&apos;s what they
              have to say about their experience working with CreateIT.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                hover 
                className="flex flex-col h-full bg-white/95 backdrop-blur-sm border border-gray-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg 
                      key={i} 
                      className="w-5 h-5 text-yellow-400 fill-current" 
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 flex-grow italic text-base leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="pt-4 border-t border-gray-200">
                  <p className="font-bold text-gray-900 text-lg mb-1">{testimonial.name}</p>
                  <p className="text-sm text-gray-600 font-medium">{testimonial.role}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
