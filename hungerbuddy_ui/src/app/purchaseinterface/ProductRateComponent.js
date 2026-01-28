"use client";

import useMediaQuery from "@mui/material/useMediaQuery";
import Rating from "@mui/material/Rating";

export default function ProductRateComponent({ data }) {
  // ✅ MOBILE MEDIA QUERY ONLY
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <div
      style={{
        padding: matches ? "12px 0" : 0,
        marginLeft: matches ? 0 : "4%", // ✅ FIXED
        marginTop: matches ? 8 : 0,
        background: "transparent",
      }}
    >
      {/* ================= RATING ================= */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Rating
          value={Number(data?.ratings) || 0}
          readOnly
          size={matches ? "small" : "medium"} // ✅ MOBILE SIZE
        />

        <div
          style={{
            fontSize: matches ? 12 : 14,
            color: "grey",
          }}
        >
          ({data?.ratings})
        </div>
      </div>

      {/* ================= PRODUCT DETAILS ================= */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: matches ? 6 : 10,
          marginTop: matches ? 6 : 10,
        }}
      >
        <div
          style={{
            fontFamily: "poppins",
            fontSize: matches ? 14 : 18,
            color: matches ? "#000" : "grey",
          }}
        >
          {data?.categoryname}
        </div>

        <div
          style={{
            fontSize: matches ? 24 : 35, // ✅ MOBILE FIX
            fontWeight: 500,
          }}
        >
          {data?.fooditemname}
        </div>

        <div
          style={{
            fontSize: matches ? 22 : 30, // ✅ MOBILE FIX
            fontWeight: 500,
          }}
        >
          {data?.offerprice == 0 ? (
            <span style={{ fontWeight: "bold", color: "#000" }}>
              ₹{data?.fullprice}
            </span>
          ) : (
            <>
              <span
                style={{
                  fontWeight: "bold",
                  marginRight: 8,
                  color: "#000",
                }}
              >
                ₹{data?.offerprice}
              </span>
              <s style={{ color: "grey" }}>₹{data?.fullprice}</s>
            </>
          )}
        </div>

        <div
          style={{
            fontSize: matches ? 10 : 12,
            color: "grey",
          }}
        >
          Tax included. Shipping calculated at checkout
        </div>

        <div
          style={{
            fontSize: matches ? 12 : 14,
            fontWeight: 400,
            marginTop: matches ? 12 : 25,
            lineHeight: 1.5,
          }}
        >
          {data?.description}
        </div>
      </div>
    </div>
  );
}
