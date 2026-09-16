import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Faq, SiteHeader } from "../../interactions";
import { ServiceSystemVisual } from "../../media";
import { SiteFooter } from "../../site-footer";
import { getService, services } from "../service-data";
import {
  absoluteUrl,
  createPageMetadata,
  serializeJsonLd,
  SITE_URL,
} from "../../seo";
import { STRUCTURED_SERVICE_AREAS } from "../../coverage";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createPageMetadata({
    title: service.seoTitle,
    description: service.seoDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  const index = services.findIndex((item) => item.slug === service.slug);
  const related = services
    .filter((item) => item.slug !== service.slug)
    .slice(index % 3, (index % 3) + 3);
  const faqItems = service.faqs.map(({ question, answer }) => [
    question,
    answer,
  ]);
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(`/services/${service.slug}`)}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.seoDescription,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: STRUCTURED_SERVICE_AREAS,
    audience: {
      "@type": "BusinessAudience",
      audienceType: "Growing UK organisations",
    },
    serviceOutput: service.deliverables,
    url: absoluteUrl(`/services/${service.slug}`),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: absoluteUrl("/services"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: absoluteUrl(`/services/${service.slug}`),
      },
    ],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <section className={`service-detail-hero service-theme-${index + 1}`}>
          <div className="container service-detail-grid">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/services">Services</Link>
                <span>/</span>
                <span aria-current="page">{service.name}</span>
              </nav>
              <p className="eyebrow">{service.eyebrow}</p>
              <h1>{service.headline}</h1>
              <p className="lede">{service.intro}</p>
              <div className="actions">
                <Link className="button primary" href="/contact#enquiry-form">
                  Discuss this service <span aria-hidden="true">↗</span>
                </Link>
                <a className="button secondary" href="#capabilities">
                  See what is included
                </a>
              </div>
            </div>
            <ServiceSystemVisual service={service} type={index + 1} />
          </div>
        </section>
        <section className="service-problem section">
          <div className="container">
            <div className="split-heading">
              <div>
                <p className="eyebrow">Where the pressure appears</p>
                <h2>Technology problems rarely stay technical for long.</h2>
              </div>
              <p>
                The right response starts by understanding the operational
                effect, not simply treating the visible symptom.
              </p>
            </div>
            <div className="service-problem-grid">
              {service.problems.map((problem) => (
                <article key={problem.title}>
                  <i aria-hidden="true" />
                  <h3>{problem.title}</h3>
                  <p>{problem.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="service-capabilities section" id="capabilities">
          <div className="container">
            <div className="service-capability-heading">
              <p className="eyebrow">How Coretix Ltd can help</p>
              <h2>Focused capability, connected to a clear outcome.</h2>
            </div>
            <div className="service-capability-grid">
              {service.capabilities.map((capability, capIndex) => (
                <article key={capability.title}>
                  <span aria-hidden="true">
                    {String(capIndex + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3>{capability.title}</h3>
                    <p>{capability.copy}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="service-toolkit section" id="tools-and-platforms">
          <div className="container">
            <div className="split-heading service-toolkit-heading">
              <div>
                <p className="eyebrow">Tools and platforms</p>
                <h2>The working technology behind this service.</h2>
              </div>
              <p>
                We select and configure technology around the existing estate,
                support need and agreed operating model, not around a generic
                product list.
              </p>
            </div>
            <div className="service-tool-grid">
              {service.toolGroups.map((group, groupIndex) => (
                <article className="tool-group" key={group.title}>
                  <span className="tool-group-number" aria-hidden="true">
                    {String(groupIndex + 1).padStart(2, "0")}
                  </span>
                  <h3>{group.title}</h3>
                  <p>{group.copy}</p>
                  <ul aria-label={`Example tools for ${group.title}`}>
                    {group.tools.map((tool) => (
                      <li key={tool}>{tool}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p className="service-tool-note">
              Named technologies are examples of the environments and
              capabilities relevant to this service. Final selection depends on
              licensing, compatibility, security and integration requirements;
              references do not imply vendor partnership or certification.
            </p>
          </div>
        </section>
        <section className="service-frameworks section">
          <div className="container service-framework-shell">
            <div className="service-framework-intro">
              <p className="eyebrow green">Framework-informed delivery</p>
              <h2>
                Structured enough to be dependable. Practical enough to use.
              </h2>
              <p>
                Recognised guidance gives the work a stronger baseline, while
                discovery determines what is proportionate for your
                organisation.
              </p>
            </div>
            <div className="service-framework-grid">
              {service.frameworks.map((framework, frameworkIndex) => (
                <article
                  className="service-framework-card"
                  key={framework.name}
                >
                  <span aria-hidden="true">
                    F{String(frameworkIndex + 1).padStart(2, "0")}
                  </span>
                  <h3>{framework.name}</h3>
                  <p>{framework.copy}</p>
                </article>
              ))}
            </div>
            <p className="framework-qualification">
              Framework references explain the principles that can inform an
              engagement; they are not a claim of accreditation, audit or
              guaranteed compliance.
            </p>
          </div>
        </section>
        <section className="service-delivery-path section">
          <div className="container">
            <div className="service-path-heading">
              <div>
                <p className="eyebrow">From discovery to control</p>
                <h2>A delivery route with visible decisions at every stage.</h2>
              </div>
              <p>
                The exact plan changes with scope, but each engagement should
                move from evidence to action and finish with clear ownership.
              </p>
            </div>
            <ol className="delivery-stage-grid">
              {service.deliveryStages.map((stage, stageIndex) => (
                <li className="delivery-stage" key={stage.title}>
                  <span aria-hidden="true">
                    {String(stageIndex + 1).padStart(2, "0")}
                  </span>
                  <h3>{stage.title}</h3>
                  <p>{stage.copy}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="service-delivery">
          <div className="container service-delivery-grid">
            <div>
              <p className="eyebrow green">A practical scope</p>
              <h2>What an engagement may include.</h2>
              <p>
                Every item is subject to discovery, access, technical assessment
                and an agreed statement of work.
              </p>
            </div>
            <ul>
              {service.deliverables.map((item) => (
                <li key={item}>
                  <i aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="service-outcomes section">
          <div className="container">
            <p className="eyebrow">The direction of travel</p>
            <h2>Outcomes worth designing the service around.</h2>
            <div className="service-outcome-grid">
              {service.outcomes.map((outcome) => (
                <article key={outcome}>
                  <i aria-hidden="true" />
                  <h3>{outcome}</h3>
                </article>
              ))}
            </div>
            <p className="service-qualification">
              Illustrative outcomes are not guarantees. Measures,
              responsibilities and success criteria should be agreed for each
              engagement.
            </p>
          </div>
        </section>
        <section className="service-faq section">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">Questions about {service.shortName}</p>
              <h2>Useful detail before the first conversation.</h2>
              <p>
                Final scope, availability and commercial terms are confirmed
                through consultation.
              </p>
            </div>
            <Faq items={faqItems} />
          </div>
        </section>
        <section className="related-services">
          <div className="container">
            <p className="eyebrow">Connected services</p>
            <div className="related-service-grid">
              {related.map((item) => (
                <Link href={`/services/${item.slug}`} key={item.slug}>
                  <span>{item.name}</span>
                  <i aria-hidden="true">↗</i>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow green">Start with the operational need</p>
              <h2>
                Let’s turn the technology pressure into a practical next step.
              </h2>
            </div>
            <div>
              <p>
                Share what is happening, who it affects and what needs to
                improve.
              </p>
              <div className="actions">
                <Link className="button light" href="/contact#enquiry-form">
                  Start a conversation <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd([serviceSchema, breadcrumbSchema, faqSchema]),
        }}
      />
    </>
  );
}
