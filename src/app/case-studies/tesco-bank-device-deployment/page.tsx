import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../../interactions";
import { ResponsiveImage } from "../../media";
import { SiteFooter } from "../../site-footer";
import {
  absoluteUrl,
  createPageMetadata,
  serializeJsonLd,
  SITE_URL,
} from "../../seo";

const caseStudyPath = "/case-studies/tesco-bank-device-deployment";

export const metadata: Metadata = createPageMetadata({
  title: "Tesco Bank Device Deployment Case Study | Coretix Ltd",
  description:
    "A Coretix Ltd deployment case study covering laptop preparation, user setup and follow-on IT support in a live workplace environment.",
  path: caseStudyPath,
  image: "/images/case-studies/case-operation.webp",
  imageAlt: "Technology deployment colleagues preparing laptops together",
});

const caseStudySchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "@id": `${absoluteUrl(caseStudyPath)}#article`,
  headline: "Supporting a 1,000-device laptop deployment for people at work",
  description:
    "A Coretix Ltd deployment case study covering laptop preparation, user setup and follow-on IT support in a live workplace environment.",
  image: absoluteUrl("/images/case-studies/case-operation.webp"),
  mainEntityOfPage: absoluteUrl(caseStudyPath),
  author: { "@id": `${SITE_URL}/#organization` },
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
};

const Arrow = () => <span aria-hidden="true">↗</span>;

export default function TescoBankDeploymentCaseStudy() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="case-study-hero">
          <div className="container case-study-hero-grid">
            <div>
              <nav className="breadcrumb" aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/about">About</Link>
                <span>/</span>
                <span aria-current="page">Case study</span>
              </nav>
              <p className="eyebrow">Deployment experience</p>
              <p className="case-sector">Tesco Bank · Newcastle</p>
              <h1>Supporting a 1,000-device laptop deployment for people at work.</h1>
              <p className="lede">
                A practical workplace technology deployment focused on device
                readiness, user confidence and continuity after handover.
              </p>
            </div>
            <ResponsiveImage
              src="/images/case-studies/case-operation.webp"
              alt="Technology deployment colleagues preparing laptops together"
              className="case-study-photo"
              sizes="(max-width: 900px) 100vw, 46vw"
              priority
            />
          </div>
        </section>
        <section className="case-study-summary section">
          <div className="container case-study-summary-grid">
            <div>
              <p className="eyebrow">The engagement</p>
              <h2>Organised delivery in a live working environment.</h2>
              <p>
                From May to June 2026, an 11-person team prepared and configured
                1,000 laptops at the Tesco Bank Newcastle branch. Each device
                was set up with its intended user present, helping confirm
                access and readiness before it entered day-to-day use.
              </p>
            </div>
            <div className="case-study-metrics">
              <div>
                <strong>1,000</strong>
                <span>Laptops prepared</span>
              </div>
              <div>
                <strong>11</strong>
                <span>People in the setup team</span>
              </div>
              <div>
                <strong>6</strong>
                <span>People providing follow-on support</span>
              </div>
            </div>
          </div>
        </section>
        <section className="case-study-detail section">
          <div className="container case-study-detail-grid">
            <div>
              <p className="eyebrow">Delivery approach</p>
              <h2>Support that continues after the rollout.</h2>
            </div>
            <div>
              <p>
                After the laptop setup phase, a 6-person team provided
                additional IT support. They helped users work with their
                laptops and resolve device problems as the new equipment moved
                into everyday use.
              </p>
              <p>
                The engagement reflects the way Coretix Ltd approaches
                technology delivery: understand the operational context, keep
                ownership clear and support people through the change.
              </p>
              <Link className="button primary" href="/contact#enquiry-form">
                Discuss your technology requirements <Arrow />
              </Link>
            </div>
          </div>
        </section>
        <section className="case-study-disclaimer">
          <div className="container">
            <p>
              Tesco Bank is named as the environment in which personnel
              performed work. This case study does not imply a direct client
              relationship, partnership or endorsement.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(caseStudySchema) }}
      />
    </>
  );
}
