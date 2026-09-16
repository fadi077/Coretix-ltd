import { Faq, SiteHeader } from "./interactions";
import {
  ExperienceSection,
  ResponsiveImage,
  ServiceVisual,
  TechnologyPlatforms,
} from "./media";
import { SiteFooter } from "./site-footer";
import Link from "next/link";
import {
  createPageMetadata,
  DEFAULT_DESCRIPTION,
  serializeJsonLd,
} from "./seo";
import { COVERAGE_ANSWER, COVERAGE_QUESTION } from "./coverage";

export const metadata = createPageMetadata({
  title: "Managed IT Support & Technology Services UK | Coretix Ltd",
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

const services = [
  [
    "Managed IT Support",
    "Day-to-day support, proactive maintenance and practical guidance for your people and systems.",
    "managed-it-support",
  ],
  [
    "Cloud & Microsoft 365",
    "Cloud environments and Microsoft 365 configured around secure, productive ways of working.",
    "cloud-microsoft-365",
  ],
  [
    "Cybersecurity",
    "Proportionate security improvements that make risk clearer and strengthen everyday resilience.",
    "cybersecurity",
  ],
  [
    "Infrastructure & Networks",
    "Reliable connectivity and infrastructure designed for the way your organisation operates.",
    "infrastructure-networks",
  ],
  [
    "Backup & Disaster Recovery",
    "Recovery planning and data protection designed to reduce operational disruption.",
    "backup-disaster-recovery",
  ],
  [
    "Software Development",
    "Purpose-built software exploration for workflows off-the-shelf tools cannot serve well.",
    "software-development",
  ],
  [
    "AI Development & Automation",
    "Practical AI assistants, chatbots and workflow automation shaped around your business processes.",
    "ai-development-automation",
  ],
  [
    "Web Development",
    "Accessible websites and secure web applications built around your audience, workflow and goals.",
    "web-development",
  ],
  [
    "Mobile App Development",
    "Focused mobile products for customers, field teams and internal users across real working contexts.",
    "mobile-app-development",
  ],
];
const faqs = [
  [
    "What does managed IT support include?",
    "The exact scope is agreed after discovery. It may include user support, system maintenance, monitoring and practical technology guidance.",
  ],
  [COVERAGE_QUESTION, COVERAGE_ANSWER],
  [
    "Is support available outside normal business hours?",
    "Support hours and escalation arrangements depend on the agreed service and will be confirmed before engagement.",
  ],
  [
    "How does onboarding work?",
    "A typical onboarding begins with discovery and assessment, followed by an agreed transition plan. Timing depends on your environment.",
  ],
  [
    "Can Coretix Ltd work alongside an internal IT team?",
    "A co-managed approach can be explored where responsibilities and escalation paths are clearly agreed.",
  ],
  [
    "What is needed before an initial consultation?",
    "A short outline of your current challenges, priorities and timescales is enough to start a useful conversation.",
  ],
];
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(([question, answer]) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};
const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" className="home-page">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(faqSchema) }}
        />
        <section className="hero" id="top">
          <div className="container hero-topline">
            <p className="hero-category">Technology</p>
            <p className="hero-positioning">
              <i aria-hidden="true" />
              <strong>Managed IT.</strong>
              <span>Without unnecessary complexity.</span>
            </p>
          </div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <h1>
                Technology that helps your business <span>move with confidence.</span>
              </h1>
              <p className="lede">
                Reliable support for the people, systems and infrastructure your
                organisation depends on.
              </p>
              <div className="actions">
                <Link className="button primary" href="/contact">
                  Discuss your IT needs <Arrow />
                </Link>
                <Link className="button secondary" href="/services">
                  Explore our services
                </Link>
              </div>
            </div>
            <div className="hero-media">
              <div className="hero-media-header">
                <span>Coretix Ltd</span>
                <b>People · Systems · Continuity</b>
              </div>
              <ResponsiveImage
                src="/images/homepage/hero-team.jpg"
                alt="Technology support colleagues working together at a computer"
                className="hero-photo"
                sizes="(max-width: 900px) 100vw, 44vw"
                priority
              />
              <div className="operational-overlay" aria-hidden="true">
                <span>
                  <i /> Technology support that stays accountable
                </span>
              </div>
            </div>
          </div>
        </section>
        <ExperienceSection />
        <section className="principles section">
          <div className="container principles-layout">
            <ResponsiveImage
              src="/images/homepage/trust-workplace.webp"
              alt="Team members working with computers in a contemporary office"
              className="principles-photo"
              sizes="(max-width: 900px) 100vw, 45vw"
            />
            <div>
              <p className="eyebrow">How we work</p>
              <h2>Technology support built around your business</h2>
              <p className="principles-copy">
                Support should feel connected to the way your organisation
                works. It should not feel like a separate technical layer.
              </p>
              <div className="principle-row">
                {[
                  [
                    "Nationwide UK coverage",
                    "Remote and on-site support across England, Scotland, Wales and Northern Ireland.",
                  ],
                  [
                    "Responsive support",
                    "Clear routes to help when your people need it, including international remote support where agreed.",
                  ],
                  [
                    "Security-first delivery",
                    "Risk and resilience considered throughout every recommendation.",
                  ],
                  [
                    "Cloud and infrastructure capability",
                    "Joined-up thinking across the systems your business depends on.",
                  ],
                ].map(([x, d]) => (
                  <div key={x}>
                    <i aria-hidden="true" />
                    <span>
                      <strong>{x}</strong>
                      <small>{d}</small>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="friction section" id="approach">
          <Heading
            eyebrow="Technology should remove friction"
            title="Your team should not have to work around unreliable IT."
            copy="We focus on the operational outcome, not technology for its own sake."
          />
          <div className="container outcome-list">
            {[
              ["Recurring downtime", "More reliable operations"],
              ["Security uncertainty", "Clearer risk visibility"],
              ["Disconnected systems", "Simpler collaboration"],
              ["Reactive IT spending", "A more deliberate technology roadmap"],
            ].map(([a, b]) => (
              <div className="outcome" key={a}>
                <p>{a}</p>
                <b aria-hidden="true">→</b>
                <strong>{b}</strong>
              </div>
            ))}
          </div>
        </section>
        <section className="services section" id="services">
          <div className="container">
            <Heading
              inner
              eyebrow="What we do"
              title="Practical expertise, from everyday support to major change."
              copy="One accountable technology partner, with services shaped around what your organisation actually needs."
            />
            <div className="service-grid">
              {services.map(([title, desc, slug], i) => (
                <article className={`service s${i + 1}`} key={title}>
                  <ServiceVisual type={(i % 6) + 1} />
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <Link
                    href={`/services/${slug}`}
                    aria-label={`Explore ${title}`}
                  >
                    Explore service <Arrow />
                  </Link>
                </article>
              ))}
            </div>
            <Link className="text-link services-all-link" href="/services">
              View all services <Arrow />
            </Link>
          </div>
        </section>
        <section className="accountable section">
          <div className="container accountable-grid">
            <div>
              <p className="eyebrow green">Why Coretix Ltd</p>
              <h2>A technology partner that stays accountable.</h2>
              <p className="lede">
                We combine responsive support with long-term technology
                planning, helping organisations solve today’s problems without
                creating tomorrow’s limitations.
              </p>
            </div>
            <ul>
              {[
                "Understand before recommending",
                "Communicate without unnecessary jargon",
                "Design for security and resilience",
                "Continue improving after implementation",
              ].map((x) => (
                <li key={x}>
                  <i aria-hidden="true" />
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </section>
        <TechnologyPlatforms />
        <section className="case section" id="case-studies">
          <div className="container case-shell">
            <div className="case-visual">
              <ResponsiveImage
                src="/images/case-studies/case-operation.webp"
                alt="Technology deployment colleagues preparing laptops together"
                className="case-photo"
                sizes="(max-width: 900px) 100vw, 48vw"
              />
            </div>
            <div className="case-content">
              <p className="eyebrow">Deployment experience</p>
              <p className="case-sector">Tesco Bank · Newcastle</p>
              <h2>
                Supporting a 1,000-device laptop deployment for people at work.
              </h2>
              <p className="case-notice">
                Delivery took place from May to June 2026.
              </p>
              <div className="case-detail">
                <p>
                  <b>The deployment</b>An 11-person team prepared and configured
                  1,000 laptops at the Tesco Bank Newcastle branch.
                </p>
                <p>
                  <b>The user experience</b>Each laptop was set up with its
                  intended user present, helping confirm access and readiness
                  before the device entered day-to-day use.
                </p>
              </div>
              <div className="metrics">
                <div>
                  <b>1,000</b>
                  <span>Laptops prepared</span>
                </div>
                <div>
                  <b>11</b>
                  <span>People in the setup team</span>
                </div>
                <div>
                  <b>6</b>
                  <span>People providing follow-on support</span>
                </div>
              </div>
              <div className="case-support">
                <b>Support after deployment</b>
                <p>
                  After the laptop setup phase, a 6-person team provided
                  additional IT support. They helped users work with their
                  laptops and resolve device problems.
                </p>
              </div>
              <p className="case-evidence-note">
                Delivery window: May to June 2026. Tesco Bank is named as the
                environment in which personnel performed work. This does not
                imply endorsement.
              </p>
              <Link className="button case-button" href="/contact">
                Discuss a device rollout <Arrow />
              </Link>
            </div>
          </div>
        </section>
        <section className="process section">
          <div className="container">
            <p className="eyebrow">Our process</p>
            <h2>
              A clear route from technology problem to measurable improvement.
            </h2>
            <ol className="process-line">
              {[
                [
                  "Discover",
                  "Listen, clarify priorities and understand the working environment.",
                ],
                [
                  "Assess",
                  "Review what exists and identify practical risks and opportunities.",
                ],
                [
                  "Deliver",
                  "Implement an agreed plan with clear ownership and communication.",
                ],
                [
                  "Improve",
                  "Review outcomes and keep the technology roadmap moving forward.",
                ],
              ].map(([a, b]) => (
                <li key={a}>
                  <i aria-hidden="true" />
                  <h3>{a}</h3>
                  <p>{b}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
        <section className="human section">
          <div className="container human-grid">
            <ResponsiveImage
              src="/images/homepage/human-support.webp"
              alt="Two colleagues working together to resolve a technology question"
              className="human-photo"
              sizes="(max-width: 900px) 100vw, 46vw"
            />
            <div>
              <p className="eyebrow">People behind the technology</p>
              <h2>Support works better when you know who is accountable.</h2>
              <p>
                Our approach combines practical technical expertise with clear
                communication, so your team always understands what is happening
                and what comes next.
              </p>
              <ul>
                {[
                  "Clear ownership",
                  "Practical communication",
                  "Long-term support",
                ].map((x) => (
                  <li key={x}>{x}</li>
                ))}
              </ul>
              <Link className="button ink-button" href="/about">
                Meet Coretix Ltd <Arrow />
              </Link>
            </div>
          </div>
        </section>
        <section className="industries section" id="industries">
          <div className="container">
            <Heading
              inner
              eyebrow="Industries"
              title="Technology support shaped around how your organisation operates."
              copy="Explore how our practical capability can adapt to different working environments."
            />
            <div className="industry-panels">
              {[
                [
                  "Professional services",
                  "/images/industries/industry-office.webp",
                  "professional-services",
                ],
                [
                  "Retail and multi-site operations",
                  "/images/industries/industry-retail.jpg",
                  "retail-multi-site",
                ],
                [
                  "Logistics and field-based teams",
                  "/images/industries/industry-logistics.webp",
                  "logistics-field-teams",
                ],
                [
                  "Growing SMEs",
                  "/images/industries/industry-sme.jpg",
                  "growing-smes",
                ],
              ].map(([x, src, slug], i) => (
                <Link
                  href={`/industries/${slug}`}
                  key={x}
                  className={`industry-panel ip${i + 1}`}
                >
                  <ResponsiveImage
                    src={src}
                    alt={`${x} technology support environment`}
                    className="industry-photo"
                    sizes="(max-width: 600px) 100vw, 50vw"
                  />
                  <div>
                    <small>Industry focus</small>
                    <h3>{x}</h3>
                    <span aria-hidden="true">↗</span>
                  </div>
                </Link>
              ))}
            </div>
            <Link className="text-link industries-link" href="/industries">
              View all industries <Arrow />
            </Link>
          </div>
        </section>
        <section className="insights section" id="insights">
          <div className="container">
            <p className="eyebrow">Insights</p>
            <h2>Straightforward guidance for better technology decisions.</h2>
            <div className="article-grid">
              {[
                [
                  "Planning",
                  "Preparing your business for an IT support transition",
                  "/images/insights/support-transition.jpg",
                  "Support colleagues assessing a shared workstation",
                  "preparing-for-it-support-transition",
                ],
                [
                  "Cybersecurity",
                  "What a practical cybersecurity review should cover",
                  "/images/insights/security-review.jpg",
                  "Technology specialists working across an office support environment",
                  "practical-cybersecurity-review",
                ],
                [
                  "Cloud",
                  "Planning a cloud migration without disrupting daily work",
                  "/images/insights/cloud-migration.webp",
                  "Two colleagues planning work together across laptops",
                  "cloud-migration-without-disruption",
                ],
              ].map(([tag, title, src, alt, slug]) => (
                <article key={title}>
                  <ResponsiveImage
                    src={src}
                    alt={alt}
                    className="article-photo"
                    sizes="(max-width: 600px) 100vw, 33vw"
                  />
                  <p>{tag} · Guidance</p>
                  <h3>{title}</h3>
                  <Link href={`/insights/${slug}`} aria-label={`Read ${title}`}>
                    Read article <Arrow />
                  </Link>
                </article>
              ))}
            </div>
            <Link className="text-link insight-all-link" href="/insights">
              View all insights <Arrow />
            </Link>
          </div>
        </section>
        <section className="faq section">
          <div className="container faq-grid">
            <div>
              <p className="eyebrow">Common questions</p>
              <h2>Questions businesses ask before choosing an IT partner</h2>
              <p>
                These answers provide a practical starting point. Service details
                are confirmed through consultation.
              </p>
            </div>
            <Faq items={faqs} />
          </div>
        </section>
        <section className="final-cta" id="contact">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow green">Start a conversation</p>
              <h2>Let’s make your technology easier to manage.</h2>
            </div>
            <div>
              <p>
                Tell us where your organisation is today and what needs to
                improve. We’ll help identify a practical next step.
              </p>
              <div className="actions">
                <Link className="button light" href="/contact">
                  Book an IT consultation <Arrow />
                </Link>
                <Link className="button dark-outline" href="/contact">
                  Send us an enquiry
                </Link>
              </div>
              <small>
                Email <a href="mailto:info@coretix.org">info@coretix.org</a> to
                start a conversation.
              </small>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

function Heading({
  eyebrow,
  title,
  copy,
  inner = false,
}: {
  eyebrow: string;
  title: string;
  copy: string;
  inner?: boolean;
}) {
  const x = (
    <div className="split-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      <p>{copy}</p>
    </div>
  );
  return inner ? x : <div className="container">{x}</div>;
}
