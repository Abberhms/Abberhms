export const siteConfig = {
  name: "Sulaiman Abba Muhammad",
  shortName: "Sulaiman",
  title: "Software Engineer | Frontend (Web & Mobile) Developer",
  role: "Software Engineer",
  specialization: "Frontend Web & Mobile Development",
  location: "Kano, Nigeria",
  email: "abberhms@gmail.com",
  phone: "+2348063502122",
  github: "https://github.com/abberhms",
  linkedin: "https://www.linkedin.com/in/sulaiman-muhammad-991473244",
  url: "https://sulaiman-muhammad.dev", // Production domain configuration point

  intro:
    "I build responsive, scalable web and mobile applications with modern technologies, focusing on clean code, seamless user experiences, and practical solutions.",

  aboutSummary:
    "Software Engineer specializing in frontend development, with experience building responsive, user-focused web and mobile applications. Skilled in React.js, Next.js, React Native, TypeScript, and JavaScript (ES6+), with experience integrating REST APIs, implementing secure authentication, managing application state, and optimizing performance.",

  quickFacts: [
    { label: "Role", value: "Software Engineer" },
    { label: "Focus", value: "Frontend Web & Mobile" },
    { label: "Stack", value: "React / Next.js / React Native" },
    { label: "Location", value: "Kano, Nigeria" },
  ],

  images: {
    profile: "/images/profile.jpeg",
    about: "/images/about.jpeg",
  },

  navLinks: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ],

  skillCategories: [
    {
      title: "FRONTEND",
      skills: [
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "JavaScript",
        "TypeScript",
        "React.js",
        "Next.js",
      ],
    },
    {
      title: "MOBILE",
      skills: ["React Native", "Expo"],
    },
    {
      title: "STATE & APIs",
      skills: [
        "Redux Toolkit",
        "RTK Query",
        "Context API",
        "RESTful APIs",
        "Axios",
        "Fetch",
        "JWT Authentication",
      ],
    },
    {
      title: "DATABASE",
      skills: ["PostgreSQL", "MySQL"],
    },
    {
      title: "TOOLS & TESTING",
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "Postman",
        "Swagger",
        "Jest",
        "React Testing Library",
      ],
    },
  ],

  experience: [
    {
      role: "Frontend (Web & Mobile) Developer",
      company: "Voost Technology Limited",
      period: "2024 – Present",
      isCurrent: true,
      points: [
        "Developed responsive web and mobile applications using React.js, Next.js, and React Native (Expo).",
        "Integrated RESTful APIs, JWT authentication, and state management using Redux Toolkit and RTK Query.",
        "Built reusable UI components and optimized application performance through clean, maintainable code.",
      ],
    },
    {
      role: "National Youth Service Corps (NYSC)",
      company: "Federal College of Education, Kano",
      period: "2024 – 2025",
      isCurrent: false,
      points: [
        "Supported ICT-related activities within the Department of General Studies.",
        "Assisted in digital documentation and data management processes.",
      ],
    },
    {
      role: "Welfare Director",
      company: "Nigeria Association of Computing Students (NACOS), BUK Chapter",
      period: "2020",
      isCurrent: false,
      points: [
        "Coordinated welfare activities and student community engagement initiatives.",
      ],
    },
  ],

  projects: [
    {
      id: "kanomart-mobile",
      title: "KanoMart Mobile",
      tech: ["React Native", "Expo", "Redux Toolkit", "RTK Query"],
      description:
        "Cross-platform e-commerce mobile application built with React Native and Expo.",
      highlights: [
        "Authentication",
        "RESTful API integration",
        "Redux Toolkit / RTK Query state management",
        "Reusable responsive mobile UI",
      ],
      github: "https://github.com/abberhms",
      category: "Mobile App",
    },
    {
      id: "cashapp-web",
      title: "CashApp Web",
      tech: ["React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"],
      description:
        "Responsive fintech web application built with React.js and TypeScript.",
      highlights: [
        "RESTful API integration",
        "JWT authentication",
        "Redux Toolkit state management",
        "Reusable UI components",
      ],
      github: "https://github.com/abberhms",
      category: "Web Application",
    },
    {
      id: "focus-legal-consult",
      title: "Focus Legal Consult",
      tech: ["Next.js", "TypeScript", "Tailwind CSS"],
      description:
        "Responsive corporate website developed for a legal consulting business.",
      highlights: [
        "Responsive interface",
        "Reusable components",
        "Performance optimization",
        "Production deployment",
      ],
      github: "https://github.com/abberhms",
      category: "Corporate Website",
    },
  ],

  education: [
    {
      degree: "Master of Software Engineering",
      institution: "Bayero University, Kano",
      period: "2024 – 2025",
      grade: "CGPA: 3.85",
    },
    {
      degree: "B.Sc. Software Engineering",
      institution: "Bayero University, Kano",
      period: "2017 – 2023",
      grade: "CGPA: 3.34",
    },
  ],

  trainings: [
    "Universal Service Provision Fund (USPF) Training (2024)",
    "Virtual Youth Leadership Programme Training (2021/2022)",
    "Data Processing & Graphics Design - Rapid.Net Computer Institute (2016)",
  ],

  memberships: ["Graduate Member - The Nigerian Society of Engineers (NSE)"],
};

export type SiteConfig = typeof siteConfig;
