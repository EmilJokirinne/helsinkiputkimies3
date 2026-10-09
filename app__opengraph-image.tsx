import { ImageResponse } from "next/og";

export const alt = "HelsinkiPutkimies.fi – putkitöiden hinnat ja putkiliikkeiden vertailu Helsingissä";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b1f3a",
          padding: "72px",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700 }}>
          Helsinki<span style={{ color: "#5fd3cc" }}>Putkimies</span>
          <span style={{ color: "#8ea3bf" }}>.fi</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 68, fontWeight: 800, lineHeight: 1.1 }}>Putkimies Helsingissä</div>
          <div style={{ fontSize: 40, marginTop: 16, color: "#c9d6e6" }}>Vertaile hintoja ja löydä sopiva palvelu</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#8ea3bf" }}>
          Riippumaton tietopalvelu · julkaistut hinnastot · hintalaskuri
        </div>
      </div>
    ),
    size,
  );
}
