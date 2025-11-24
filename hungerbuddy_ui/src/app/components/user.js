import Image from "next/image";
export default function User()
{
    return( <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: 'space-between',
              width:90
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                top: 60,
                left:-2,
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
                <Image src="/images/user1.png" width={25} height={25} alt="" />
              </div>
            
          </div>
        
      )
}