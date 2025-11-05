import { generateSEOMetadata } from "@/components/common/SEO";
import { StructuredData } from "@/components/common/StructuredData";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import { companyInfo } from "@/utils/constants";

export const metadata = generateSEOMetadata({
  title: "Our Team",
  description: `Meet the talented professionals behind ${companyInfo.fullName} who are dedicated to delivering exceptional results. Expert team of software developers, IT consultants, and technology specialists.`,
  keywords: ["IT team", "software development team", "technology experts", "IT professionals", "technical team", "software engineers"],
  url: "/team",
});

const leadershipTeam = [
  {
    name: "Rajesh Kumar",
    role: "Chief Executive Officer",
    bio: "With over 18 years of experience in technology leadership, Rajesh drives the strategic vision of NCCGL and ensures we deliver exceptional value to our clients worldwide.",
  },
  {
    name: "Priya Sharma",
    role: "Chief Technology Officer",
    bio: "Priya leads our technical innovation efforts, ensuring we stay ahead of industry trends and deliver cutting-edge solutions that drive business transformation.",
  },
  {
    name: "Arjun Patel",
    role: "Head of Development",
    bio: "Arjun oversees our development teams and ensures the highest quality standards in all projects, bringing over 15 years of software engineering expertise.",
  },
  {
    name: "Ananya Singh",
    role: "Head of Sales & Business Development",
    bio: "Ananya builds strategic relationships with clients and helps businesses understand how technology can transform their operations and drive growth.",
  },
  {
    name: "Vikram Reddy",
    role: "Head of Design & User Experience",
    bio: "Vikram creates intuitive user experiences that make technology accessible and enjoyable, combining design thinking with technical excellence.",
  },
  {
    name: "Sneha Iyer",
    role: "Head of Operations",
    bio: "Sneha ensures smooth project delivery and maintains high standards of operational excellence across all our engagements and client relationships.",
  },
];

const managementTeam = [
  {
    name: "Karan Malhotra",
    role: "Senior Project Manager",
    bio: "Karan manages complex projects with precision, ensuring timely delivery and exceeding client expectations through strategic planning and execution.",
  },
  {
    name: "Divya Nair",
    role: "Lead Software Architect",
    bio: "Divya designs scalable and robust software architectures, leveraging her expertise in cloud technologies and enterprise solutions.",
  },
  {
    name: "Rohan Mehta",
    role: "Head of Cybersecurity",
    bio: "Rohan leads our cybersecurity initiatives, protecting client assets with advanced security measures and compliance frameworks.",
  },
  {
    name: "Aishwarya Desai",
    role: "Head of Quality Assurance",
    bio: "Aishwarya ensures flawless software delivery through comprehensive testing strategies and quality assurance processes.",
  },
  {
    name: "Aditya Joshi",
    role: "Head of Cloud Solutions",
    bio: "Aditya specializes in cloud infrastructure and migration, helping businesses modernize their IT infrastructure with scalable cloud solutions.",
  },
  {
    name: "Meera Krishnan",
    role: "Head of Data Analytics",
    bio: "Meera transforms complex data into actionable insights, enabling data-driven decision making for our clients across industries.",
  },
];

export default function TeamPage() {
  return (
    <>
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Team", url: "/team" },
        ]}
      />
      <Section className="bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white py-12 lg:py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-block mb-6">
            <span className="text-purple-200 text-sm font-semibold uppercase tracking-wider">
              Our Team
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Meet Our Team
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
            Talented professionals dedicated to delivering innovative software solutions and exceptional results
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Leadership
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Our Leadership Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our leadership team is comprised of experienced professionals who are passionate about
              technology and dedicated to helping our clients succeed. We combine technical
              expertise with business acumen to deliver exceptional results that drive business transformation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {leadershipTeam.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group border-2 border-gray-100 hover:border-indigo-200">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section background="gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Management
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Management Team</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our management team brings deep expertise in their respective domains, ensuring excellence
              in project delivery, technical innovation, and client satisfaction across all our service offerings.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {managementTeam.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 group border-2 border-gray-100 hover:border-indigo-200">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 w-28 h-28 rounded-full mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <span className="text-4xl font-bold text-white">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{member.name}</h3>
                <p className="text-indigo-600 font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-indigo-600 text-sm font-semibold uppercase tracking-wider">
                Our Culture
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Why Our Team Excels</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team&apos;s success is built on a foundation of collaboration, innovation, and commitment to excellence
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group border-2 border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                We foster a culture of open communication and teamwork, where every team member&apos;s contribution is valued and recognized.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group border-2 border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                We encourage continuous learning and innovation, staying ahead of technology trends to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group border-2 border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                We maintain the highest standards of quality in everything we do, ensuring exceptional results for our clients.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
