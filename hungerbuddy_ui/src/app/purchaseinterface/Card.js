"use client";

import Image from "next/image";
import { useState } from "react";

import {
  Box,
  Grid,
  Button,
  Typography,
  Card,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Rating,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// 👉 Swiper imports (only addition)
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

export default function ProductDetails() {
  const [weight, setWeight] = useState("235g");
  const [qty, setQty] = useState(1);

  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        py: 5,
        px: 2,
        background: "#faf9f6",
      }}
    >
      <Box sx={{ maxWidth: 1200, width: "100%" }}>
        <Grid container spacing={4}>
          {/* LEFT SIDE */}
          <Grid item xs={12} md={6}>

            {/* ===========================
               MOBILE SLIDER (ONLY xs)
            ============================ */}
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Swiper
                spaceBetween={10}
                slidesPerView={1}
                pagination={{ clickable: true }}
                style={{ width: "100%", borderRadius: 16 }}
              >
                {[1, 2, 3].map((i) => (
                  <SwiperSlide key={i}>
                    <Card
                      sx={{
                        p: 2,
                        background: "#e7d146",
                        borderRadius: 3,
                      }}
                    >
                      <Image
                        src="/images/chips.png"
                        alt="chips"
                        width={600}
                        height={600}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Card>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>

            {/* ===========================
                DESKTOP / TABLET VIEW
            ============================ */}
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              {/* Main Image */}
              <Card
                sx={{
                  borderRadius: 3,
                  p: 3,
                  mb: 2,
                  background: "#e7d146",
                }}
              >
                <Image
                  src="/images/chips.png"
                  alt="chips"
                  width={600}
                  height={600}
                  style={{ width: "100%", height: "auto" }}
                />
              </Card>

              {/* Gallery */}
              <Grid container spacing={2}>
                {[1, 2].map((x) => (
                  <Grid item xs={6} key={x}>
                    <Card
                      sx={{
                        borderRadius: 3,
                        p: 2,
                        background: "#d8c52f",
                      }}
                    >
                      <Image
                        src="/images/chips.png"
                        alt=""
                        width={400}
                        height={400}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* RIGHT SIDE */}
          <Grid item xs={12} md={6}>
            <Rating name="size-medium" defaultValue={2} />

            <Typography sx={{ color: "#777", fontSize: "0.9rem" }}>
              Snacks
            </Typography>

            <Typography variant="h3" fontWeight={700} mt={1} mb={1}>
              Lays
            </Typography>

            <Typography variant="h4" fontWeight={600} mt={1} mb={1}>
              ₹ 45
            </Typography>

            <Typography sx={{ color: "#777", mb: 3 }}>
              Tax included. Shipping calculated at checkout.
            </Typography>

            <Typography sx={{ color: "#444", mb: 3 }}>
              Light, savory bites packed with a burst of spice—perfect for
              munching!
            </Typography>

            {/* Weight / Quantity */}
            <Card
              sx={{
                p: 3,
                borderRadius: 3,
                boxShadow: 3,
                mb: 3,
              }}
            >
              <Grid container spacing={3}>
                {/* Weight */}
                <Grid item xs={6}>
                  <Typography mb={1}>Weight</Typography>

                  <Box sx={{ display: "flex", gap: 1 }}>
                    {["235g", "450g"].map((w) => (
                      <Chip
                        key={w}
                        label={w}
                        clickable
                        onClick={() => setWeight(w)}
                        sx={{
                          px: 2,
                          py: 1,
                          fontWeight: 600,
                          border:
                            weight === w ? "2px solid #00a651" : "2px solid #ccc",
                          background: weight === w ? "#00a651" : "#fff",
                          color: weight === w ? "#fff" : "#000",
                        }}
                      />
                    ))}
                  </Box>
                </Grid>

                {/* Quantity */}
                <Grid item xs={6}>
                  <Typography mb={1}>Quantity</Typography>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                      background: "#f1f1f1",
                      p: 1.2,
                      borderRadius: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      onClick={() => qty > 1 && setQty(qty - 1)}
                      sx={{
                        minWidth: 36,
                        borderRadius: "50%",
                        background: "#dcdcdc",
                        color: "#000",
                      }}
                    >
                      –
                    </Button>

                    <Typography fontSize={18}>{qty}</Typography>

                    <Button
                      variant="contained"
                      onClick={() => setQty(qty + 1)}
                      sx={{
                        minWidth: 36,
                        borderRadius: "50%",
                        background: "#dcdcdc",
                        color: "#000",
                      }}
                    >
                      +
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Card>

            {/* Buttons */}
            <Box sx={{ display: "flex", gap: 2, mb: 3 }}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: 50,
                  py: 1.4,
                  borderColor: "#00a651",
                  color: "#00a651",
                  fontWeight: 700,
                  "&:hover": {
                    borderColor: "#007c3c" , // darker green
                    background: "transparent",
                  },
                }}
              >
                Add to cart
              </Button>


              <Button
                variant="contained"
                fullWidth
                sx={{
                  borderRadius: 50,
                  py: 1.4,
                  background: "#00a651",
                  fontWeight: 700,

                }}
              >
                Buy it now
              </Button>
            </Box>

            {/* Try these */}
            <Typography variant="h6">Liked it? Try these!</Typography>

            <Box sx={{ display: "flex", gap: 2, my: 5 }}>
              <Image src="/images/samosa.png" width={80} height={80} alt="" />
              <Image src="/images/jalbi.png" width={80} height={80} alt="" />
            </Box>

            {/* Available on */}
            <Typography variant="h6" mt={3}>
              Also available on*
            </Typography>

            <Box sx={{ display: "flex", gap: 3, mt: 1 }}>
              <Image
                src="https://www.balajiwafers.com/cdn/shop/files/Swiggy_logo_logo-1.svg?v=1740396376"
                width={80}
                height={30}
                alt=""
              />
              <Image
                src="https://www.balajiwafers.com/cdn/shop/files/Blinkit_logo-1.svg?v=1740396397"
                width={80}
                height={30}
                alt=""
              />
              <Image
                src="https://www.balajiwafers.com/cdn/shop/files/Zepto_Logo_Vector-1.svg?v=1740396412"
                width={80}
                height={30}
                alt=""
              />
            </Box>

            <Typography sx={{ color: "#777", fontSize: 12, mt: 1 }}>
              *Product availability may vary by location.
            </Typography>

            {/* ACCORDIONS */}
            <Accordion sx={{ mt: 3 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={600}>Ingredients list</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>Potatoes, Vegetable Oil, Salt.</Typography>
              </AccordionDetails>
            </Accordion>

            <Accordion sx={{ mt: 1 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight={600}>Nutrition / 100g</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Energy & Protein: Lays gives high energy but very low protein.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
