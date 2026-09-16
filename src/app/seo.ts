import type { Metadata } from "next";

const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

export const SITE_URL = (
  configuredSiteUrl || "https://coretix.org"
).replace(/\/$/, "");
export const SITE_NAME = "Coretix Ltd";
export const DEFAULT_DESCRIPTION =
  "UK managed IT support, Microsoft 365, cybersecurity, AI automation, web and mobile app development, infrastructure and on-site technology services.";
export const DEFAULT_SOCIAL_IMAGE = "/opengraph-image";

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
  imageAlt = "Coretix Ltd technology specialists working together",
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image);
  const twitterImage = absoluteUrl(
    image === DEFAULT_SOCIAL_IMAGE ? "/twitter-image" : image,
  );

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
      images: [{ url: socialImage, alt: imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [{ url: twitterImage, alt: imageAlt }],
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
