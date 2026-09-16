import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "../interactions";
import { ResponsiveImage } from "../media";
import { SiteFooter } from "../site-footer";
import { ContactForm } from "./contact-form";
import { createPageMetadata } from "../seo";
import { COVERAGE_ANSWER } from "../coverage";

export const metadata: Metadata = createPageMetadata({
  title: "Contact Coretix Ltd | Discuss Your IT Requirements",
  description:
    "Talk to Coretix Ltd about UK managed IT support, Microsoft 365, cybersecurity, AI automation, web and mobile app development, infrastructure or on-site work.",
  path: "/contact",
  image: "/images/contact/contact-consultation.png",
  imageAlt: "A technology specialist listening during a business consultation",
});

export default function ContactPage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main">
        <section className="contact-hero" id="top">
          <div className="container contact-hero-grid">
            <div>
              <p className="eyebrow">Contact Coretix Ltd</p>
              <h1>
                Tell us what is slowing your <span>business down.</span>
              </h1>
              <p className="lede">
                Whether it is an everyday support issue, an infrastructure job
                or a wider technology change, a short conversation is enough to
                identify a sensible next step.
              </p>
            </div>
            <div className="contact-hero-panel">
              <p className="panel-kicker">What happens next</p>
              <ol>
                <li>
                  <i />
                  We review the challenge and the outcome you need.
                </li>
                <li>
                  <i />
                  We clarify priorities, environment and timescale.
                </li>
                <li>
                  <i />
                  We agree whether Coretix Ltd is the right fit and what should
                  happen next.
                </li>
              </ol>
              <small>
                We review every enquiry and reply using the email address you
                provide.
              </small>
            </div>
          </div>
        </section>
        <section className="contact-main section">
          <div className="container contact-layout">
            <ContactForm />
            <aside id="contact-options">
              <ResponsiveImage
                src="/images/contact/contact-consultation.png"
                alt="A technology specialist listening during a business consultation"
                className="contact-photo"
                sizes="(max-width: 900px) 100vw, 38vw"
              />
              <div className="contact-options">
                <p className="eyebrow">Other ways to reach us</p>
                <h2>Choose the route that fits.</h2>
                <div>
                  <h3>New enquiries</h3>
                  <p>
                    <a href="mailto:info@coretix.org">info@coretix.org</a>
                  </p>
                </div>
                <div>
                  <h3>Existing client support</h3>
                  <p>
                    Email <a href="mailto:info@coretix.org">info@coretix.org</a>{" "}
                    with your organisation name and a short description of the
                    issue.
                  </p>
                </div>
                <div>
                  <h3>Service coverage</h3>
                  <p>{COVERAGE_ANSWER}</p>
                </div>
              </div>
            </aside>
          </div>
        </section>
        <section className="contact-reassurance">
          <div className="container reassurance-grid">
            {[
              [
                "Start with the problem",
                "You do not need a prepared specification. A clear description of what is happening is enough.",
              ],
              [
                "No unnecessary jargon",
                "We will explain options and trade-offs in direct, practical language.",
              ],
              [
                "A proportionate next step",
                "The recommendation should match the urgency, risk and scale of the work.",
              ],
            ].map(([title, copy]) => (
              <article key={title}>
                <i aria-hidden="true" />
                <h2>{title}</h2>
                <p>{copy}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="contact-callout">
          <div className="container">
            <p>Looking for an overview first?</p>
            <Link href="/about">
              Learn how Coretix Ltd works <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
