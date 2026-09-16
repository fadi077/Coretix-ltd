"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
const serviceLinks = [
  ["Managed IT Support", "managed-it-support"],
  ["Cloud & Microsoft 365", "cloud-microsoft-365"],
  ["Cybersecurity", "cybersecurity"],
  ["Infrastructure & Networks", "infrastructure-networks"],
  ["Backup & Disaster Recovery", "backup-disaster-recovery"],
  ["Software Development", "software-development"],
];
export function SiteHeader() {
  const [mobile, setMobile] = useState(false),
    [services, setServices] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setServices(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);
  const closeMobile = () => setMobile(false);
  return (
    <header>
      <div className="nav-wrap">
        <div className="container nav-row">
          <Link
            className="logo"
            href="/"
            aria-label="Coretix Ltd home"
            onClick={closeMobile}
          >
            <b>CORETIX</b>
            <span>LTD</span>
          </Link>
          <nav
            id="primary-navigation"
            className={`main-nav ${mobile ? "open" : ""}`}
            aria-label="Primary"
          >
            <Link href="/" onClick={closeMobile}>
              Home
            </Link>
            <div className="services-nav" ref={ref}>
              <button
                aria-expanded={services}
                aria-controls="services-menu"
                aria-haspopup="true"
                onClick={() => setServices(!services)}
              >
                Services <span aria-hidden="true">⌄</span>
              </button>
              {services && (
                <div id="services-menu" className="services-menu">
                  <div className="services-menu-heading">
                    <span>Coretix services</span>
                    <strong>Technology support shaped around your business.</strong>
                  </div>
                  <Link
                    className="services-menu-all"
                    href="/services"
                    onClick={closeMobile}
                  >
                    <span className="services-menu-all-icon" aria-hidden="true">
                      ↗
                    </span>
                    <span>
                      <b>View all services</b>
                      <small>Explore the full capability set</small>
                    </span>
                    <span className="services-menu-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                  <div className="services-menu-links">
                    {serviceLinks.map(([label, slug], index) => (
                      <Link
                        className="services-menu-link"
                        href={`/services/${slug}`}
                        key={slug}
                        onClick={closeMobile}
                      >
                        <span className="services-menu-index" aria-hidden="true">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{label}</span>
                        <span className="services-menu-arrow" aria-hidden="true">
                          ↗
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link href="/industries" onClick={closeMobile}>
              Industries
            </Link>
            <Link href="/about" onClick={closeMobile}>
              About
            </Link>
            <Link href="/insights" onClick={closeMobile}>
              Insights
            </Link>
            <Link href="/contact" onClick={closeMobile}>
              Contact
            </Link>
            <Link
              className="nav-cta"
              href="/contact#enquiry-form"
              onClick={closeMobile}
            >
              Book a consultation <span aria-hidden="true">↗</span>
            </Link>
          </nav>
          <button
            className="menu-toggle"
            aria-expanded={mobile}
            aria-controls="primary-navigation"
            aria-label={mobile ? "Close menu" : "Open menu"}
            onClick={() => setMobile(!mobile)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
export function Faq({ items }: { items: string[][] }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map(([q, a], i) => (
        <div className="faq-item" key={q}>
          <h3>
            <button
              aria-expanded={open === i}
              aria-controls={`faq-${i}`}
              onClick={() => setOpen(open === i ? -1 : i)}
            >
              <span>{q}</span>
              <i aria-hidden="true">{open === i ? "−" : "+"}</i>
            </button>
          </h3>
          {open === i && (
            <div id={`faq-${i}`} className="faq-answer">
              <p>{a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > 520);
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!visible) return null;

  const returnToTop = () => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <button
      className="back-to-top"
      type="button"
      onClick={returnToTop}
      aria-label="Back to top"
      title="Back to top"
    >
      <span aria-hidden="true">↑</span>
      <strong>Top</strong>
    </button>
  );
}
