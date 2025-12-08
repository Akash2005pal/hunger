"use client";

import { useState, useEffect, useRef } from "react";
import { Box, Typography, TextField, Button, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function VerifyOTP() {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const [timer, setTimer] = useState(15);
  const inputRefs = useRef([]);

  // Countdown Timer
  useEffect(() => {
    if (timer === 0) return;
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto move to next box
    if (value && index < 5) inputRefs.current[index + 1].focus();
  };

  const handleVerify = () => {
    const code = otp.join("");
    alert("OTP Submitted: " + code);
  };

  const allFilled = otp.every((d) => d !== "");

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
        {/* Back Arrow */}
        <IconButton sx={{ mb: 2 }}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h5" fontWeight="700">
          Verify OTP
        </Typography>

        <Typography variant="body2" mt={1} color="text.secondary">
          Enter the OTP sent to <b>+91-7089211599</b>
        </Typography>

        <Typography
          variant="body2"
          mt={1}
          sx={{ color: "#007aff", cursor: "pointer", fontWeight: 600 }}
        >
          Update number
        </Typography>

        {/* OTP Boxes */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 4,
            px: 2,
          }}
        >
          {otp.map((digit, index) => (
            <TextField
              key={index}
              inputRef={(el) => (inputRefs.current[index] = el)}
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              inputProps={{
                maxLength: 1,
                style: {
                  textAlign: "center",
                  fontSize: "22px",
                },
              }}
              sx={{
                width: 40,
                "& .MuiOutlinedInput-root": {
                  borderRadius: "8px",
                },
              }}
            />
          ))}
        </Box>

        {/* Resend OTP */}
        <Typography
          variant="body2"
          mt={3}
          textAlign="right"
          color="text.secondary"
        >
          {timer > 0 ? (
            <>Resend OTP in {timer}s</>
          ) : (
            <span style={{ color: "#007aff", cursor: "pointer" }}>
              Resend OTP
            </span>
          )}
        </Typography>

        {/* Verify Button */}
        <Button
          fullWidth
          variant="contained"
          disabled={!allFilled}
          onClick={handleVerify}
          sx={{
            borderRadius: "30px",
            paddingY: 1.3,
            fontWeight: "600",
            fontSize: "16px",
            mt: 4,
            bgcolor: allFilled ? "#007aff" : "#cfe2f3",
            "&:hover": {
              bgcolor: allFilled ? "#0066d6" : "#cfe2f3",
            },
          }}
        >
          Verify OTP
        </Button>
      </Box>
    </div>
  );
}
