import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (
  configuredSiteUrl || "https://coreit-x.com"
).replace(/\/$/, "");
export const SITE_NAME = "Coretix Ltd";
export const DEFAULT_DESCRIPTION =
  "UK managed IT support, Microsoft 365, cybersecurity, AI automation, web and mobile app development, infrastructure and on-site technology services.";
export const DEFAULT_SOCIAL_IMAGE = "/images/brand/coretix-social-preview-v2.png";

export function absoluteUrl(path = "/") {
  return new URL(path, `${SITE_URL}/`).toString();
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  imageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt = "Coretix Ltd | Technology that helps your business move with confidence | coreit-x.com",
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image);
  const imageMetadata = {
    url: socialImage,
    alt: imageAlt,
    ...(image === DEFAULT_SOCIAL_IMAGE
      ? { width: 1200, height: 630, type: "image/png" }
      : {}),
  };

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        "en-GB": canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_GB",
      type,
      images: [{ ...imageMetadata, secureUrl: socialImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageMetadata],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}
