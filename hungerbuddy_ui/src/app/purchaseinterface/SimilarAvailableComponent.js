"use client";

import { useState, useRef } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider } from "@mui/material";
import { serverURL } from "../services/FetchNodeServices";
import ScrollProductList from "./ScrollProductList";

export default function SimilarAvailableComponent({ data = [] }) {
  // ✅ MOBILE MEDIA QUERY ONLY
  const matches = useMediaQuery("(max-width:768px)");
  const sliderRef = useRef(null);
  const [hovered, setHovered] = useState(null);

  const renderWithoutSlider = () =>
    data.map((item, index) => (
      <img
        key={index}
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        src={`${serverURL}/images/${item.picture}`}
        alt={`similar product ${index + 1}`}
        style={{
          border: hovered === index ? "1px solid #ccc" : "1px solid transparent",
          borderRadius: 12,
          transition: "0.25s",
          background: "#fff",
          width: matches ? 90 : 130,
          height: matches ? 90 : 130,
          objectFit: "cover",
          cursor: "pointer",
        }}
      />
    ));

  return (
    <div
      style={{
        padding: matches ? "12px 0" : 0,
        marginLeft: matches ? 0 : "2%",
        marginTop: matches ? 20 : 0,
      }}
    >
      {/* ================= TITLE ================= */}
      <div
        style={{
          fontWeight: 500,
          fontSize: matches ? 16 : 20,
          marginBottom: matches ? 12 : 20,
        }}
      >
        Liked it? Try these!
      </div>

      {/* ================= SIMILAR PRODUCTS ================= */}
      {data.length <= 3 ? (
        <div
          style={{
            display: "flex",
            gap: matches ? 16 : 20,
            justifyContent: matches ? "center" : "flex-start",
            flexWrap: matches ? "wrap" : "nowrap",
          }}
        >
          {renderWithoutSlider()}
        </div>
      ) : (
        <div style={{ width: "100%" }}>
          <ScrollProductList data={data} />
        </div>
      )}

      {/* ================= ALSO AVAILABLE ================= */}
      <div
        style={{
          fontWeight: 400,
          fontSize: matches ? 14 : 20,
          marginTop: matches ? 24 : 40,
        }}
      >
        Also available on*
      </div>

      {/* ================= PARTNER LOGOS ================= */}
      <div
        style={{
          display: "flex",
          gap: matches ? 16 : 20,
          marginTop: matches ? 12 : 22,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <img
          src="https://www.balajiwafers.com/cdn/shop/files/Swiggy_logo_logo-1.svg?v=1740396376"
          alt="swiggy"
          style={{ height: matches ? 28 : 40, cursor: "pointer" }}
        />
        <img
          src="https://www.balajiwafers.com/cdn/shop/files/Blinkit_logo-1.svg?v=1740396397"
          alt="blinkit"
          style={{ height: matches ? 28 : 40, cursor: "pointer" }}
        />
        <img
          src="https://www.balajiwafers.com/cdn/shop/files/Zepto_Logo_Vector-1.svg?v=1740396412"
          alt="zepto"
          style={{ height: matches ? 28 : 40, cursor: "pointer" }}
        />
      </div>

      {/* ================= DISCLAIMER ================= */}
      <div
        style={{
          fontSize: matches ? 11 : 12,
          marginTop: 12,
          color: "#666",
        }}
      >
        *Product availability may vary by location.
      </div>

      {/* ================= DIVIDER ================= */}
      <Divider
        style={{
          marginTop: matches ? 28 : 30,
          borderTop: "1px solid #cebdd8ff",
          width: matches ? "100%" : "40%",
          marginLeft: 0,
        }}
      />
    </div>
  );
}
