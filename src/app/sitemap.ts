import type { MetadataRoute } from "next";
import { industries } from "./industries/industry-data";
import { services } from "./services/service-data";
import { insights } from "./insights/insight-data";

export default function sitemap():MetadataRoute.Sitemap{
  const base=process.env.NEXT_PUBLIC_SITE_URL??"http://localhost:3000";
  const staticRoutes=["","/about","/contact","/industries","/services","/insights"];
  return [
    ...staticRoutes.map(path=>({url:`${base}${path}`,changeFrequency:"monthly" as const,priority:path===""?1:(path==="/services"||path==="/industries") ? .9:.7})),
    ...services.map(service=>({url:`${base}/services/${service.slug}`,changeFrequency:"monthly" as const,priority:.8})),
    ...industries.map(industry=>({url:`${base}/industries/${industry.slug}`,changeFrequency:"monthly" as const,priority:.7})),
    ...insights.map(insight=>({url:`${base}/insights/${insight.slug}`,changeFrequency:"monthly" as const,priority:.7})),
  ];
}
