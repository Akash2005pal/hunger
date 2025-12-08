"use client";

import { useState } from "react";
import { Box, TextField, Typography, Button, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function LoginCard() {
  const [mobile, setMobile] = useState("");

  // check if mobile number is valid (10 digits)
  const isValid = /^[0-9]{10}$/.test(mobile);

  const handleSignIn = () => {
    if (!isValid) return;
    alert("Sign In Successful!");
    // navigate to OTP screen / API / anything...
  };

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
        <IconButton size="small" sx={{ position: "absolute", top: 16, right: 16 }}>
          <CloseIcon />
        </IconButton>

        <Typography variant="h5" fontWeight="700">
          Almost there!
        </Typography>

        <Typography variant="body2" mt={1} color="text.secondary">
          Simply sign in to place your order
        </Typography>

        <Typography variant="body2" mt={3} mb={1} fontWeight="600" color="text.secondary">
          Mobile Number
        </Typography>

        <TextField
          fullWidth
          placeholder="+91-"
          value={mobile}
          onChange={(e) => setMobile(e.target.value.replace(/\D/g, ""))}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
          }}
        />

        <Typography variant="caption" display="block" color="text.secondary" mt={3} mb={2}>
          By signing in, you agree to our{" "}
          <span style={{ color: "#0072e6", cursor: "pointer" }}>Terms and Conditions of Use</span>{" "}
          and{" "}
          <span style={{ color: "#0072e6", cursor: "pointer" }}>Privacy Policy</span>.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          onClick={handleSignIn}
          disabled={!isValid}
          sx={{
            borderRadius: "30px",
            paddingY: 1.2,
            fontWeight: "600",
            fontSize: "16px",
            bgcolor: isValid ? "#007aff" : "#cfe2f3",
            color: "#fff",
            transition: "0.3s",
            "&:hover": {
              bgcolor: isValid ? "#0066d6" : "#cfe2f3",
            },
          }}
        >
          Sign In
        </Button>
      </Box>
    </div>
  );
}
