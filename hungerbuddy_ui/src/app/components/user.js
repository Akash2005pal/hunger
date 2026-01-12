"use client";

import Image from "next/image";
import { Badge, Avatar } from "@mui/material";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function User({ totalItems }) {
  const router = useRouter();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("USER");

    if (user) {
      try {
        setUserData(JSON.parse(user));
      } catch (err) {
        console.error("Invalid USER data in localStorage");
        setUserData(null);
      }
    }
  }, []);

  return (
    <div
      style={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "10%",
        padding: 10,
      }}
    >
      {/* CART */}
      <Badge badgeContent={totalItems} color="error">
        <div
          onClick={() => router.push("/cart")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 20,
            background: "#000",
          }}
        >
          <Image src="/images/cart.png" width={25} height={25} alt="cart" />
        </div>
      </Badge>

      {/* WALLET */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 40,
          height: 40,
          borderRadius: 20,
          background: "#000",
        }}
      >
        <Image src="/images/wallet.jpg" width={25} height={25} alt="wallet" />
      </div>

      {/* USER */}
      {!userData ? (
        <div
          onClick={() => router.push("/signin")}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 40,
            height: 40,
            borderRadius: 20,
            background: "#000",
          }}
        >
          <Image src="/images/user.png" width={25} height={25} alt="user" />
        </div>
      ) : (
        <Avatar sx={{ bgcolor: "#30336b" }}>
          {userData.studentname?.[0]?.toUpperCase()}
        </Avatar>
      )}
    </div>
  );
}
