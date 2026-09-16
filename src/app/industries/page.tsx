import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../interactions";
import { ResponsiveImage } from "../media";
import { SiteFooter } from "../site-footer";
import { industries } from "./industry-data";
import { absoluteUrl, createPageMetadata, serializeJsonLd } from "../seo";
export const metadata: Metadata = createPageMetadata({
  title: "IT Support by Industry for UK Organisations | Coretix Ltd",
  description:
    "Technology support for professional services, retail and multi-site operations, logistics, field teams and growing UK SMEs.",
  path: "/industries",
  image: "/images/industries/industry-office.webp",
  imageAlt: "A professional team working in a contemporary office",
});
export default function IndustriesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Coretix Ltd industry technology support",
    url: absoluteUrl("/industries"),
    itemListElement: industries.map((industry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: industry.name,
      url: absoluteUrl(`/industries/${industry.slug}`),
    })),
  };

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="industry-index-hero">
          <div className="container">
            <p className="eyebrow">Industries</p>
            <div className="industry-index-heading">
              <h1>
                Technology support shaped around{" "}
                <span>how your organisation works.</span>
              </h1>
              <p>
                Different environments create different operational pressures.
                Our approach starts with the people, locations and systems
                involved, then builds the right combination of support,
                infrastructure and change.
              </p>
            </div>
          </div>
        </section>
        <section className="industry-index section">
          <div className="container">
            <div className="industry-index-intro">
              <p className="eyebrow">Areas of focus</p>
              <h2>Practical capability, adapted to the environment.</h2>
              <p>
                These pages describe sectors Coretix Ltd is equipped to support.
                They do not represent confirmed customer relationships.
              </p>
            </div>
            <div className="industry-index-grid">
              {industries.map((industry) => (
                <Link
                  href={`/industries/${industry.slug}`}
                  className="industry-index-card"
                  key={industry.slug}
                >
                  <ResponsiveImage
                    src={industry.image}
                    alt={industry.alt}
                    className="industry-index-photo"
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                  <div>
                    <small>Industry focus</small>
                    <h2>{industry.name}</h2>
                    <p>{industry.intro}</p>
                    <span>
                      Explore this industry <i aria-hidden="true">↗</i>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
            <p className="industry-disclaimer">
              These pages describe Coretix Ltd&apos;s current capability. The
              right scope is confirmed after understanding your environment.
            </p>
          </div>
        </section>
        <section className="final-cta">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow green">Your environment may be different</p>
              <h2>Tell us how your organisation operates.</h2>
            </div>
            <div>
              <p>
                We can explore the users, locations and technology involved,
                even if your sector is not listed here.
              </p>
              <div className="actions">
                <Link className="button light" href="/contact#enquiry-form">
                  Discuss your requirements <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(schema) }}
      />
    </>
  );
}
