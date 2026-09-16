import type { Metadata, Viewport } from "next";
import { Geist, Manrope } from "next/font/google";
import "./globals.css";
import { BackToTop } from "./interactions";
import { RouteScroll } from "./route-scroll";
import { STRUCTURED_SERVICE_AREAS } from "./coverage";
import {
  absoluteUrl,
  createPageMetadata,
  DEFAULT_DESCRIPTION,
  serializeJsonLd,
  SITE_NAME,
  SITE_URL,
} from "./seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

const homeMetadata = createPageMetadata({
  title: "Managed IT Support & Technology Services UK | Coretix Ltd",
  description: DEFAULT_DESCRIPTION,
  path: "/",
});

export const metadata: Metadata = {
  ...homeMetadata,
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Managed IT Support & Technology Services UK | Coretix Ltd",
    template: "%s",
  },
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  category: "technology",
  classification: "Business technology services",
  referrer: "origin-when-cross-origin",
  formatDetection: { telephone: false, email: false, address: false },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
  other: {
    "geo.region": "GB",
    "content-language": "en-GB",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f7f4" },
    { media: "(prefers-color-scheme: dark)", color: "#0a2928" },
  ],
  colorScheme: "light",
};

const knowledgeGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: absoluteUrl("/icon.svg"),
      description: DEFAULT_DESCRIPTION,
      areaServed: STRUCTURED_SERVICE_AREAS,
      knowsAbout: [
        "Managed IT support",
        "Microsoft 365",
        "Cybersecurity",
        "Cisco cabling",
        "Business networks",
        "Router installation",
        "Backup and disaster recovery",
        "Software development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      description: DEFAULT_DESCRIPTION,
      inLanguage: "en-GB",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="alternate"
          type="text/plain"
          href="/llms.txt"
          title="Coretix Ltd AI site summary"
        />
        <link
          rel="alternate"
          type="text/plain"
          href="/llms-full.txt"
          title="Coretix Ltd detailed AI site content"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serializeJsonLd(knowledgeGraph) }}
        />
        <RouteScroll />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
