import Image from "next/image";
import type { CSSProperties } from "react";
import type { Service } from "./services/service-data";

type ResponsiveImageProps = {
  src: string;
  alt: string;
  className?: string;
  sizes: string;
  priority?: boolean;
};
export function ResponsiveImage({
  src,
  alt,
  className = "",
  sizes,
  priority = false,
}: ResponsiveImageProps) {
  return (
    <div className={`media-frame ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} />
    </div>
  );
}

const organisationExperience = [
  "Tesco Bank",
  "Lloyds Bank",
  "Vodafone",
  "Nike",
  "adidas",
  "Hilton",
];
const fieldWork = [
  [
    "End-user technology",
    "Desktop engineering, device setup, troubleshooting and hands-on support for people at work.",
  ],
  [
    "On-site operations",
    "Responsive technical assistance delivered within live offices, retail sites and operational environments.",
  ],
  [
    "Network infrastructure",
    "Cisco cabling, connectivity work and the practical installation of network equipment.",
  ],
  [
    "Rollouts & change",
    "Router deployment, equipment replacement and coordinated technology work across active locations.",
  ],
];
export function ExperienceSection() {
  return (
    <section className="client-evidence" aria-labelledby="experience-heading">
      <div className="container experience-shell">
        <div className="experience-heading">
          <div>
            <p className="eyebrow">Enterprise delivery experience</p>
            <h2 id="experience-heading">
              Hands-on technology work in organisations where reliability
              matters.
            </h2>
          </div>
          <p>
            Our people bring practical experience from complex, high-profile
            environments. They support users, install infrastructure and
            complete essential on-site work without disrupting day-to-day
            operations.
          </p>
        </div>
        <div
          className="experience-marquee"
          aria-label="Organisations where personnel have carried out work"
        >
          <div className="experience-marquee-label" aria-hidden="true">
            <i />
            <span>Experience gained within</span>
            <small>Enterprise environments</small>
          </div>
          <p className="organisation-accessible">
            {organisationExperience.join(", ")}
          </p>
          <div className="organisation-marquee-window" aria-hidden="true">
            <div className="organisation-marquee-track">
              {[0, 1].map((group) => (
                <div className="organisation-marquee-group" key={group}>
                  {organisationExperience.map((name) => (
                    <span key={`${group}-${name}`}>
                      {name}
                      <i />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="delivery-grid">
          {fieldWork.map(([title, copy]) => (
            <article key={title}>
              <i aria-hidden="true" />
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
        <p className="experience-note">
          Experience may include work delivered through third-party and
          subcontracted engagements; organisation names do not indicate
          endorsement.
        </p>
      </div>
    </section>
  );
}

export function TechnologyPlatforms() {
  const platforms = [
    ["Microsoft 365", "Collaboration, communication and productivity"],
    ["Azure & Entra", "Cloud services, identity and access governance"],
    ["Windows & Intune", "Endpoint deployment, policy and management"],
    ["Cisco networking", "Routing, switching and site connectivity"],
    ["Security tooling", "Protection, monitoring and response workflows"],
    ["Web platforms", "Applications, APIs and business integrations"],
  ];

  return (
    <section className="platforms" aria-labelledby="platform-heading">
      <div className="container platform-row">
        <div>
          <p className="eyebrow">Technology ecosystem</p>
          <h2 id="platform-heading">Technology platforms we work with</h2>
        </div>
        <div>
          <div className="platform-ecosystem">
            {platforms.map(([name, scope]) => (
              <article key={name}>
                <i aria-hidden="true" />
                <strong>{name}</strong>
                <span>{scope}</span>
              </article>
            ))}
          </div>
          <p className="platform-note">
            Platform references describe technical scope and do not imply a
            vendor partnership, endorsement or certification.
          </p>
        </div>
      </div>
    </section>
  );
}

export function ServiceVisual({ type }: { type: number }) {
  const symbols = [
    <>
      <rect x="12" y="10" width="40" height="28" rx="2" />
      <path d="M25 47h14M32 38v9" />
      <path d="M8 22v7a5 5 0 0 0 5 5M56 22v7a5 5 0 0 1-5 5" />
      <path d="M8 22a24 18 0 0 1 48 0" />
    </>,
    <>
      <path d="M18 39h30a10 10 0 0 0 1-20 17 17 0 0 0-32-3A12 12 0 0 0 18 39Z" />
      <path d="m26 31 6-6 6 6M32 25v18" />
    </>,
    <>
      <path d="M32 7 49 13v14c0 11-7 19-17 23-10-4-17-12-17-23V13l17-6Z" />
      <path d="m23 28 6 6 12-13" />
    </>,
    <>
      <circle cx="32" cy="28" r="7" />
      <circle cx="11" cy="13" r="5" />
      <circle cx="53" cy="13" r="5" />
      <circle cx="11" cy="45" r="5" />
      <circle cx="53" cy="45" r="5" />
      <path d="m16 16 10 8M48 16l-10 8M16 42l10-9M48 42l-10-9" />
    </>,
    <>
      <ellipse cx="28" cy="15" rx="15" ry="7" />
      <path d="M13 15v12c0 4 7 7 15 7 3 0 6-.4 8-1.2M13 27v12c0 4 7 7 15 7 3 0 5-.3 7-1" />
      <path d="M49 31a12 12 0 1 1-8 20" />
      <path d="m39 44 2 7 7-2" />
    </>,
    <>
      <rect x="8" y="9" width="48" height="38" rx="3" />
      <path d="M8 18h48" />
      <circle cx="14" cy="13.5" r="1" className="fill" />
      <circle cx="19" cy="13.5" r="1" className="fill" />
      <path d="m25 27-7 6 7 6M39 27l7 6-7 6M35 24l-6 18" />
    </>,
  ];

  return (
    <div
      className={`service-visual service-symbol visual-${type}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 64 56" focusable="false">
        {symbols[(type - 1) % symbols.length]}
      </svg>
    </div>
  );
}

export function ServiceSystemVisual({
  service,
  type,
}: {
  service: Service;
  type: number;
}) {
  const tools = service.toolGroups.flatMap((group) => group.tools).slice(0, 6);

  return (
    <div className={`service-system-visual system-${type}`}>
      <div className="system-visual-head">
        <span>Technical service map</span>
        <i aria-hidden="true">{String(type).padStart(2, "0")}</i>
      </div>
      <div className="system-visual-core">
        <ServiceVisual type={type} />
        <div>
          <strong>{service.shortName}</strong>
          <small>{service.signal}</small>
        </div>
      </div>
      <div className="system-tool-map" aria-label="Example technologies">
        {tools.map((tool, index) => (
          <span key={tool} style={{ "--tool-index": index } as CSSProperties}>
            {tool}
          </span>
        ))}
      </div>
      <div className="system-framework-rail">
        <span>Delivery informed by</span>
        <strong>
          {service.frameworks.map(({ name }) => name).join(" · ")}
        </strong>
      </div>
    </div>
  );
}
