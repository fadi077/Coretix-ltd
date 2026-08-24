import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteHeader } from "../../interactions";
import { ResponsiveImage } from "../../media";
import { SiteFooter } from "../../site-footer";
import { getInsight, insights } from "../insight-data";
import {
  absoluteUrl,
  createPageMetadata,
  serializeJsonLd,
  SITE_URL,
} from "../../seo";

export function generateStaticParams() {
  return insights.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: PageProps<"/insights/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) return {};
  return createPageMetadata({
    title: insight.seoTitle,
    description: insight.description,
    path: `/insights/${insight.slug}`,
    type: "article",
    image: insight.image,
    imageAlt: insight.alt,
  });
}

export default async function InsightPage({
  params,
}: PageProps<"/insights/[slug]">) {
  const { slug } = await params;
  const insight = getInsight(slug);
  if (!insight) notFound();
  const related = insights.filter((item) => item.slug !== insight.slug);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${absoluteUrl(`/insights/${insight.slug}`)}#article`,
    headline: insight.title,
    description: insight.description,
    image: absoluteUrl(insight.image),
    inLanguage: "en-GB",
    articleSection: insight.category,
    author: { "@id": `${SITE_URL}/#organization` },
    publisher: { "@id": `${SITE_URL}/#organization` },
    mainEntityOfPage: absoluteUrl(`/insights/${insight.slug}`),
    about: { "@type": "Thing", name: insight.serviceLabel },
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
        name: "Insights",
        item: absoluteUrl("/insights"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: insight.title,
        item: absoluteUrl(`/insights/${insight.slug}`),
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
        <article>
          <header className="article-hero">
            <div className="container">
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/insights">Insights</Link>
                <span>/</span>
                <span aria-current="page">{insight.category}</span>
              </nav>
              <div className="article-hero-grid">
                <div>
                  <p className="eyebrow">{insight.category} · Guidance</p>
                  <h1>{insight.title}</h1>
                  <p className="lede">{insight.intro}</p>
                  <div className="article-meta">
                    <span>{insight.readingTime}</span>
                    <span>HP Techs guidance</span>
                  </div>
                </div>
                <ResponsiveImage
                  src={insight.image}
                  alt={insight.alt}
                  className="article-hero-photo"
                  sizes="(max-width: 900px) 100vw, 44vw"
                  priority
                />
              </div>
            </div>
          </header>
          <div className="article-body container">
            <aside>
              <p>In this guide</p>
              <nav aria-label="Article sections">
                {insight.sections.map((section, index) => (
                  <a href={`#section-${index + 1}`} key={section.heading}>
                    {section.heading}
                  </a>
                ))}
              </nav>
              <Link href={`/services/${insight.serviceSlug}`}>
                Explore {insight.serviceLabel}{" "}
                <span aria-hidden="true">↗</span>
              </Link>
            </aside>
            <div className="article-content">
              <p className="article-opening">{insight.intro}</p>
              {insight.sections.map((section, index) => (
                <section id={`section-${index + 1}`} key={section.heading}>
                  <p className="article-section-label">Guidance</p>
                  <h2>{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.points && (
                    <ul>
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
              <section className="article-takeaways">
                <p className="eyebrow">Key takeaways</p>
                <h2>A practical checklist to carry forward.</h2>
                <ul>
                  {insight.takeaways.map((takeaway) => (
                    <li key={takeaway}>
                      <i aria-hidden="true" />
                      {takeaway}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="article-disclaimer">
                <h2>About this guidance</h2>
                <p>
                  This article provides general operational guidance and does
                  not replace an assessment of your organisation, systems, legal
                  obligations or risk. Scope and recommendations should be
                  confirmed for your environment.
                </p>
              </section>
            </div>
          </div>
        </article>
        <section className="related-insights">
          <div className="container">
            <p className="eyebrow">Continue reading</p>
            <div className="related-insight-grid">
              {related.map((item) => (
                <Link href={`/insights/${item.slug}`} key={item.slug}>
                  <small>{item.category}</small>
                  <span>{item.title}</span>
                  <i aria-hidden="true">↗</i>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow green">Apply the guidance</p>
              <h2>Discuss what this means for your organisation.</h2>
            </div>
            <div>
              <p>
                We can help you turn the decision into a structured, practical
                next step.
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
          __html: serializeJsonLd([articleSchema, breadcrumbSchema]),
        }}
      />
    </>
  );
}
