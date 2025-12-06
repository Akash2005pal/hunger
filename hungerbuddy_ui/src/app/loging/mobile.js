"use client";

import { useState } from "react";
import { Box, TextField, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function LoginCard() {
  const [enrollId, setEnrollId] = useState("");
  const [mobile, setMobile] = useState("");

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <Box
        sx={{
          width: 360,
          
          bgcolor: "#fff",
          borderRadius: "20px",
          p: 4,
          boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
          position: "relative",
        }}
      >
        {/* Close Button */}
        <IconButton
          size="small"
          sx={{ position: "absolute", top: 16, right: 16 }}
        >
          <CloseIcon />
        </IconButton>

        {/* Heading */}
        <Typography variant="h5" fontWeight="700">
          Almost there!
        </Typography>

        <Typography variant="body2" mt={1} color="text.secondary">
          Simply sign in to place your order
        </Typography>

       
        {/* Mobile Number */}
        <Typography
          variant="body2"
          mt={3}
          mb={1}
          fontWeight="600"
          color="text.secondary"
        >
          Mobile Number
        </Typography>

        <TextField
          fullWidth
          placeholder="+91-"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
          }}
        />

        {/* Terms */}
        <Typography
          variant="caption"
          display="block"
          color="text.secondary"
          mt={3}
          mb={2}
        >
          By signing in, you agree to our{" "}
          <span style={{ color: "#0072e6", cursor: "pointer" }}>
            Terms and Conditions of Use
          </span>{" "}
          and{" "}
          <span style={{ color: "#0072e6", cursor: "pointer" }}>
            Privacy Policy
          </span>
          .
        </Typography>

        {/* Button */}
        <Button
          fullWidth
          variant="contained"
          disabled
          sx={{
            borderRadius: "30px",
            bgcolor: "#cfe2f3",
            color: "#fff",
            paddingY: 1.2,
            fontWeight: "600",
            fontSize: "16px",
            
          }}
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
}
