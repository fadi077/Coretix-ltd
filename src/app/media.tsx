import Image from "next/image";

type ResponsiveImageProps = {
  src: string; alt: string; className?: string; sizes: string; priority?: boolean;
};
export function ResponsiveImage({src,alt,className="",sizes,priority=false}:ResponsiveImageProps){return <div className={`media-frame ${className}`}><Image src={src} alt={alt} fill sizes={sizes} priority={priority}/></div>}

const organisationExperience = ["Tesco", "Lloyds Bank", "Vodafone", "Nike", "adidas", "Hilton"];
const fieldWork = [
  ["End-user technology", "Desktop engineering, device setup, troubleshooting and hands-on support for people at work."],
  ["On-site operations", "Responsive technical assistance delivered within live offices, retail sites and operational environments."],
  ["Network infrastructure", "Cisco cabling, connectivity work and the practical installation of network equipment."],
  ["Rollouts & change", "Router deployment, equipment replacement and coordinated technology work across active locations."],
];
export function ExperienceSection(){return <section className="client-evidence" aria-labelledby="experience-heading"><div className="container experience-shell"><div className="experience-heading"><div><p className="eyebrow">Enterprise delivery experience</p><h2 id="experience-heading">Hands-on technology work in organisations where reliability matters.</h2></div><p>Our people bring practical experience from complex, high-profile environments—supporting users, installing infrastructure and completing essential on-site work without disrupting day-to-day operations.</p></div><div className="organisation-rail"><span>Experience gained within</span><ul aria-label="Organisations where personnel have carried out work">{organisationExperience.map(name=><li key={name}>{name}</li>)}</ul></div><div className="delivery-grid">{fieldWork.map(([title,copy])=><article key={title}><i aria-hidden="true"/><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="experience-note">Experience may include work delivered through third-party and subcontracted engagements; organisation names do not indicate endorsement.</p></div></section>}

export function TechnologyPlatforms(){return <section className="platforms" aria-labelledby="platform-heading"><div className="container platform-row"><div><p className="eyebrow">Technology ecosystem</p><h2 id="platform-heading">Technology platforms we work with</h2></div><div className="platform-placeholders">{["Productivity platform","Cloud platform","Security platform","Infrastructure platform"].map(x=><span key={x}>{x}<small>Awaiting verification</small></span>)}</div></div></section>}

export function ServiceVisual({type}:{type:number}){return <div className={`service-visual visual-${type}`} aria-hidden="true"><i/><i/><i/><i/></div>}
