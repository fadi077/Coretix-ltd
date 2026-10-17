import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import path from "node:path";

const logoSrc = `data:image/png;base64,${readFileSync(
  path.join(process.cwd(), "public/images/brand/coretix-logo-light.png"),
).toString("base64")}`;

export const alt =
  "Coretix Ltd | Technology that helps your business move with confidence | coreit-x.com";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#091522",
          color: "#ffffff",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "58px 68px",
          width: "100%",
          borderBottom: "12px solid #1674ea",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Coretix Ltd" src={logoSrc} width={330} height={54} />
          <span style={{ color: "#8fc3ff", fontSize: 26 }}>coreit-x.com</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span style={{ color: "#72d49b", fontSize: 21, letterSpacing: 3, marginBottom: 20 }}>
            TECHNOLOGY FOR UK BUSINESSES
          </span>
          <span style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>
            Technology that helps your
          </span>
          <span style={{ fontSize: 66, fontWeight: 700, lineHeight: 1.08, letterSpacing: -2 }}>
            business move with confidence.
          </span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <span style={{ color: "#dce8f1", fontSize: 23 }}>
            Managed IT · Microsoft 365 · Cybersecurity
          </span>
          <span style={{ color: "#b7c6d3", fontSize: 23 }}>
            AI & Automation · Web & Mobile Development
          </span>
        </div>
      </div>
    ),
    size,
  );
}
