import Link from "next/link";
import { COVERAGE_SHORT } from "./coverage";
export function SiteFooter() {
  return (
    <footer>
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link className="logo" href="/" aria-label="Coretix Ltd home">
            <b>CORETIX</b>
            <span>LTD</span>
          </Link>
          <p>Managed technology services for growing UK organisations.</p>
          <small>{COVERAGE_SHORT}</small>
        </div>
        <div>
          <h2>Services</h2>
          <Link href="/services/managed-it-support">Managed IT Support</Link>
          <Link href="/services/cloud-microsoft-365">
            Cloud & Microsoft 365
          </Link>
          <Link href="/services/cybersecurity">Cybersecurity</Link>
          <Link href="/services/infrastructure-networks">
            Infrastructure & Networks
          </Link>
          <Link href="/services/ai-development-automation">
            AI Development & Automation
          </Link>
          <Link href="/services/web-development">Web Development</Link>
          <Link href="/services/mobile-app-development">
            Mobile App Development
          </Link>
          <Link href="/services">View all services</Link>
        </div>
        <div>
          <h2>Company</h2>
          <Link href="/about">About</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/insights">Insights</Link>
        </div>
        <div>
          <h2>Client support</h2>
          <Link href="/contact#contact-options">Access support</Link>
          <a href="mailto:info@coretix.org">info@coretix.org</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Coretix Ltd.</p>
      </div>
    </footer>
  );
}
