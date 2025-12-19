"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Divider } from "@mui/material";

export default function AddToCartComponent({data}) {
 
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  
  const [hovered, setHovered] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [weight, setWeight] = useState();
 useEffect(function(){
 
setWeight(data?.offerprice>0?data?.offerprice:data?.fullprice)

 },[data?.fooditemid])

  const addQuantity = () => setQuantity(quantity + 1);
  const subQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const weightOptions = [data?.offerprice>0?data?.offerprice:data?.fullprice, data?.halfprice];

  return (
    <div style={{ padding: matches ? "20px" : "0" }}>
    
    
      {/* WEIGHT & QUANTITY SECTION */}
      <div
        style={{
          display: "flex",
          alignItems: matches ? "flex-start" : "center",
          justifyContent: matches ? "flex-start" : "space-between",
          width: "80%",
          maxWidth: matches ? "100%" : 400,
          marginTop: matches ?-20 : 10,
          // flexDirection: matches ? "row" : "row",
          flexDirection:'row',
          gap: matches ? 105 : 0,
        }}
      >



        {/* WEIGHT SELECTION */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: matches ? "flex-start" : "center",
            gap: matches ? 10 : 5,
            width: matches ? "100%" : 'auto',

          }}
        >
        
          <div style={{ display: "flex", gap: 10,marginTop:10,width:'100%' }}>
              
            {weightOptions.map((w) => (
              <div>
             {w>0?
             <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
           
             <div
                
                onClick={() => setWeight(w)}
                style={{
                  cursor: "pointer",
                  borderRadius: "50%",
                  background: weight === w ? "rgb(13, 156, 67)" : "#fff",
                  width: matches ? 45 : 50,
                  height: matches ? 45 : 50,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: weight === w ? "#fff" : "#000",
                  fontWeight: 400,
                  fontSize: matches ? 13 : 14,
                  transition: "0.2s",
                  border: "1px solid gray",
                }}
              >
               ₹{w}
              </div></div>:<div></div>}
              </div>
            ))}
          </div>
        </div>



        {/* QUANTITY SELECTOR */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: matches ? "flex-start" : "center",
            gap: matches ? 10 : 5,
            width: matches ? "100%" : "auto",
            marginLeft: matches ? 'a' : 250,
           
          }}
        >
          <span
            style={{
              fontWeight: 500,
              marginLeft: matches ? 0 : -30,
              marginTop: matches ? 0 : -20,
              fontSize: matches ? "16px" : "18px",
            }}
          >
            Quantity
          </span>
          <div style={{ display: "flex", gap: 10, alignItems: "center",marginTop:10 }}>
            <button
              onClick={subQuantity}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                background: "rgba(26,26,26,0.1)",
                width: matches ? 45 : 50,
                height: matches ? 45 : 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
              }}
            >
              <Image src="/images/minus.png" alt="minus" width={20} height={20} />
            </button>

            <span
              style={{
                fontWeight: 600,
                fontSize: matches ? 16 : 18,
                minWidth: 20,
                textAlign: "center",
              }}
            >
              {quantity}
            </span>

            <button
              onClick={addQuantity}
              style={{
                cursor: "pointer",
                borderRadius: "50%",
                background: "rgba(26,26,26,0.1)",
                width: matches ? 45 : 50,
                height: matches ? 45 : 50,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "none",
              }}
            >
              <Image src="/images/plus.png" alt="plus" width={20} height={20} />
            </button>
          </div>
        </div>
      </div>



      {/* BUTTONS SECTION */}
      <div
        style={{
          display: "flex",
          flexDirection: matches ? "column" : "row",
          // marginTop: matches ? 40 : 70,
          gap: matches ? 15 : 250,
          marginLeft: matches ? -35 : -80,
          width: "100%",
          marginTop:matches?'15%':'6%',
          position:'absolute',

        
        }}
      >
        {/* ADD TO CART BUTTON */}
        <div style={{ width: matches ? "100%" : "auto" }}>
          <button
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: "flex",
              marginLeft: matches ? "0" : "70%",
              marginTop: matches ? 0 : 20,
              borderRadius: matches ? 10 : 25,
              backgroundColor: "transparent",
              border: "1px solid rgb(13, 156, 67)",
              color: "rgb(13, 156, 67)",
              width: matches ? "93%" : "245%",
              height: matches ? 45 : 50,
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: matches ? "14px" : "16px",
              cursor: "pointer",
              transition: "0.2s",
              boxShadow: hovered ? "0 0 0 3px rgb(13, 156, 67)" : "none",
            }}
          >
            Add to Cart
          </button>
        </div>

        {/* BUY NOW BUTTON */}
        <div style={{ width: matches ? "100%" : "auto" }}>
          <button
            style={{
              display: "flex",
              marginLeft: matches ? "0" : "50%",
              marginTop: matches ? 0 : 20,
              borderRadius: matches ? 10 : 25,
              backgroundColor: "rgb(13, 156, 67)",
              color: "#fff",
              width: matches ? "93%" : "295%",
              height: matches ? 45 : 50,
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 500,
              fontSize: matches ? "14px" : "16px",
              cursor: "pointer",
              border: "none",
            }}
          >
            Buy it Now
          </button>
        </div>
      </div>

    


    
      <Divider
        style={{
          display: "flex",
          marginTop: matches ? '40%' : '27%',
          color: "#cebdd8ff",
          width: matches?'93%':"100%",
          border: "none",
          borderTop: "1px solid #cebdd8ff",
          position:'absolute',
          marginLeft:matches?-35:'-1%'
        }}
      />
    </div>
  );
}

