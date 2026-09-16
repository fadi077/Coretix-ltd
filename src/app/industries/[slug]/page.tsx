import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../interactions";
import { ResponsiveImage } from "../../media";
import { SiteFooter } from "../../site-footer";
import { getIndustry, industries } from "../industry-data";
import {
  absoluteUrl,
  createPageMetadata,
  serializeJsonLd,
} from "../../seo";

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/industries/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustry(slug);
  return industry
    ? createPageMetadata({
        title: `IT Support for ${industry.name} | Coretix Ltd`,
        description: industry.intro,
        path: `/industries/${industry.slug}`,
        image: industry.image,
        imageAlt: industry.alt,
      })
    : {};
}

export default async function IndustryPage({
  params,
}: PageProps<"/industries/[slug]">) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();
  const related = industries
    .filter((item) => item.slug !== industry.slug)
    .slice(0, 3);
  const pageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${absoluteUrl(`/industries/${industry.slug}`)}#webpage`,
    url: absoluteUrl(`/industries/${industry.slug}`),
    name: `IT Support for ${industry.name}`,
    description: industry.intro,
    inLanguage: "en-GB",
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: industry.services,
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
        name: "Industries",
        item: absoluteUrl("/industries"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: industry.name,
        item: absoluteUrl(`/industries/${industry.slug}`),
      },
    ],
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="industry-detail-hero">
          <div className="container industry-detail-grid">
            <div>
              <Link className="industry-back" href="/industries">
                ← All industries
              </Link>
              <p className="eyebrow">{industry.eyebrow}</p>
              <h1>{industry.headline}</h1>
              <p className="lede">{industry.intro}</p>
              <Link className="button primary" href="/contact#enquiry-form">
                Discuss your environment <span aria-hidden="true">↗</span>
              </Link>
            </div>
            <div className="industry-detail-media">
              <ResponsiveImage
                src={industry.image}
                alt={industry.alt}
                className="industry-detail-photo"
                sizes="(max-width: 900px) 100vw, 48vw"
                priority
              />
              <div className="media-caption">
                <i />
                {industry.shortName}
              </div>
            </div>
          </div>
        </section>
        <section className="industry-context section">
          <div className="container editorial-split">
            <div>
              <p className="eyebrow">The operating context</p>
              <h2>Technology has to support the work happening around it.</h2>
            </div>
            <div>
              {industry.context.map((copy) => (
                <p key={copy}>{copy}</p>
              ))}
            </div>
          </div>
        </section>
        <section className="industry-pressures section">
          <div className="container">
            <div className="split-heading">
              <div>
                <p className="eyebrow">Common pressures</p>
                <h2>
                  Where technology friction can become operational friction.
                </h2>
              </div>
              <p>
                Priorities vary by organisation. Discovery establishes what is
                actually affecting your environment.
              </p>
            </div>
            <div className="pressure-grid">
              {industry.pressures.map(({ title, copy }) => (
                <article key={title}>
                  <i aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="industry-services">
          <div className="container industry-services-grid">
            <div>
              <p className="eyebrow green">Relevant capability</p>
              <h2>Support and delivery shaped around your priorities.</h2>
              <p>The final scope is agreed after discovery and assessment.</p>
            </div>
            <ul>
              {industry.services.map((service) => (
                <li key={service}>
                  <i aria-hidden="true" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <section className="industry-outcomes section">
          <div className="container">
            <p className="eyebrow">What better can look like</p>
            <h2>Practical outcomes to work towards.</h2>
            <div className="outcome-cards">
              {industry.outcomes.map((outcome) => (
                <article key={outcome}>
                  <i aria-hidden="true" />
                  <h3>{outcome}</h3>
                </article>
              ))}
            </div>
            <p className="industry-disclaimer">
              Outcomes are illustrative, not guaranteed performance claims.
              Measures and targets should be agreed for each engagement.
            </p>
          </div>
        </section>
        <section className="related-industries">
          <div className="container">
            <p className="eyebrow">Explore other environments</p>
            <div className="related-industry-grid">
              {related.map((item) => (
                <Link href={`/industries/${item.slug}`} key={item.slug}>
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
              <p className="eyebrow green">Start with your environment</p>
              <h2>
                Let’s identify the technology issue behind the operational
                pressure.
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
          __html: serializeJsonLd([pageSchema, breadcrumbSchema]),
        }}
      />
    </>
  );
}
