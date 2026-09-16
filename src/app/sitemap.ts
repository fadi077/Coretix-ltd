import type { MetadataRoute } from "next";
import { industries } from "./industries/industry-data";
import { services } from "./services/service-data";
import { insights } from "./insights/insight-data";
import { absoluteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const staticRoutes = [
    {
      path: "",
      priority: 1,
      images: [
        "/images/homepage/hero-team.jpg",
        "/images/homepage/trust-workplace.webp",
      ],
    },
    { path: "/about", priority: 0.8, images: ["/images/about/about-team.png"] },
    {
      path: "/contact",
      priority: 0.8,
      images: ["/images/contact/contact-consultation.png"],
    },
    {
      path: "/industries",
      priority: 0.9,
      images: ["/images/industries/industry-office.webp"],
    },
    { path: "/services", priority: 0.9, images: [] },
    {
      path: "/insights",
      priority: 0.8,
      images: ["/images/insights/support-transition.jpg"],
    },
  ];
  return [
    ...staticRoutes.map(({ path, priority, images }) => ({
      url: absoluteUrl(path || "/"),
      lastModified,
      changeFrequency: "monthly" as const,
      priority,
      images: images.map(absoluteUrl),
    })),
    ...services.map((service) => ({
      url: absoluteUrl(`/services/${service.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...industries.map((industry) => ({
      url: absoluteUrl(`/industries/${industry.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [absoluteUrl(industry.image)],
    })),
    ...insights.map((insight) => ({
      url: absoluteUrl(`/insights/${insight.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
      images: [absoluteUrl(insight.image)],
    })),
  ];
}
