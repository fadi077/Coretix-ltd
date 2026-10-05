import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import path from "node:path";

const logoSrc = `data:image/png;base64,${readFileSync(
  path.join(process.cwd(), "public/images/brand/coretix-logo-light.png"),
).toString("base64")}`;

export const alt = "Coretix Ltd | Managed IT support and technology services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#f4f3ef",
          color: "#112235",
          display: "flex",
          height: "100%",
          padding: "44px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#07182b",
            borderRadius: "30px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: "48px 52px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", width: "70%" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Coretix Ltd"
              src={logoSrc}
              style={{
                height: 42,
                objectFit: "contain",
                objectPosition: "left center",
                width: 255,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", maxWidth: 720 }}>
              <span
                style={{
                  color: "#72d49b",
                  fontSize: 22,
                  fontWeight: 700,
                  letterSpacing: 3,
                  textTransform: "uppercase",
                }}
              >
                Managed technology services
              </span>
              <span
                style={{
                  color: "#ffffff",
                  fontSize: 58,
                  fontWeight: 800,
                  letterSpacing: -2,
                  lineHeight: 1.06,
                  marginTop: 18,
                }}
              >
                Technology that keeps business moving.
              </span>
            </div>
            <div style={{ color: "#b8c8d6", display: "flex", fontSize: 20 }}>
              Managed IT · Microsoft 365 · Cybersecurity · Infrastructure
            </div>
          </div>
          <div style={{ alignItems: "center", display: "flex", justifyContent: "center", width: "24%" }}>
            <div style={{ border: "1px solid #375b7f", borderRadius: 22, display: "flex", height: 190, justifyContent: "center", padding: 18, width: 190 }}>
              <div style={{ alignItems: "center", border: "1px solid #1674ea", borderRadius: "50%", display: "flex", height: 128, justifyContent: "center", width: 128 }}>
                <div style={{ background: "#1674ea", borderRadius: 10, height: 42, width: 42 }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
