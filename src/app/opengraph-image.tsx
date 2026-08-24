import { ImageResponse } from "next/og";

export const alt = "HP Techs | Managed IT support and technology services";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#eef4ef",
          color: "#0a2928",
          display: "flex",
          height: "100%",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#0a2928",
            borderRadius: "36px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "56px",
            width: "100%",
          }}
        >
          <div
            style={{
              alignItems: "center",
              color: "white",
              display: "flex",
              fontSize: 34,
              fontWeight: 800,
            }}
          >
            <span style={{ color: "#82e6ba", marginRight: 14 }}>HP</span> TECHS
          </div>
          <div
            style={{
              color: "white",
              display: "flex",
              flexDirection: "column",
              maxWidth: 900,
            }}
          >
            <span
              style={{
                color: "#82e6ba",
                fontSize: 25,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
              }}
            >
              Managed technology services
            </span>
            <span
              style={{
                fontSize: 64,
                fontWeight: 800,
                letterSpacing: -2,
                lineHeight: 1.06,
                marginTop: 20,
              }}
            >
              Practical IT expertise that keeps business moving.
            </span>
          </div>
          <div style={{ color: "#cfe0da", display: "flex", fontSize: 24 }}>
            Managed IT · Microsoft 365 · Cybersecurity · Infrastructure
          </div>
        </div>
      </div>
    ),
    size,
  );
}
