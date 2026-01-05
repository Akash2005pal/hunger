"use client"
import { Grid, TextField } from "@mui/material";
import OtpInput from 'react-otp-input'
import { useState } from "react";
export default function LoginOtpPage() {
    const [otp,setOtp]=useState('')
  return (
    <div style={{display:"flex",height:'100vh',width:'100%',justifyContent:'center',alignItems:'center'}}>
      <Grid size={12}>
        <div
          style={{
            background: "white",
            width: "100%",
            height: 550,
            borderRadius: 20,
            position: "relative",
            right: -20,
            boxShadow:
              "0 3px 6px rgba(0,0,0,0.25), 0 10px 20px rgba(0,0,0,0.08)",
          }}
        >
          <Grid size={6}>
            <div style={{ padding: 28 }}>
              <img src="/images/back.png" width={18} height={18} />
            </div>
          </Grid>
          <Grid size={6}>
            <div style={{ marginLeft: 28, fontSize: 24, fontWeight: "1000" }}>
              Verify OTP
            </div>
          </Grid>
          <Grid size={6}>
            <div
              style={{
                marginLeft: 28,
                fontSize: 14,
                fontWeight: "500",
                color: "#595959",
              }}
            >
              Enter the OTP sent to +91-xxxxx-xxxxx
            </div>
          </Grid>
          <Grid size={6}>
            <div
              style={{
                marginLeft: 28,
                fontSize: 14,
                fontWeight: "550",
                color: "#0C5273",
              }}
            >
              Update Number
            </div>
          </Grid>
          <Grid size={6}>
            <div
              style={{
                
                marginTop: 2,
                width: "100%",
                display: "flex",
                flexDirection: "row",
                gap: 10,
              }}
            >
              <div style={{width:'100%',background:'red'}}>
             <OtpInput
             style={{width:'100%'}}
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} />}
    />
              </div>
            </div>
            <Grid size={6}>
              <div
                style={{
                  position: "relative",
                  left: 250,
                  marginTop: -10,
                  color: "#0C5273",
                  fontWeight: "550",
                }}
              >
                Resend OTP
              </div>
            </Grid>
            <Grid size={12}>
              <div style={{ marginTop: 200 }}>
                <input
                  type="button"
                  value="Verify OTP"
                  style={{
                    marginLeft: 25,
                    width: "87%",
                    height: 45,
                    border: "none",
                    borderRadius: 20,
                    background: "#0050fdff",
                    color: "white",
                    fontSize: 15,
                    fontWeight: 550,
                  }}
                ></input>
              </div>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </div>
  );
}
