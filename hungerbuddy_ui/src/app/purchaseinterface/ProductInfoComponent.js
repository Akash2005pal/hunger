"use client";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function ProductInfoComponent({ data }) {
  // ✅ MOBILE MEDIA QUERY ONLY
  const matches = useMediaQuery("(max-width:768px)");

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ================= INGREDIENTS ================= */}
      <Accordion
        style={{
          boxShadow: "none",
          borderBottom: "1px solid #A9A9A9",
          background: "#F3ECF7",
        }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography
            component="span"
            style={{
              fontWeight: 400,
              fontSize: matches ? 16 : 20, // ✅ MOBILE FONT FIX
              fontFamily: "poppins",
            }}
          >
            Ingredients
          </Typography>
        </AccordionSummary>

        <AccordionDetails
          style={{
            fontSize: matches ? 14 : 16, // ✅ MOBILE READABILITY
            lineHeight: 1.6,
          }}
        >
          {data?.ingridients}
        </AccordionDetails>
      </Accordion>

      {/* ================= SHARE ================= */}
      <div style={{ marginTop: matches ? 12 : "5%" }}>
        <Accordion
          style={{
            boxShadow: "none",
            borderBottom: "1px solid #A9A9A9",
            background: "#F3ECF7",
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography
              component="span"
              style={{
                fontSize: matches ? 16 : 20, // ✅ MOBILE FONT FIX
                fontFamily: "poppins",
                fontWeight: 400,
              }}
            >
              Share
            </Typography>
          </AccordionSummary>

          <AccordionDetails style={{ paddingLeft: 0 }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                padding: matches ? "8px 0" : 0,
              }}
            >
              <img src="/images/linkedin-sign.png" width={20} />
              <img src="/images/social.png" width={20} />
              <img src="/images/facebook.png" width={20} />
              <img src="/images/instagram.png" width={20} />
              <img src="/images/pinterest-logo.png" width={20} />
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
