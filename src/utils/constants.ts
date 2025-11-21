export const companyInfo = {
  name: "NCCGL",
  fullName: "NCCGL",
  domain: "nccgl.net",
  industry: "IT / Software",
  establishedYear: 1999,
  domainRegistered: "1999-09-27",
  primaryContact: "info@nccgl.net",
  description: "Leading software development and IT solutions provider delivering innovative technology services to businesses worldwide. We specialize in custom software development, cloud solutions, and digital transformation.",
};

export const services = [
  {
    id: "software-development",
    title: "Software Development",
    shortDescription: "Custom software solutions tailored to your business needs",
    description: "We develop robust, scalable software applications that drive business growth and operational efficiency.",
  },
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    shortDescription: "Comprehensive cloud infrastructure and migration services",
    description: "Transform your business with secure, scalable cloud solutions designed for modern enterprises.",
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    shortDescription: "Advanced security services to protect your digital assets",
    description: "Comprehensive cybersecurity solutions to safeguard your business from evolving threats.",
  },
  {
    id: "it-consulting",
    title: "IT Consulting",
    shortDescription: "Strategic technology consulting for business transformation",
    description: "Expert guidance to help you make informed technology decisions and achieve your business objectives.",
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    shortDescription: "Turn data into actionable business insights",
    description: "Leverage advanced analytics to unlock the value hidden in your business data.",
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    shortDescription: "Complete digital transformation strategies",
    description: "Comprehensive digital transformation services to modernize your business operations.",
  },
];

export const navigationLinks = [
  { href: "/", label: "Home" },
  { 
    href: "/about", 
    label: "About",
    hasDropdown: true,
    dropdownItems: [
      { href: "/about", label: "About Us" },
      { href: "/team", label: "Our Team" },
    ]
  },
  { 
    href: "/services", 
    label: "Services",
    hasDropdown: true,
    dropdownItems: services.map((service) => ({
      href: `/services/${service.id}`,
      label: service.title,
      description: service.shortDescription,
    }))
  },
  { 
    href: "/solutions", 
    label: "Solutions",
    hasDropdown: false
  },
  { 
    href: "/industries", 
    label: "Industries",
    hasDropdown: false
  },
  { 
    href: "/resources", 
    label: "Resources",
    hasDropdown: true,
    dropdownItems: [
      { href: "/blog", label: "Blog" },
      { href: "/case-studies", label: "Case Studies" },
      { href: "/testimonials", label: "Testimonials" },
      { href: "/faq", label: "FAQ" },
    ]
  },
  { href: "/contact", label: "Contact" },
];

export const industries = [
  "Healthcare",
  "Finance",
  "Manufacturing",
  "Retail",
  "Education",
  "Government",
  "Energy",
  "Transportation",
];

export const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/team", label: "Our Team" },
    { href: "/contact", label: "Contact" },
    { href: "/solutions", label: "Solutions" },
    { href: "/industries", label: "Industries" },
  ],
  services: services.map((service) => ({
    href: `/services/${service.id}`,
    label: service.title,
  })),
  resources: [
    { href: "/services", label: "All Services" },
    { href: "/blog", label: "Blog" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/testimonials", label: "Testimonials" },
    { href: "/faq", label: "FAQ" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

