import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../interactions";
import { ServiceVisual } from "../media";
import { SiteFooter } from "../site-footer";
import { services } from "./service-data";
import { absoluteUrl, createPageMetadata, serializeJsonLd } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "IT Services for Growing UK Businesses | Coretix Ltd",
  description:
    "UK business IT, Microsoft 365, cybersecurity, cloud, AI automation, web and mobile app development, networks, backup and software services.",
  path: "/services",
});

export default function ServicesPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Coretix Ltd technology services",
    url: absoluteUrl("/services"),
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.name,
      url: absoluteUrl(`/services/${service.slug}`),
    })),
  };
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="service-index-hero">
          <div className="container service-index-heading">
            <div>
              <p className="eyebrow">Technology services</p>
              <h1>
                Practical expertise for the systems your{" "}
                <span>business depends on.</span>
              </h1>
            </div>
            <div>
              <p>
                From managed IT support and Microsoft 365 to cybersecurity, AI
                automation, web development and mobile app development, Coretix
                Ltd brings the work into one clear, accountable technology plan
                for UK businesses.
              </p>
              <Link className="button primary" href="/contact#enquiry-form">
                Talk through your priorities <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="service-index section">
          <div className="container">
            <div className="service-index-intro">
              <p className="eyebrow">What we do</p>
              <h2>Choose the starting point that matches the pressure.</h2>
              <p>
                Services can stand alone or work together. The right combination
                is defined after understanding the environment, urgency and
                outcome.
              </p>
            </div>
            <div className="service-index-grid">
              {services.map((service, index) => (
                <Link
                  className={`service-index-card sic-${index + 1}`}
                  href={`/services/${service.slug}`}
                  key={service.slug}
                >
                  <ServiceVisual type={(index % 6) + 1} />
                  <small>{service.signal}</small>
                  <h2>{service.name}</h2>
                  <p>{service.intro}</p>
                  <span>
                    Explore service <i aria-hidden="true">↗</i>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="service-choice">
          <div className="container service-choice-grid">
            <div>
              <p className="eyebrow green">Not sure where the issue sits?</p>
              <h2>Start with what is happening, not the service label.</h2>
            </div>
            <div>
              <p>
                Describe the disruption, risk or change you are dealing with. We
                can help identify the most practical route forward.
              </p>
              <Link href="/contact#enquiry-form">
                Describe the problem <span aria-hidden="true">↗</span>
              </Link>
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
