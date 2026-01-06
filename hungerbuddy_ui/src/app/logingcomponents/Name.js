"use client";

import { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";

export default function SetupAccount() {
  const [name, setName] = useState("");

  const handleSubmit = () => {
    alert("Account Created for: " + name);
  };

  const isValid = name.trim().length > 1;

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
        {/* Heading */}
        <Typography variant="h5" fontWeight="700">
          Instant account setup
        </Typography>

        <Typography variant="body2" mt={1} color="text.secondary">
          All we need is your name
        </Typography>

        {/* First Name Input */}
        <Typography
          variant="body2"
          mt={4}
          mb={1}
          fontWeight="600"
          color="text.secondary"
        >
          First name *
        </Typography>

        <TextField
          fullWidth
          placeholder="Enter your first name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
            },
          }}
        />

        {/* Button */}
        <Button
          fullWidth
          variant="contained"
          disabled={!isValid}
          onClick={handleSubmit}
          sx={{
            borderRadius: "30px",
            paddingY: 1.3,
            fontWeight: "600",
            fontSize: "16px",
            mt: 6,
            bgcolor: isValid ? "#007aff" : "#cfe2f3",
            "&:hover": {
              bgcolor: isValid ? "#0066d6" : "#cfe2f3",
            },
          }}
        >
          Get Started to
        </Button>
      </Box>
    </div>
  );
}
