import type { Metadata } from "next";
import { Geist, Manrope } from "next/font/google";
import "./globals.css";
import { RouteScroll } from "./route-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {default:"HP Techs | Managed Technology Services",template:"%s"},
  description: "Managed IT, cloud, cybersecurity and infrastructure services for growing organisations.",
  applicationName:"HP Techs",
  openGraph:{siteName:"HP Techs",locale:"en_GB",type:"website",images:[{url:"/images/about/about-team.png",width:1792,height:896,alt:"HP Techs technology specialists working together"}]},
  twitter:{card:"summary_large_image",images:["/images/about/about-team.png"]},
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col"><RouteScroll/>{children}</body>
    </html>
  );
}
