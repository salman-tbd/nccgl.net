import { Suspense } from "react";
import { generateSEOMetadata } from "@/components/common/SEO";
import BlogClient from "./BlogClient";

const POSTS_PER_PAGE = 6;

export const metadata = generateSEOMetadata({
  title: "Blog",
  description: "Read the latest insights, news, and updates from NCCGL Software Solutions on technology trends, software development, cloud computing, cybersecurity, and IT best practices.",
  keywords: ["IT blog", "technology insights", "software development blog", "cloud computing articles", "cybersecurity trends", "IT best practices", "tech news"],
  url: "/blog",
});

export const blogPosts = [
  {
    id: "cloud-computing-benefits",
    title: "The Benefits of Cloud Computing for Modern Businesses",
    excerpt: "Discover how cloud computing can transform your business operations and drive growth.",
    category: "Technology",
    author: "Rajesh Kumar",
    image: "/assets/images/happy-people-with-cloud-technology-icons (1).jpg",
  },
  {
    id: "cybersecurity-trends",
    title: "Top Cybersecurity Trends to Watch in 2024",
    excerpt: "Stay ahead of the curve with the latest cybersecurity trends and best practices.",
    category: "Security",
    author: "Priya Sharma",
    image: "/assets/images/businesspeople-are-their-business-trip (1).jpg",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation: A Strategic Guide",
    excerpt: "Learn how to successfully navigate your digital transformation journey.",
    category: "Strategy",
    author: "Amit Patel",
    image: "/assets/images/beautiful-cryptocurrwncy-concept (1).jpg",
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development Best Practices",
    excerpt: "Essential tips and strategies for building successful mobile applications.",
    category: "Development",
    author: "Sneha Reddy",
    image: "/assets/images/mobile.jpg",
  },
  {
    id: "data-analytics",
    title: "Leveraging Data Analytics for Business Success",
    excerpt: "How to turn your data into actionable insights that drive business growth.",
    category: "Analytics",
    author: "Vikram Singh",
    image: "/assets/images/business-person-looking-finance-graphs4.jpg",
  },
  {
    id: "api-development",
    title: "Modern API Development: Best Practices",
    excerpt: "Learn the best practices for building robust and scalable APIs.",
    category: "Development",
    author: "Anjali Mehta",
    image: "/assets/images/api.jpg",
  },
  {
    id: "enterprise-software-implementation",
    title: "Enterprise Software Implementation: Avoiding Common Pitfalls",
    excerpt: "Key strategies to ensure successful enterprise software deployments and minimize disruption to business operations.",
    category: "Strategy",
    author: "Rohan Desai",
    image: "/assets/images/business-person-futuristic-business-environment2.jpg",
  },
  {
    id: "ui-ux-design-principles",
    title: "UI/UX Design Principles for Enterprise Applications",
    excerpt: "Understanding how thoughtful design can improve user adoption rates and overall productivity in enterprise software solutions.",
    category: "Design",
    author: "Kavita Iyer",
    image: "/assets/images/representations-user-experience-interface-design (1).jpg",
  },
  {
    id: "network-security-best-practices",
    title: "Network Security Best Practices for Modern Organizations",
    excerpt: "Comprehensive guide to implementing robust network security measures that protect your organization from evolving cyber threats.",
    category: "Security",
    author: "Arjun Nair",
    image: "/assets/images/hacker-using-computer-target-vulnerable-unpatched-connections (1).jpg",
  },
  {
    id: "remote-work-technology-solutions",
    title: "Remote Work Technology Solutions: Building a Connected Workforce",
    excerpt: "Exploring the essential technologies and tools that enable seamless collaboration and productivity in distributed work environments.",
    category: "Technology",
    author: "Meera Joshi",
    image: "/assets/images/woman-scrolling-laptop (1).jpg",
  },
  {
    id: "software-testing-methodologies",
    title: "Software Testing Methodologies: Ensuring Quality at Scale",
    excerpt: "An in-depth look at modern testing approaches that help organizations deliver reliable software products faster.",
    category: "Development",
    author: "Suresh Menon",
    image: "/assets/images/modern-equipped-computer-lab2.jpg",
  },
  {
    id: "digital-strategy-execution",
    title: "Digital Strategy Execution: From Vision to Reality",
    excerpt: "Practical frameworks for translating digital transformation strategies into actionable initiatives that deliver measurable results.",
    category: "Strategy",
    author: "Divya Kapoor",
    image: "/assets/images/businessman-holding-digital-tablet-success-cityscape-generated-by-ai (1).jpg",
  },
  {
    id: "web-development-frameworks",
    title: "Choosing the Right Web Development Framework for Your Project",
    excerpt: "A comprehensive comparison of modern web development frameworks to help you make informed technology decisions.",
    category: "Development",
    author: "Nikhil Agarwal",
    image: "/assets/images/programming-background-with-html (1).jpg",
  },
  {
    id: "cloud-migration-strategy",
    title: "Cloud Migration Strategy: Planning for a Smooth Transition",
    excerpt: "Step-by-step approach to migrating your infrastructure to the cloud while minimizing risks and maximizing business value.",
    category: "Technology",
    author: "Pooja Verma",
    image: "/assets/images/christina-wocintechchat-com-FVgECvTjlBQ-unsplash (1).jpg",
  },
  {
    id: "devops-culture-transformation",
    title: "DevOps Culture Transformation: Breaking Down Silos",
    excerpt: "How organizations can foster collaboration between development and operations teams to accelerate software delivery cycles.",
    category: "Development",
    author: "Aditya Rao",
    image: "/assets/images/blake-connally-B3l0g6HLxr8-unsplash (1).jpg",
  },
  {
    id: "database-optimization-techniques",
    title: "Database Optimization Techniques for High-Performance Applications",
    excerpt: "Proven strategies for improving database performance, reducing query times, and ensuring scalability as your data grows.",
    category: "Technology",
    author: "Sunita Bhatt",
    image: "/assets/images/hand-touching-tablet (1).jpg",
  },
  {
    id: "agile-methodology-implementation",
    title: "Agile Methodology Implementation: A Practical Guide for Teams",
    excerpt: "Understanding how to successfully adopt agile practices that align with your organizational culture and project requirements.",
    category: "Strategy",
    author: "Manish Thakur",
    image: "/assets/images/rooq-boxing-nTU4Rph28hI-unsplash (2).jpg",
  },
  {
    id: "microservices-architecture-benefits",
    title: "Microservices Architecture: Benefits and Implementation Challenges",
    excerpt: "Exploring when microservices make sense for your organization and how to overcome common implementation obstacles.",
    category: "Development",
    author: "Radhika Srinivasan",
    image: "/assets/images/rohan-ZoXCoH7tja0-unsplash (1).jpg",
  },
  {
    id: "it-infrastructure-planning",
    title: "IT Infrastructure Planning: Building for Scalability and Reliability",
    excerpt: "Key considerations for designing IT infrastructure that can grow with your business while maintaining high availability.",
    category: "Technology",
    author: "Ravi Shankar",
    image: "/assets/images/christina-wocintechchat-com-FVgECvTjlBQ-unsplash (1).jpg",
  },
  {
    id: "customer-relationship-management-systems",
    title: "Customer Relationship Management Systems: Maximizing ROI",
    excerpt: "Best practices for selecting, implementing, and optimizing CRM systems to improve customer engagement and sales performance.",
    category: "Strategy",
    author: "Shalini Gupta",
    image: "/assets/images/human-resources-worker-conducting-job-interview-via-online-videocall (1).jpg",
  },
  {
    id: "blockchain-technology-applications",
    title: "Blockchain Technology Applications in Enterprise Solutions",
    excerpt: "Understanding how blockchain can enhance transparency, security, and efficiency in various business processes and transactions.",
    category: "Technology",
    author: "Karan Malhotra",
    image: "/assets/images/radowan-nakif-rehan-cYyqhdbJ9TI-unsplash (1).jpg",
  },
  {
    id: "artificial-intelligence-business-integration",
    title: "Artificial Intelligence: Integrating AI into Business Operations",
    excerpt: "Practical approaches to leveraging artificial intelligence to automate processes, enhance decision-making, and create competitive advantages.",
    category: "Technology",
    author: "Neha Kulkarni",
    image: "/assets/images/steve-johnson-ZPOoDQc8yMw-unsplash (1).jpg",
  },
  {
    id: "project-management-software-tools",
    title: "Project Management Software Tools: Selecting the Right Solution",
    excerpt: "Comprehensive evaluation framework for choosing project management tools that align with your team's workflow and objectives.",
    category: "Strategy",
    author: "Varun Chopra",
    image: "/assets/images/modern-equipped-computer-lab2.jpg",
  },
  {
    id: "data-backup-disaster-recovery",
    title: "Data Backup and Disaster Recovery: Protecting Your Business Assets",
    excerpt: "Essential strategies for implementing comprehensive backup and recovery solutions that ensure business continuity during disruptions.",
    category: "Security",
    author: "Deepika Nair",
    image: "/assets/images/vitaly-gariev-__gqnqaJI-g-unsplash (1).jpg",
  },
  {
    id: "software-maintenance-best-practices",
    title: "Software Maintenance Best Practices: Ensuring Long-Term Success",
    excerpt: "Key principles for maintaining software systems effectively, including code refactoring, performance monitoring, and technical debt management.",
    category: "Development",
    author: "Gaurav Shah",
    image: "/assets/images/zbra-marketing-h_kuT-rHBHs-unsplash (1).jpg",
  },
  {
    id: "e-commerce-platform-development",
    title: "E-Commerce Platform Development: Building for Scale",
    excerpt: "Critical considerations for developing e-commerce platforms that can handle high traffic volumes and provide exceptional user experiences.",
    category: "Development",
    author: "Isha Mehta",
    image: "/assets/images/growtika-8zB4P0eafrs-unsplash (1).jpg",
  },
  {
    id: "enterprise-integration-solutions",
    title: "Enterprise Integration Solutions: Connecting Your Systems",
    excerpt: "How to seamlessly integrate disparate systems and applications to create a unified technology ecosystem that improves operational efficiency.",
    category: "Technology",
    author: "Jatin Patel",
    image: "/assets/images/desola-lanre-ologun-BVr3XaBiWLU-unsplash (1).jpg",
  },
  {
    id: "software-licensing-compliance",
    title: "Software Licensing Compliance: Managing Costs and Risks",
    excerpt: "Guidance on maintaining software license compliance while optimizing costs and avoiding legal complications in enterprise environments.",
    category: "Strategy",
    author: "Lakshmi Venkatesh",
    image: "/assets/images/human-resources-worker-conducting-job-interview-via-online-videocall (1).jpg",
  },
];

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading blog posts...</p>
        </div>
      </div>
    }>
      <BlogClient blogPosts={blogPosts} postsPerPage={POSTS_PER_PAGE} />
    </Suspense>
  );
}
