import { generateSEOMetadata } from "@/components/common/SEO";
import { StructuredData } from "@/components/common/StructuredData";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { services, companyInfo } from "@/utils/constants";
import { notFound } from "next/navigation";
import Link from "next/link";
import React from "react";

interface ServicePageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);
  
  if (!service) {
    return generateSEOMetadata({
      title: "Service Not Found",
      description: "The requested service could not be found.",
    });
  }

  return generateSEOMetadata({
    title: `${service.title} | ${companyInfo.name}`,
    description: service.description,
    url: `/services/${id}`,
  });
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { id } = await params;
  const service = services.find((s) => s.id === id);

  if (!service) {
    notFound();
  }

  const serviceIndex = services.findIndex((s) => s.id === service.id);

  // Service-specific content
  const serviceContent: Record<string, {
    overview: string;
    detailedDescription: string;
    features: string[];
    benefits: string[];
    useCases: string[];
    technologies: string[];
    processSteps: Array<{ number: string; title: string; description: string }>;
    faqs: Array<{ question: string; answer: string }>;
  }> = {
    "software-development": {
      overview: "Our software development team specializes in creating custom applications that solve real business problems. We build solutions that are not just functional, but scalable, maintainable, and designed to grow with your business.",
      detailedDescription: "Whether you need a web application, mobile app, or enterprise software solution, we have the expertise to deliver. Our development process focuses on understanding your business needs first, then building software that truly fits your workflow. We use modern technologies and best practices to ensure your software is fast, secure, and ready for the future.",
      features: [
        "Custom application development tailored to your specific requirements",
        "Full-stack development using modern frameworks and technologies",
        "Responsive design that works seamlessly across all devices",
        "Agile development methodology with regular progress updates",
        "Comprehensive testing and quality assurance processes",
        "Post-launch support and maintenance services"
      ],
      benefits: [
        "Increased operational efficiency through automation",
        "Better customer experience with intuitive interfaces",
        "Reduced costs by streamlining business processes",
        "Competitive advantage with unique custom solutions",
        "Scalable architecture that grows with your business"
      ],
      useCases: [
        "Enterprise resource planning systems",
        "Customer relationship management platforms",
        "E-commerce and online marketplaces",
        "Content management systems",
        "Business intelligence dashboards",
        "Mobile applications for iOS and Android"
      ],
      technologies: [
        "React, Next.js, and Vue.js for frontend development",
        "Node.js, Python, and .NET for backend services",
        "PostgreSQL, MongoDB, and MySQL databases",
        "AWS, Azure, and Google Cloud for deployment",
        "Docker and Kubernetes for containerization",
        "CI/CD pipelines with automated testing"
      ],
      processSteps: [
        {
          number: "01",
          title: "Requirements Gathering",
          description: "We meet with your team to understand your business goals, user needs, and technical requirements. This phase includes stakeholder interviews, user research, and technical feasibility analysis."
        },
        {
          number: "02",
          title: "Design & Planning",
          description: "Our designers create wireframes and prototypes while our developers plan the technical architecture. You'll review and approve designs before we start building."
        },
        {
          number: "03",
          title: "Development & Testing",
          description: "We build your software using agile sprints, delivering working features regularly. Each feature is thoroughly tested before integration. You'll see progress every two weeks."
        },
        {
          number: "04",
          title: "Launch & Support",
          description: "We deploy your application to production and provide training for your team. Ongoing support ensures your software continues to perform optimally as your business evolves."
        }
      ],
      faqs: [
        {
          question: "How long does it take to develop custom software?",
          answer: "Development timelines vary based on project complexity and scope. A simple web application might take 8-12 weeks, while enterprise systems can take 6-12 months. We provide detailed timelines during the planning phase."
        },
        {
          question: "What technologies do you use for development?",
          answer: "We use modern, industry-standard technologies based on your project needs. This includes React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure. We choose technologies that best fit your requirements."
        },
        {
          question: "Do you provide maintenance after launch?",
          answer: "Yes, we offer comprehensive maintenance packages that include bug fixes, security updates, performance optimization, and feature enhancements. We can tailor support plans to match your needs."
        },
        {
          question: "Can you integrate with our existing systems?",
          answer: "Absolutely. We have extensive experience integrating new software with existing systems through APIs, databases, and third-party services. We'll ensure seamless data flow between systems."
        }
      ]
    },
    "cloud-solutions": {
      overview: "We help businesses migrate to the cloud and optimize their cloud infrastructure for performance, security, and cost-effectiveness. Our cloud solutions enable you to scale quickly, reduce IT costs, and improve collaboration.",
      detailedDescription: "Cloud computing has transformed how businesses operate. Whether you're moving from on-premise servers or optimizing your existing cloud setup, we provide expert guidance and implementation. We work with major cloud providers including AWS, Microsoft Azure, and Google Cloud Platform to find the best solution for your needs.",
      features: [
        "Cloud infrastructure design and architecture",
        "Migration services from on-premise to cloud",
        "Multi-cloud and hybrid cloud strategies",
        "Cloud security and compliance implementation",
        "Cost optimization and resource management",
        "24/7 cloud monitoring and support"
      ],
      benefits: [
        "Reduced IT infrastructure costs",
        "Improved scalability and flexibility",
        "Enhanced collaboration and remote access",
        "Better disaster recovery and backup solutions",
        "Access to latest technologies without large upfront investment"
      ],
      useCases: [
        "SaaS application hosting and deployment",
        "Data backup and disaster recovery",
        "Virtual desktop infrastructure",
        "Development and testing environments",
        "Big data analytics and processing",
        "Content delivery and media streaming"
      ],
      technologies: [
        "Amazon Web Services (AWS) ecosystem",
        "Microsoft Azure services and solutions",
        "Google Cloud Platform infrastructure",
        "Docker containers and Kubernetes orchestration",
        "Serverless computing with Lambda and Functions",
        "Cloud storage and database services"
      ],
      processSteps: [
        {
          number: "01",
          title: "Cloud Assessment",
          description: "We evaluate your current infrastructure, identify what can move to the cloud, and assess costs. This includes analyzing your applications, data, and security requirements."
        },
        {
          number: "02",
          title: "Strategy Development",
          description: "We create a customized cloud migration plan that outlines timelines, costs, and approach. We recommend the best cloud provider and architecture for your specific needs."
        },
        {
          number: "03",
          title: "Migration Execution",
          description: "We execute the migration with minimal downtime, moving your applications and data securely to the cloud. We test thoroughly at each stage to ensure everything works correctly."
        },
        {
          number: "04",
          title: "Optimization & Management",
          description: "After migration, we optimize your cloud environment for performance and cost. We provide ongoing management and monitoring to ensure optimal operation."
        }
      ],
      faqs: [
        {
          question: "Which cloud provider should we choose?",
          answer: "The best provider depends on your specific needs. AWS offers the widest range of services, Azure integrates well with Microsoft products, and Google Cloud excels at data analytics. We'll help you choose based on your requirements and budget."
        },
        {
          question: "How much can we save by moving to the cloud?",
          answer: "Most businesses see 20-40% cost reduction in IT infrastructure costs. Savings come from eliminating hardware purchases, reducing maintenance, and paying only for what you use. We provide detailed cost analysis during planning."
        },
        {
          question: "Is cloud data secure?",
          answer: "Yes, when properly configured. We implement enterprise-grade security including encryption, access controls, and compliance measures. Cloud providers often have better security than most on-premise setups."
        },
        {
          question: "What happens if we need to switch providers?",
          answer: "We design cloud solutions with portability in mind. While some vendor lock-in is inevitable, we minimize it by using standard technologies and architectures. We can help migrate between providers if needed."
        }
      ]
    },
    "cybersecurity": {
      overview: "Protect your business from cyber threats with our comprehensive cybersecurity services. We help you identify vulnerabilities, implement security measures, and respond to incidents quickly and effectively.",
      detailedDescription: "Cyber threats are evolving constantly, and businesses of all sizes are targets. Our cybersecurity team provides end-to-end protection for your digital assets. We conduct security assessments, implement protective measures, monitor for threats, and respond to incidents. Our goal is to make your business resilient against cyber attacks.",
      features: [
        "Security risk assessments and vulnerability scanning",
        "Network security and firewall configuration",
        "Endpoint protection and antivirus solutions",
        "Security awareness training for employees",
        "Incident response and forensic investigation",
        "Compliance with industry standards and regulations"
      ],
      benefits: [
        "Protection against data breaches and cyber attacks",
        "Compliance with security regulations and standards",
        "Reduced risk of financial losses from security incidents",
        "Enhanced customer trust and business reputation",
        "Peace of mind knowing your systems are protected"
      ],
      useCases: [
        "Protecting sensitive customer and employee data",
        "Securing e-commerce and payment systems",
        "Defending against ransomware and malware attacks",
        "Ensuring compliance with GDPR, HIPAA, and other regulations",
        "Securing remote work environments",
        "Protecting intellectual property and trade secrets"
      ],
      technologies: [
        "Next-generation firewalls and intrusion detection systems",
        "Endpoint detection and response (EDR) solutions",
        "Security information and event management (SIEM)",
        "Identity and access management (IAM) systems",
        "Encryption and data loss prevention tools",
        "Penetration testing and vulnerability assessment tools"
      ],
      processSteps: [
        {
          number: "01",
          title: "Security Assessment",
          description: "We conduct a comprehensive security audit of your systems, networks, and processes. This identifies vulnerabilities and risks that need to be addressed."
        },
        {
          number: "02",
          title: "Security Planning",
          description: "Based on the assessment, we develop a security strategy tailored to your business. This includes selecting appropriate security tools and defining policies and procedures."
        },
        {
          number: "03",
          title: "Implementation",
          description: "We implement security measures including firewalls, antivirus, encryption, and access controls. We configure everything according to best practices and your specific needs."
        },
        {
          number: "04",
          title: "Monitoring & Response",
          description: "We provide ongoing monitoring to detect threats early. Our incident response team is ready 24/7 to respond to security incidents and minimize damage."
        }
      ],
      faqs: [
        {
          question: "How often should we conduct security assessments?",
          answer: "We recommend comprehensive assessments at least annually, with quarterly vulnerability scans. High-risk environments or those handling sensitive data may need more frequent assessments."
        },
        {
          question: "What should we do if we've been breached?",
          answer: "Contact us immediately. Our incident response team will contain the breach, assess damage, restore systems, and investigate the attack. We'll also help you notify affected parties and comply with reporting requirements."
        },
        {
          question: "Do we need cybersecurity insurance?",
          answer: "Cybersecurity insurance is highly recommended. It can cover costs from data breaches, business interruption, and legal expenses. We can help you understand coverage options."
        },
        {
          question: "How do we ensure employees follow security practices?",
          answer: "We provide security awareness training that teaches employees to recognize threats like phishing emails. We also implement technical controls that enforce security policies automatically."
        }
      ]
    },
    "it-consulting": {
      overview: "Get expert technology guidance to make informed decisions about your IT infrastructure, software, and digital strategy. We help you align technology investments with your business goals.",
      detailedDescription: "Technology decisions can be complex and costly. Our IT consulting services help you navigate these decisions with confidence. We provide strategic advice on everything from infrastructure planning to software selection. Our consultants bring years of experience across industries and can help you avoid costly mistakes while maximizing your technology investments.",
      features: [
        "IT strategy development and roadmap planning",
        "Technology vendor evaluation and selection",
        "Infrastructure assessment and optimization",
        "Digital transformation strategy",
        "IT budget planning and cost optimization",
        "Technology training and knowledge transfer"
      ],
      benefits: [
        "Informed technology decisions that align with business goals",
        "Reduced technology costs through better planning",
        "Faster implementation of new technologies",
        "Reduced risk from poor technology choices",
        "Access to expert knowledge without hiring full-time staff"
      ],
      useCases: [
        "Planning major technology upgrades or migrations",
        "Evaluating software solutions before purchase",
        "Optimizing IT infrastructure and reducing costs",
        "Developing digital transformation roadmaps",
        "Assessing technology needs for business expansion",
        "Resolving technical challenges and bottlenecks"
      ],
      technologies: [
        "Enterprise architecture frameworks and methodologies",
        "Cloud computing platforms and services",
        "Enterprise software suites and applications",
        "Network infrastructure and security solutions",
        "Data center and server technologies",
        "Business intelligence and analytics tools"
      ],
      processSteps: [
        {
          number: "01",
          title: "Discovery & Analysis",
          description: "We meet with your team to understand your business objectives, current technology landscape, and challenges. We analyze your systems, processes, and requirements in detail."
        },
        {
          number: "02",
          title: "Strategy Development",
          description: "Based on our analysis, we develop recommendations and create a strategic technology roadmap. We present options with pros, cons, and costs to help you make informed decisions."
        },
        {
          number: "03",
          title: "Implementation Planning",
          description: "For approved initiatives, we create detailed implementation plans including timelines, resource requirements, and risk mitigation strategies. We help you prepare for successful execution."
        },
        {
          number: "04",
          title: "Ongoing Support",
          description: "We provide ongoing consultation as you implement recommendations. We're available to answer questions, adjust plans, and provide guidance throughout the process."
        }
      ],
      faqs: [
        {
          question: "How long does a typical consulting engagement last?",
          answer: "Engagements vary based on scope. A technology assessment might take 2-4 weeks, while developing a comprehensive IT strategy could take 6-12 weeks. We also offer ongoing retainer services."
        },
        {
          question: "Do you provide implementation services as well?",
          answer: "Yes, we can provide both consulting and implementation services. Many clients prefer this as we understand their needs from the planning phase. We can also work with your internal team or other vendors."
        },
        {
          question: "What industries do you have experience with?",
          answer: "We've worked with clients across healthcare, finance, manufacturing, retail, education, and government sectors. Our consultants bring diverse industry experience to every project."
        },
        {
          question: "How do you ensure recommendations are practical?",
          answer: "We consider your budget, timeline, resources, and existing systems when making recommendations. We focus on solutions that are achievable and provide real value, not just the latest technology trends."
        }
      ]
    },
    "data-analytics": {
      overview: "Transform your raw data into actionable business insights. We help you collect, analyze, and visualize data to make better decisions, identify opportunities, and optimize operations.",
      detailedDescription: "Data is one of your most valuable assets, but it's only useful if you can extract meaningful insights. Our data analytics services help you unlock the value in your data. We build dashboards, create reports, perform advanced analysis, and help you understand what your data is telling you. Whether you need basic reporting or advanced machine learning, we have the expertise.",
      features: [
        "Data warehouse design and implementation",
        "Business intelligence dashboard development",
        "Advanced analytics and predictive modeling",
        "Data visualization and reporting",
        "Data integration from multiple sources",
        "Machine learning and AI model development"
      ],
      benefits: [
        "Data-driven decision making",
        "Identification of business opportunities and trends",
        "Improved operational efficiency",
        "Better understanding of customer behavior",
        "Competitive advantage through insights"
      ],
      useCases: [
        "Sales performance analysis and forecasting",
        "Customer behavior and segmentation analysis",
        "Operational efficiency optimization",
        "Financial reporting and analysis",
        "Marketing campaign effectiveness measurement",
        "Supply chain and inventory optimization"
      ],
      technologies: [
        "Power BI, Tableau, and Looker for visualization",
        "Python and R for data analysis and modeling",
        "SQL databases and data warehouses",
        "Apache Spark for big data processing",
        "Machine learning frameworks and libraries",
        "Cloud analytics platforms"
      ],
      processSteps: [
        {
          number: "01",
          title: "Data Assessment",
          description: "We evaluate your data sources, quality, and availability. We identify what data you have, what's missing, and what needs to be cleaned or organized before analysis."
        },
        {
          number: "02",
          title: "Data Preparation",
          description: "We clean, transform, and integrate data from multiple sources. This includes building data pipelines, creating data warehouses, and ensuring data quality."
        },
        {
          number: "03",
          title: "Analysis & Modeling",
          description: "We perform statistical analysis, build predictive models, and create visualizations. We identify patterns, trends, and insights that can drive business decisions."
        },
        {
          number: "04",
          title: "Deployment & Training",
          description: "We deploy dashboards and reports for your team to use. We provide training so your team can use the analytics tools and interpret the results effectively."
        }
      ],
      faqs: [
        {
          question: "What types of data can you analyze?",
          answer: "We can analyze virtually any type of data including sales transactions, customer interactions, website analytics, operational metrics, financial data, and more. We work with structured data in databases and unstructured data like text and images."
        },
        {
          question: "How long does it take to see results?",
          answer: "Simple dashboards can be built in 2-4 weeks. More complex analytics projects with data integration and modeling typically take 6-12 weeks. We provide regular updates and can often deliver quick wins early in the process."
        },
        {
          question: "Do we need to have clean data before starting?",
          answer: "Not necessarily. Data cleaning and preparation are part of our services. We'll help you identify data quality issues and fix them. However, having reasonably organized data can accelerate the process."
        },
        {
          question: "Can you help us build internal analytics capabilities?",
          answer: "Absolutely. Beyond delivering analytics solutions, we provide training and documentation to help your team become self-sufficient. We can also help you hire and train analytics staff."
        }
      ]
    },
    "digital-transformation": {
      overview: "Transform your business operations for the digital age. We help you modernize processes, adopt new technologies, and create digital-first customer experiences that drive growth.",
      detailedDescription: "Digital transformation isn't just about technology—it's about reimagining how your business operates in a digital world. We help you identify opportunities to digitize processes, improve customer experiences, and create new digital products or services. Our approach combines strategic planning with hands-on implementation to ensure real transformation happens.",
      features: [
        "Digital strategy development and roadmap creation",
        "Process automation and digitization",
        "Customer experience design and optimization",
        "Digital product development",
        "Change management and training",
        "Technology platform selection and implementation"
      ],
      benefits: [
        "Improved operational efficiency and productivity",
        "Enhanced customer experiences and satisfaction",
        "New revenue streams from digital products",
        "Competitive advantage in the digital marketplace",
        "Future-ready business that can adapt quickly"
      ],
      useCases: [
        "Modernizing legacy systems and processes",
        "Creating digital customer portals and self-service options",
        "Automating manual business processes",
        "Developing mobile apps and digital products",
        "Implementing e-commerce and online sales channels",
        "Building data-driven decision-making capabilities"
      ],
      technologies: [
        "Cloud platforms for scalable infrastructure",
        "Customer relationship management systems",
        "Enterprise resource planning solutions",
        "Low-code and no-code automation platforms",
        "API and integration technologies",
        "Mobile and web application frameworks"
      ],
      processSteps: [
        {
          number: "01",
          title: "Vision & Strategy",
          description: "We work with leadership to define your digital vision and create a transformation roadmap. This includes identifying priorities, setting goals, and planning initiatives."
        },
        {
          number: "02",
          title: "Pilot Programs",
          description: "We start with focused pilot programs to prove value and build momentum. These quick wins demonstrate the benefits of transformation and help secure broader support."
        },
        {
          number: "03",
          title: "Scale & Expand",
          description: "Successful pilots are expanded across the organization. We scale solutions, integrate systems, and ensure consistency across business units."
        },
        {
          number: "04",
          title: "Optimize & Evolve",
          description: "We continuously monitor and optimize digital initiatives. We help you adapt to changing market conditions and take advantage of new opportunities as they emerge."
        }
      ],
      faqs: [
        {
          question: "How long does digital transformation take?",
          answer: "Digital transformation is an ongoing journey, not a one-time project. Initial initiatives typically show results within 3-6 months, while full transformation may take 2-3 years. We focus on delivering value incrementally."
        },
        {
          question: "What's the biggest challenge in digital transformation?",
          answer: "Change management is often the biggest challenge. Technology is usually easier than getting people to adopt new processes. We include change management and training in all our transformation projects."
        },
        {
          question: "Do we need to transform everything at once?",
          answer: "No, and we don't recommend it. We start with high-impact, low-risk initiatives to build momentum. Gradual transformation reduces risk and allows you to learn and adjust along the way."
        },
        {
          question: "How do we measure transformation success?",
          answer: "Success is measured by business outcomes like increased revenue, improved efficiency, better customer satisfaction, and reduced costs. We define key performance indicators at the start and track them throughout the process."
        }
      ]
    }
  };

  const content = serviceContent[service.id] || {
    overview: `${service.title} from ${companyInfo.name} provides comprehensive solutions designed to meet your specific business requirements.`,
    detailedDescription: `We understand that every business is unique, which is why we take the time to understand your goals, challenges, and constraints before proposing a solution.`,
    features: [
      "Customized solutions tailored to your business needs",
      "Expert consultation and strategic guidance",
      "Implementation and deployment support",
      "Ongoing maintenance and optimization",
      "Training and knowledge transfer",
      "24/7 support and monitoring"
    ],
    benefits: [
      "Proven track record of successful implementations",
      "Industry-leading technologies and best practices",
      "Scalable solutions that grow with your business",
      "Cost-effective solutions that maximize ROI",
      "Dedicated team of experienced professionals"
    ],
    useCases: [
      "Enterprise-scale implementations",
      "Small to medium business solutions",
      "Industry-specific customizations",
      "Integration with existing systems",
      "Cloud and on-premise deployments",
      "Multi-location and distributed teams"
    ],
    technologies: [
      "Cutting-edge frameworks and platforms",
      "Cloud-native architectures",
      "Enterprise-grade security protocols",
      "Scalable infrastructure solutions",
      "Modern development methodologies",
      "AI and machine learning integration"
    ],
    processSteps: [
      {
        number: "01",
        title: "Discovery & Analysis",
        description: "We conduct a comprehensive analysis of your business requirements, challenges, and objectives to understand your unique needs."
      },
      {
        number: "02",
        title: "Strategic Planning",
        description: "Our experts develop a customized strategy aligned with your business goals, timeline, and budget constraints."
      },
      {
        number: "03",
        title: "Implementation",
        description: "We execute the plan with precision, ensuring minimal disruption to your operations while delivering maximum value."
      },
      {
        number: "04",
        title: "Optimization & Support",
        description: "Continuous monitoring, optimization, and support ensure your solution remains effective and evolves with your business."
      }
    ],
    faqs: [
      {
        question: "What is the typical timeline for implementation?",
        answer: "Implementation timelines vary based on project scope and complexity. Our team works with you to establish realistic timelines that align with your business objectives."
      },
      {
        question: "Do you provide training for our team?",
        answer: "Yes, we provide comprehensive training programs tailored to your team's needs. This includes hands-on workshops, documentation, and ongoing support."
      },
      {
        question: "What kind of support do you offer after implementation?",
        answer: "We offer 24/7 support with dedicated account managers, regular health checks, proactive monitoring, and continuous optimization."
      },
      {
        question: "Can the solution integrate with our existing systems?",
        answer: "Absolutely. Our solutions are designed with integration in mind. We work with your existing technology stack and ensure seamless connectivity."
      }
    ]
  };
  
  // Professional color schemes based on service type
  const colorSchemes = [
    {
      hero: 'from-slate-900 via-indigo-900 to-slate-900',
      accent: 'from-emerald-500 to-teal-600',
      card: 'from-emerald-50 to-teal-50',
      border: 'border-emerald-200',
      text: 'text-emerald-600',
      button: 'from-emerald-600 to-teal-600',
    },
    {
      hero: 'from-slate-900 via-teal-900 to-slate-900',
      accent: 'from-cyan-500 to-blue-600',
      card: 'from-cyan-50 to-blue-50',
      border: 'border-cyan-200',
      text: 'text-cyan-600',
      button: 'from-cyan-600 to-blue-600',
    },
    {
      hero: 'from-slate-900 via-purple-900 to-slate-900',
      accent: 'from-purple-500 to-indigo-600',
      card: 'from-purple-50 to-indigo-50',
      border: 'border-purple-200',
      text: 'text-purple-600',
      button: 'from-purple-600 to-indigo-600',
    },
  ];
  
  const colors = colorSchemes[serviceIndex % 3];
  const iconColorClass = colors.accent;

  return (
    <>
      <StructuredData
        type="Service"
        serviceData={{
          name: service.title,
          description: service.description,
          url: `/services/${service.id}`,
        }}
      />
      <StructuredData
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${service.id}` },
        ]}
      />
      {/* Hero Section */}
      <Section className="relative text-white py-24 lg:py-32 overflow-hidden flex items-center">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl lg:text-2xl text-slate-200 max-w-4xl mx-auto leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="/contact" variant="primary" size="lg" className="!bg-green-600 hover:!bg-green-700 !text-white shadow-xl">
                Schedule Consultation
              </Button>
              <Link
                href="/services"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold !bg-purple-50 !text-purple-900 border-2 border-purple-200 rounded-lg hover:!bg-purple-100 transition-colors backdrop-blur-sm shadow-lg"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Overview Section */}
      <Section className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="inline-block mb-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${colors.card} ${colors.text}`}>
                  Service Overview
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Comprehensive {service.title} Solutions
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                {content.overview}
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                {content.detailedDescription}
              </p>
            </div>
            <div className={`bg-gradient-to-br ${colors.card} rounded-2xl p-8 lg:p-10 border-2 ${colors.border} shadow-lg`}>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Key Highlights</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${iconColorClass} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Expert Team</h4>
                    <p className="text-slate-600 text-sm">Certified professionals with years of industry experience</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${iconColorClass} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Proven Results</h4>
                    <p className="text-slate-600 text-sm">Track record of successful implementations across industries</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${iconColorClass} flex items-center justify-center mr-4 flex-shrink-0`}>
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Scalable Solutions</h4>
                    <p className="text-slate-600 text-sm">Solutions that grow and adapt with your business needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Features & Benefits Section */}
      <Section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              What We Offer
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to drive your business forward
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className={`border-2 ${colors.border} hover:shadow-xl transition-all bg-gradient-to-br ${colors.card}`}>
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconColorClass} flex items-center justify-center mr-4 shadow-lg`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Core Features</h3>
              </div>
              <ul className="space-y-4">
                {content.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className={`w-6 h-6 ${colors.text} mr-3 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 leading-relaxed text-lg">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className={`border-2 ${colors.border} hover:shadow-xl transition-all bg-gradient-to-br ${colors.card}`}>
              <div className="flex items-center mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${iconColorClass} flex items-center justify-center mr-4 shadow-lg`}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-slate-900">Key Benefits</h3>
              </div>
              <ul className="space-y-4">
                {content.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <svg className={`w-6 h-6 ${colors.text} mr-3 mt-0.5 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-700 leading-relaxed text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section background="gray" className="py-20 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              A structured approach to delivering exceptional results
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {content.processSteps.map((step, index) => (
              <Card key={index} className={`border-2 ${colors.border} hover:shadow-xl transition-all bg-white text-center`}>
                <div className={`inline-block text-5xl font-bold ${colors.text} mb-4 opacity-20`}>
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Use Cases & Technologies Section */}
      <Section className="py-20 lg:py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${iconColorClass} flex items-center justify-center mr-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Use Cases</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Our {service.title.toLowerCase()} solutions are designed to address a wide range of business scenarios and requirements.
              </p>
              <ul className="space-y-3">
                {content.useCases.map((useCase, index) => (
                  <li key={index} className="flex items-start">
                    <svg className={`w-5 h-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-slate-700">{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${iconColorClass} flex items-center justify-center mr-4`}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Technologies</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                We leverage industry-leading technologies and best practices to deliver cutting-edge solutions.
              </p>
              <ul className="space-y-3">
                {content.technologies.map((tech, index) => (
                  <li key={index} className="flex items-start">
                    <svg className={`w-5 h-5 ${colors.text} mr-3 mt-1 flex-shrink-0`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span className="text-slate-700">{tech}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section background="gray" className="py-20 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600">
              Get answers to common questions about our {service.title.toLowerCase()} services
            </p>
          </div>
          <div className="space-y-6">
            {content.faqs.map((faq, index) => (
              <Card key={index} className={`border-2 ${colors.border} bg-white`}>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{faq.question}</h3>
                <p className="text-slate-700 leading-relaxed">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Approach Section */}
      <Section className="py-20 lg:py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className={`border-2 ${colors.border} bg-gradient-to-br ${colors.card}`}>
            <div className="text-center mb-8">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${iconColorClass} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Our Approach</h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                Our team combines technical excellence with business acumen to deliver solutions
                that not only work but drive real business results. We stay current with the latest
                technologies and best practices, ensuring that your business benefits from
                industry-leading solutions.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                We partner with you throughout the entire journey, from initial consultation to
                implementation and beyond. Our collaborative approach ensures that you&apos;re always
                informed and involved in the decision-making process, resulting in solutions that
                truly meet your needs.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="py-20 lg:py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
            Let&apos;s discuss how our {service.title.toLowerCase()} solutions can help your business achieve its goals. 
            Our team is ready to answer your questions and provide a customized solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/contact" variant="primary" size="lg" className="!bg-green-600 hover:!bg-green-700 !text-white shadow-xl px-10 py-5 text-lg">
              Schedule a Consultation
            </Button>
            <Link
              href="/services"
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white border-2 border-white/30 rounded-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Explore All Services
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
