import { SkillCategory, Project, WorkflowCard, GithubN8nProject, CoreSkillBar, AboutFeature } from '../types';
import fourteenStarImg from '../../assets/f-HJpC8hxf.png';
import laforgeImg from '../../assets/l-BnJuUl_7.png';

export const HERO_DATA = {
  person: "Hamza Qadeer — Full Stack & WordPress Developer",
  name: "Hamza Qadeer",
  headlinePrefix: "Hi, I'm ",
  subtext: "I build fast, secure, and conversion-focused websites with a premium visual layer, from custom WordPress systems to motion-led interfaces and interactive 3D storytelling.",
  badge: "Full Stack, WordPress & 3D Experiences",
  stats: [
    { value: "50+", label: "Projects Completed", tag: "[PRJ-50]" },
    { value: "3+", label: "Years Experience", tag: "[EXP-03]" },
    { value: "100%", label: "Client Satisfaction", tag: "[SAT-100]" },
  ]
};

export const ABOUT_DATA = {
  sectionTitle: "About Me",
  tag: "[ SYSTEM_PROFILE ]",
  bio: "I am a dedicated Full Stack & WordPress Developer with hands-on experience in building custom websites from scratch using HTML, CSS, JavaScript, PHP, and MySQL. I focus on performance, security, clean code, and scalable architecture to help businesses grow online.",
  coreSkillBars: [
    { name: "WordPress Development", percentage: 85 },
    { name: "JavaScript", percentage: 90 },
    { name: "PHP & MySQL", percentage: 95 }
  ] as CoreSkillBar[],
  features: [
    {
      title: "Quality-Focused Development",
      description: "Clean code practices, modular file architecture, and strict security compliance for long-term maintainability.",
      iconName: "ShieldCheck",
      codeTag: "[QUAL-01]"
    },
    {
      title: "Client-Centric Approach",
      description: "Tailored digital solutions aligned with core business metrics, conversion funnels, and real user needs.",
      iconName: "Users",
      codeTag: "[CLT-02]"
    },
    {
      title: "On-Time Delivery",
      description: "Agile execution milestones and direct communication ensuring on-schedule deployment every single time.",
      iconName: "Clock",
      codeTag: "[TIME-03]"
    },
    {
      title: "Results-Driven Solutions",
      description: "Optimized user flows and lightning-fast loading speeds engineered to maximize engagement and growth.",
      iconName: "TrendingUp",
      codeTag: "[RES-04]"
    }
  ] as AboutFeature[]
};

export const SKILLS_CATEGORIES: SkillCategory[] = [
  {
    title: "WordPress Development",
    iconName: "Layout",
    items: ["Custom Themes", "Plugin Customization", "WooCommerce", "Speed Optimization", "Security Hardening"]
  },
  {
    title: "Frontend Development",
    iconName: "Code2",
    items: ["HTML5", "CSS3", "JavaScript", "Responsive Design"]
  },
  {
    title: "Backend Development",
    iconName: "Database",
    items: ["PHP", "MySQL", "Custom Admin Panels"]
  },
  {
    title: "APIs & Authentication",
    iconName: "Lock",
    items: ["REST APIs", "Secure Login Systems"]
  },
  {
    title: "Deployment & Tools",
    iconName: "Server",
    items: ["GitHub", "cPanel", "VPS", "XAMPP"]
  },
  {
    title: "System Basics",
    iconName: "Settings",
    items: ["Hosting Setup", "Database Management", "Website Optimization"]
  },
  {
    title: "Automation & N8n",
    iconName: "Workflow",
    items: ["N8n Workflows", "Webhook Triggers", "API Automation", "WhatsApp Bot", "Google Sheets", "Zapier Alternative"]
  }
];

export const TECH_PILLS = [
  "HTML", "CSS", "JavaScript", "PHP", "MySQL", "WordPress", "WooCommerce", "Git", "REST API", "Docker", "N8n", "Automation"
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "fourteenstartravels",
    title: "Fourteenstartravels",
    subtitle: "E-Commerce & Travel Booking Platform",
    description: "A feature-rich e-commerce platform with product management, secure checkout, and optimized user experience.",
    image: fourteenStarImg,
    tags: [
      { name: "WordPress", variant: "default-green" },
      { name: "WooCommerce", variant: "planning" },
      { name: "PHP", variant: "review" },
      { name: "MySQL", variant: "progress" },
      { name: "JavaScript", variant: "default-green" }
    ],
    liveUrl: "https://fourteenstartravels.ae/",
    keyFeatures: [
      "WooCommerce storefront customized for travel packages & bookings",
      "Integrated payment gateways with end-to-end SSL security",
      "Mobile-first responsive UX with custom filtering system",
      "Automated booking confirmation & email notification pipeline"
    ]
  },
  {
    id: "la-forge",
    title: "LA Forge",
    subtitle: "Custom WordPress Business Website",
    description: "A professional WordPress-based business website with custom UI, optimized performance, and responsive design.",
    image: laforgeImg,
    tags: [
      { name: "WordPress", variant: "default-green" },
      { name: "HTML", variant: "progress" },
      { name: "CSS", variant: "review" },
      { name: "JavaScript", variant: "planning" },
      { name: "PHP", variant: "default-green" },
      { name: "MySQL", variant: "progress" }
    ],
    liveUrl: "https://laforge.com.pk/",
    keyFeatures: [
      "Custom responsive theme tailored for business brand identity",
      "Sub-second page loading speed with optimized asset pipelines",
      "Secure lead capture forms and admin dashboard customization",
      "SEO-ready technical structure and Schema markup"
    ]
  }
];

export const AUTOMATION_DATA = {
  sectionTitle: "Automate Your Business with N8n Workflows",
  subtitle: "Connect WordPress, WooCommerce, and 1000+ apps with powerful N8n workflows. No coding required. Save time and reduce manual work.",
  threeStepProcess: [
    {
      step: "01",
      title: "Trigger",
      description: "Form submit, webhook, ya schedule",
      badgeVariant: "progress" as const,
      detail: "Captures events instantly from webhooks, WordPress forms, scheduled cron jobs, or API events."
    },
    {
      step: "02",
      title: "Process",
      description: "Data filter, transform aur logic",
      badgeVariant: "review" as const,
      detail: "Cleanse, restructure, route through AI logic gates, or validate data payloads with zero latency."
    },
    {
      step: "03",
      title: "Action",
      description: "Email, WhatsApp, Sheet ya CRM",
      badgeVariant: "default-green" as const,
      detail: "Dispatches automated messages, updates databases, logs records in Google Sheets, or syncs CRM leads."
    }
  ],
  workflows: [
    {
      id: "wf-1",
      title: "WooCommerce Automation",
      description: "Auto-sync new orders to Google Sheets, notify admin on WhatsApp, and generate instant shipping labels.",
      badge: { name: "Active Pipeline", variant: "progress" },
      iconName: "ShoppingBag",
      integrations: ["WooCommerce", "WhatsApp", "Google Sheets"]
    },
    {
      id: "wf-2",
      title: "Lead Capture System",
      description: "Instantly capture contact form submissions, score leads, and route high-priority clients directly to sales.",
      badge: { name: "High ROI", variant: "default-green" },
      iconName: "Target",
      integrations: ["Elementor", "N8n", "CRM"]
    },
    {
      id: "wf-3",
      title: "WhatsApp Business Bot",
      description: "AI-assisted automated responses for order status checks, FAQs, and customer support ticket logging.",
      badge: { name: "24/7 Bot", variant: "planning" },
      iconName: "MessageSquare",
      integrations: ["WhatsApp API", "N8n", "OpenAI"]
    },
    {
      id: "wf-4",
      title: "Reporting & Analytics",
      description: "Scheduled daily performance metrics compiled from MySQL, WooCommerce, and Analytics sent via Email.",
      badge: { name: "Scheduled", variant: "review" },
      iconName: "BarChart3",
      integrations: ["MySQL", "Google Analytics", "SMTP"]
    },
    {
      id: "wf-5",
      title: "API Integration Engine",
      description: "Bridge legacy custom PHP backends with modern REST APIs and cloud services with retry handling.",
      badge: { name: "Custom API", variant: "default-green" },
      iconName: "Webhook",
      integrations: ["REST API", "JSON", "OAuth2"]
    },
    {
      id: "wf-6",
      title: "AI-Powered Workflows",
      description: "Leverage LLMs for auto-summarizing incoming support tickets, sentiment tagging, and post generation.",
      badge: { name: "AI Agent", variant: "planning" },
      iconName: "Sparkles",
      integrations: ["Gemini / OpenAI", "LinkedIn", "N8n"]
    }
  ] as WorkflowCard[],
  stats: [
    { label: "Workflows Deployed", value: "10+" },
    { label: "Platforms Integrated", value: "5+" },
    { label: "Automation Level", value: "100%" },
    { label: "Cost Advantage", value: "Free vs Zapier" }
  ],
  githubProjects: [
    {
      title: "AI-Powered LinkedIn Post Automation",
      url: "https://github.com/webd2276/AI-Powered-LinkedIn-Post-Automation",
      description: "Automated AI content pipeline using N8n and LLM APIs to generate and publish LinkedIn posts on a scheduled timer.",
      stars: "Open Source",
      language: "N8n / JSON"
    },
    {
      title: "Ai-Agent",
      url: "https://github.com/webd2276/Ai-Agent",
      description: "Autonomous AI agent workflow built with N8n for multi-step reasoning, Webhook routing, and external API invocation.",
      stars: "Open Source",
      language: "TypeScript / N8n"
    }
  ] as GithubN8nProject[]
};

export const CONTACT_DATA = {
  whatsapp: "+92 302 3487168",
  whatsappUrl: "https://wa.me/923023487168",
  email: "webd2276@gmail.com",
  phone: "+92 302 3487168",
  location: "Pakistan (GMT+5) / Global Remote"
};

export const SOCIAL_LINKS = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/hamza-qadeer-830671348",
    iconKey: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/webd2276",
    iconKey: "github"
  },
  {
    name: "Fiverr",
    url: "https://fiverr.com/webdeveloper534",
    iconKey: "fiverr"
  },
  {
    name: "Upwork",
    url: "https://www.upwork.com/freelancers/~01ed30bcd8b418a670?mp_source=share",
    iconKey: "upwork"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/webd2276",
    iconKey: "instagram"
  }
];
