"use client";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useMediaQuery from "@mui/material/useMediaQuery";
import { serverURL } from "../services/FetchNodeServices";
import { useRef } from "react";

export default function ProductImageComponent({ data, pictures }) {
  const matches = useMediaQuery("(max-width:768px)");
  const sliderRef = useRef(null);

  const imageList = pictures?.picture
    ? pictures.picture.split(",")
    : data?.picture
    ? [data.picture]
    : [];

  const mobileSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const desktopSettings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div
      style={{
        marginTop: matches ? 12 : 30,
        marginLeft: matches ? 0 : "10%",
      }}
    >
      {/* ================= MOBILE VIEW ================= */}
      {matches ? (
        <div style={{ width: "100%", maxWidth: 400, margin: "0 auto" }}>
          <Slider {...mobileSettings}>
            {imageList.map((item, index) => (
              <img
                key={index}
                src={`${serverURL}/images/${item}`}
                alt=""
                style={{
                  width: "100%",
                  borderRadius: 15,
                }}
              />
            ))}
          </Slider>
        </div>
      ) : (
        /* ================= DESKTOP VIEW ================= */
        <div>
          {/* MAIN IMAGE SLIDER */}
          <Slider ref={sliderRef} {...desktopSettings}>
            {imageList.map((item, index) => (
              <img
                key={index}
                src={`${serverURL}/images/${item}`}
                alt=""
                style={{
                  width: 626,
                  height: 635,
                  borderRadius: 25,
                }}
              />
            ))}
          </Slider>

          {/* THUMBNAILS */}
          <div
            style={{
              display: "flex",
              gap: 20,
              marginTop: 20,
            }}
          >
            {imageList.map((item, index) => (
              <img
                key={index}
                src={`${serverURL}/images/${item}`}
                alt=""
                onClick={() => sliderRef.current?.slickGoTo(index)}
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: 15,
                  cursor: "pointer",
                  border: "1px solid #ddd",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
