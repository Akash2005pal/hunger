import Image from "next/image";
import { Avatar, Badge } from "@mui/material";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
export default function User({ totalItems }) {
  var navigate = useRouter()
// var user = useSelector((state)=>state.user)
var user=localStorage.getItem('USER')

var userData 
if(user==null)
{
  userData="Not Login"

}
else
{
  userData=Object.values(user)
  alert(userData.studentname)

}
  return (<div
  
    style={{
      cursor:'pointer',
      
      display: "flex",
      alignItems: "center",
      justifyContent: 'space-between',
      width: "10%",
      padding:10,
    }}
  >
    <Badge badgeContent={totalItems} color="error">
<div
onClick={()=>navigate.push("/cart")}
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
      
        <Image src="/images/cart.png" width={25} height={25} alt="" />
      </div>
      </Badge>
      <div style={{ position: "relative",}}>
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: 10,
        left: 2,
        position: "absolute",
        width: 45,
        height: 15,
        background: "#30336b",
        border: "0.5 solid #fff",
        borderRadius: 10,
      }}
    >
      <span style={{ color: "#fff", fontSize: 9, fontWeight: "bold" }}>
        &#8377;20
      </span>
    </div>
    </div>

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
      <Image src="/images/wallet.jpg" width={25} height={25} alt="" />
    </div>
    {userData=="Not Login"?
    <div
    onClick={()=>navigate.push("singin")}
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
      <Image src="/images/user1.png" width={25} height={25} alt="" />
    </div>:<div><Avatar>{userData?.studentname}</Avatar> </div>}
     </div>

  )
}