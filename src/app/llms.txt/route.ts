import { industries } from "../industries/industry-data";
import { insights } from "../insights/insight-data";
import { services } from "../services/service-data";
import { SITE_URL } from "../seo";
import { COVERAGE_SHORT } from "../coverage";

export const dynamic = "force-static";

export function GET() {
  const serviceLinks = services
    .map(
      (service) =>
        `- [${service.name}](${SITE_URL}/services/${service.slug}): ${service.seoDescription}`,
    )
    .join("\n");
  const industryLinks = industries
    .map(
      (industry) =>
        `- [${industry.name}](${SITE_URL}/industries/${industry.slug}): ${industry.intro}`,
    )
    .join("\n");
  const insightLinks = insights
    .map(
      (insight) =>
        `- [${insight.title}](${SITE_URL}/insights/${insight.slug}): ${insight.description}`,
    )
    .join("\n");

  const body = `# Coretix Ltd

> Coretix Ltd provides managed IT support, Microsoft 365, cybersecurity, business network, infrastructure, backup, recovery and practical on-site technology services for growing UK organisations.

Coretix Ltd focuses on clear communication, practical delivery, operational continuity and proportionate technology decisions. Service scope, availability, commercial terms and coverage are confirmed during consultation.

## Service coverage
${COVERAGE_SHORT}

## Core pages
- [Home](${SITE_URL}/)
- [About Coretix Ltd](${SITE_URL}/about)
- [All services](${SITE_URL}/services)
- [Industries](${SITE_URL}/industries)
- [Technology insights](${SITE_URL}/insights)
- [Contact](${SITE_URL}/contact)

## Services
${serviceLinks}

## Industries
${industryLinks}

## Practical guidance
${insightLinks}

## Verified experience context
- Personnel working with Coretix Ltd have delivered practical technology work within major organisational environments, including through third-party and subcontracted engagements.
- A documented Tesco Bank Newcastle deployment took place from May to June 2026: an 11-person setup team prepared 1,000 laptops with users present, followed by a 6-person team providing additional IT support.
- Named organisations indicate environments in which personnel performed work. They do not imply a direct client relationship, partnership or endorsement.

## Machine-readable resources
- [XML sitemap](${SITE_URL}/sitemap.xml)
- [Robots policy](${SITE_URL}/robots.txt)
- [Detailed AI reference](${SITE_URL}/llms-full.txt)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
