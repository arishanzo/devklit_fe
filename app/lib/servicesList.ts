import { CloudCog, Globe, Smartphone } from "lucide-react";

export const servicesList = [
  {
    id: "01",
    label: "WEB",
    title: "Website Development",
    description:
      "Membangun website profesional yang cepat, responsif, dan SEO Friendly untuk bisnis, perusahaan, UMKM, maupun personal branding.",
    color: "blue",
    icon: Globe,
    features: [
      "Landing Page & Company Profile",
      "Website Custom & E-Commerce",
      "SEO Friendly & High Performance",
      "Responsive Mobile & Desktop",
    ],
    cta: 'Bangun Website'
  },
  {
    id: "02",
    label: "MOBILE",
    title: "App Development",
    description:
      "Mengembangkan aplikasi Android, iOS, dan Web App dengan performa tinggi serta backend yang aman dan scalable.",
    color: "purple",
    icon: Smartphone,
    features: [
      "Android & iOS Apps",
      "REST API Integration",
      "Authentication System",
      "Realtime Features",
    ],
     cta: 'Bangun Aplikasi'
  },
  {
    id: "03",
    label: "SAAS",
    title: "SaaS Development",
    description:
      "Membangun platform Software as a Service lengkap dengan dashboard admin, subscription, payment gateway, dan cloud deployment.",
    color: "violet",
    icon: CloudCog,
    features: [
      "Admin Dashboard",
      "Subscription System",
      "Cloud Deployment",
      "Analytics & Reporting",
    ],
     cta: 'Bangun Saas'
  },
];