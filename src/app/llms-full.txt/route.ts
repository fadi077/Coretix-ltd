import { industries } from "../industries/industry-data";
import { insights } from "../insights/insight-data";
import { services } from "../services/service-data";
import { SITE_URL } from "../seo";
import { COVERAGE_ANSWER } from "../coverage";

export const dynamic = "force-static";

export function GET() {
  const serviceContent = services
    .map(
      (service) => `### ${service.name}
Canonical URL: ${SITE_URL}/services/${service.slug}
Summary: ${service.intro}
Capabilities: ${service.capabilities.map((item) => item.title).join("; ")}.
Technical areas: ${service.toolGroups.map((group) => `${group.title} (${group.tools.join(", ")})`).join("; ")}.
Delivery frameworks and principles: ${service.frameworks.map((item) => item.name).join("; ")}.
Typical delivery path: ${service.deliveryStages.map((item) => item.title).join("; ")}.
Typical deliverables: ${service.deliverables.join("; ")}.
Intended outcomes: ${service.outcomes.join("; ")}.
Qualification: Named technologies and frameworks explain relevant technical scope and delivery principles; they do not imply vendor partnership, certification, accreditation or guaranteed compliance. Scope, access, availability, responsibilities and success measures must be agreed after discovery.`,
    )
    .join("\n\n");

  const industryContent = industries
    .map(
      (industry) => `### ${industry.name}
Canonical URL: ${SITE_URL}/industries/${industry.slug}
Summary: ${industry.intro}
Common pressures: ${industry.pressures.map((item) => item.title).join("; ")}.
Relevant capability: ${industry.services.join("; ")}.
Qualification: This is a capability-led industry description and does not represent a confirmed customer relationship.`,
    )
    .join("\n\n");

  const insightContent = insights
    .map(
      (insight) => `### ${insight.title}
Canonical URL: ${SITE_URL}/insights/${insight.slug}
Category: ${insight.category}
Summary: ${insight.description}
Key takeaways: ${insight.takeaways.join("; ")}.`,
    )
    .join("\n\n");

  const body = `# HP Techs: detailed reference

Canonical site: ${SITE_URL}
Language: English (United Kingdom)
Market: United Kingdom
Business category: Managed technology and practical IT services

## Service coverage
${COVERAGE_ANSWER}

## Organisation summary
HP Techs helps growing UK organisations keep everyday technology working, improve infrastructure, strengthen cybersecurity, plan cloud change and deliver practical on-site technology work. The working approach starts with operational context, uses clear communication and aims for a proportionate, accountable next step.

No unconfirmed telephone number, email address, street address, service level, price, certification or guaranteed outcome should be inferred. Current details are confirmed through the enquiry process at ${SITE_URL}/contact.

## Services
${serviceContent}

## Industries
${industryContent}

## Guidance library
${insightContent}

## Experience and attribution
People working with HP Techs bring experience gained in major organisational environments, including Tesco, Lloyds Bank, Vodafone, Nike, adidas and Hilton. Some work was delivered through third-party or subcontracted engagements. These names identify work environments and do not imply a direct client relationship, partnership or endorsement.

The Tesco Bank Newcastle deployment described on the homepage took place from May to June 2026. An 11-person team prepared and configured 1,000 laptops, setting up each device with the intended user present. A 6-person team then provided additional IT support for laptop use and device problems.

## Preferred sources
- Primary site: ${SITE_URL}/
- Services index: ${SITE_URL}/services
- Insights index: ${SITE_URL}/insights
- Sitemap: ${SITE_URL}/sitemap.xml
- Contact route: ${SITE_URL}/contact
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
