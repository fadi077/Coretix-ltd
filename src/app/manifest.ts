import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Coretix Ltd | Managed Technology Services",
    short_name: "Coretix Ltd",
    description:
      "UK managed IT support, cloud, cybersecurity, AI automation, web and mobile app development and infrastructure services.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f3ef",
    theme_color: "#07182b",
    lang: "en-GB",
    categories: ["business", "technology", "productivity"],
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
