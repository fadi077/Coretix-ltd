import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../interactions";
import { ResponsiveImage } from "../media";
import { SiteFooter } from "../site-footer";
import { createPageMetadata } from "../seo";

export const metadata: Metadata = createPageMetadata({
  title: "About HP Techs | Practical Technology Expertise",
  description:
    "Learn how HP Techs approaches managed IT, cloud, cybersecurity and infrastructure work for growing UK organisations.",
  path: "/about",
  image: "/images/about/about-team.png",
  imageAlt: "Technology specialists working together beside network equipment",
});
const Arrow = () => <span aria-hidden="true">↗</span>;

export default function AboutPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="inner-hero" id="top">
          <div className="container inner-hero-grid">
            <div>
              <p className="eyebrow">About HP Techs</p>
              <h1>
                Practical technology expertise, delivered with{" "}
                <span>clear accountability.</span>
              </h1>
              <p className="lede">
                We help organisations keep everyday technology working,
                strengthen their infrastructure and move important change
                forward without unnecessary complexity.
              </p>
              <div className="actions">
                <Link className="button primary" href="/contact#enquiry-form">
                  Start a conversation <Arrow />
                </Link>
                <Link className="button secondary" href="/#services">
                  Explore our services
                </Link>
              </div>
            </div>
            <div className="inner-hero-media">
              <ResponsiveImage
                src="/images/about/about-team.png"
                alt="Technology specialists working together beside network equipment"
                className="inner-hero-photo"
                sizes="(max-width: 900px) 100vw, 48vw"
                priority
              />
              <div className="media-caption">
                <i />
                People · systems · continuity
              </div>
            </div>
          </div>
        </section>
        <section className="about-intro section">
          <div className="container editorial-split">
            <div>
              <p className="eyebrow">Why we exist</p>
              <h2>
                Technology should make work easier, not become another problem
                to manage.
              </h2>
            </div>
            <div>
              <p>
                HP Techs is being built around a straightforward idea:
                organisations deserve technology support that understands
                operational reality as well as technical detail.
              </p>
              <p>
                That means listening before recommending, communicating clearly
                and taking responsibility for the practical outcome. This
                applies whether a user needs their desktop working or a network
                rollout must be completed across an active site.
              </p>
            </div>
          </div>
        </section>
        <section className="about-values section">
          <div className="container">
            <div className="split-heading">
              <div>
                <p className="eyebrow">Our working principles</p>
                <h2>How we show up when the work matters.</h2>
              </div>
              <p>
                These principles shape how work is assessed, communicated and
                delivered.
              </p>
            </div>
            <div className="value-grid">
              {[
                [
                  "Understand the environment",
                  "We learn how people work, where pressure sits and what a useful outcome looks like before proposing change.",
                ],
                [
                  "Keep communication clear",
                  "We explain decisions, risks and next steps without hiding behind unnecessary technical language.",
                ],
                [
                  "Work with care",
                  "Security, continuity and disruption are considered throughout the job, not added at the end.",
                ],
                [
                  "Stay accountable",
                  "Ownership remains visible from the first conversation through delivery and ongoing improvement.",
                ],
              ].map(([title, copy]) => (
                <article key={title}>
                  <i aria-hidden="true" />
                  <h3>{title}</h3>
                  <p>{copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="capability-band">
          <div className="container capability-grid">
            <div>
              <p className="eyebrow green">Built for practical delivery</p>
              <h2>
                From a single support issue to coordinated infrastructure work.
              </h2>
            </div>
            <div className="capability-list">
              {[
                "Desktop engineering and user support",
                "Cisco cabling and network installation",
                "Router and equipment deployment",
                "Cloud, security and resilience improvement",
                "Coordinated on-site technology change",
                "Ongoing managed technology support",
              ].map((item) => (
                <p key={item}>
                  <i aria-hidden="true" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </section>
        <section className="about-experience section">
          <div className="container editorial-split">
            <div>
              <p className="eyebrow">Experience in demanding environments</p>
              <h2>Grounded in work carried out where reliability matters.</h2>
            </div>
            <div>
              <p>
                People working with HP Techs bring experience gained within
                major organisational environments, including Tesco, Lloyds Bank,
                Vodafone, Nike, adidas and Hilton.
              </p>
              <p>
                This experience includes work completed through third-party and
                subcontracted engagements. Organisation names indicate
                environments in which personnel have carried out work; they do
                not imply a direct client relationship, partnership or
                endorsement.
              </p>
              <Link className="text-link" href="/contact">
                Discuss your requirements <Arrow />
              </Link>
            </div>
          </div>
        </section>
        <section className="final-cta">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow green">Work with HP Techs</p>
              <h2>Bring us the technology problem your team needs solved.</h2>
            </div>
            <div>
              <p>
                Tell us what is getting in the way. We’ll help you define a
                practical next step.
              </p>
              <div className="actions">
                <Link className="button light" href="/contact#enquiry-form">
                  Book an IT consultation <Arrow />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
