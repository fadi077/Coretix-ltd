import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "HP Techs | Managed Technology Services",
    short_name: "HP Techs",
    description:
      "Nationwide UK managed IT support, cloud, cybersecurity and infrastructure services, with international remote support available.",
    start_url: "/",
    display: "standalone",
    background_color: "#f5f7f4",
    theme_color: "#0a2928",
    lang: "en-GB",
    categories: ["business", "technology", "productivity"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
