"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Divider } from "@mui/material";
import { useDispatch } from "react-redux";

export default function AddToCartComponent({ data, refresh, setRefresh }) {
  const matches = useMediaQuery("(max-width:768px)");
  const dispatch = useDispatch();

  const [hovered, setHovered] = useState(false);
  const [quantity, setQuantity] = useState(data.qty);
  const [weight, setWeight] = useState();

  const handleAddClick = () => {
    let q = quantity + 1;
    data.qty = q;
    setQuantity(q);
    dispatch({ type: "ADD_CART", payload: [data.fooditemid, data] });
    setRefresh(!refresh);
  };

  const handleMinusClick = () => {
    let q = quantity - 1;
    if (q <= 0) {
      dispatch({ type: "DELETE_CART", payload: [data.fooditemid, data] });
      setQuantity(0);
    } else {
      data.qty = q;
      setQuantity(q);
      dispatch({ type: "ADD_CART", payload: [data.fooditemid, data] });
    }
    setRefresh(!refresh);
  };

  useEffect(() => {
    setWeight(data?.offerprice > 0 ? data?.offerprice : data?.fullprice);
  }, [data?.fooditemid]);

  useEffect(() => {
    setQuantity(data.qty);
  }, [data.qty]);

  const weightOptions = [
    data?.offerprice > 0 ? data?.offerprice : data?.fullprice,
    data?.halfprice,
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* CARD */}
      <div
        style={{
          background: "#fff",
          borderRadius: 15,
          padding: matches ? 16 : 20,          // ✅ mobile only
          marginTop: 15,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row", // ✅ mobile only
            gap: matches ? 12 : 100,
          }}
        >
          {/* WEIGHT */}
          <div>
            <div style={{ display: "flex", gap: 10 }}>
              {weightOptions.map(
                (w, i) =>
                  w > 0 && (
                    <div
                      key={i}
                      onClick={() => setWeight(w)}
                      style={{
                        cursor: "pointer",
                        borderRadius: "50%",
                        background:
                          weight === w ? "rgb(13,156,67)" : "#fff",
                        width: matches ? 45 : 50,   // ✅ mobile only
                        height: matches ? 45 : 50,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: weight === w ? "#fff" : "#000",
                        border: "1px solid #999",
                        fontSize: matches ? 12 : 12,
                      }}
                    >
                      ₹{w}
                    </div>
                  )
              )}
            </div>
          </div>

          {/* ADD / QTY */}
          {quantity === 0 ? (
            <button
              onClick={handleAddClick}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              style={{
                width: matches ? "70%" : 260,   // ✅ mobile only
                height: 40,
                borderRadius: matches ? 10 : 25,
                background: "transparent",
                border: "1px solid rgb(13,156,67)",
                color: "rgb(13,156,67)",
                fontSize: matches ? 14 : 16,
                fontWeight: 500,
                cursor: "pointer",
                boxShadow: hovered
                  ? "0 0 0 3px rgba(13,156,67,0.3)"
                  : "none",
              }}
            >
              Add to Cart
            </button>
          ) : (
            <div>
              <div
                style={{
                  fontWeight: 500,
                  marginBottom: 8,
                  fontSize: matches ? 14 : 18,   // ✅ mobile only
                }}
              >
                Quantity
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <button
                  onClick={handleMinusClick}
                  style={{
                    width: matches ? 45 : 50,
                    height: matches ? 45 : 50,
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <Image src="/images/minus.png" alt="-" width={20} height={20} />
                </button>

                <span
                  style={{
                    fontSize: matches ? 10 : 18, // ✅ mobile only
                    fontWeight: 600,
                  }}
                >
                  {quantity}
                </span>

                <button
                  onClick={handleAddClick}
                  style={{
                    width: matches ? 45 : 50,
                    height: matches ? 45 : 50,
                    borderRadius: "50%",
                    border: "none",
                    background: "rgba(0,0,0,0.1)",
                    cursor: "pointer",
                  }}
                >
                  <Image src="/images/plus.png" alt="+" width={20} height={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* BUY NOW */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <button
          style={{
            width: matches ? "100%" : "50%",   // ✅ mobile only
            height: 45,
            borderRadius: matches ? 10 : 25,
            background: "rgb(13,156,67)",
            color: "#fff",
            fontSize: matches ? 14 : 16,
            fontWeight: 500,
            border: "none",
            cursor: "pointer",
          }}
        >
          Buy it Now
        </button>
      </div>

      <Divider style={{ marginTop: 20 }} />
    </div>
  );
}
