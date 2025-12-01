"use client"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from "next/image";
import { useRef, useState } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';


export default function DrinksComponent()
{  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: matches?5:7,
    slidesToScroll: 1,
    arrows:false
  };
   const sliderRef=useRef()
   const [index,setIndex]=useState(0)
  const serverUrl=process.env.serverUrl
   var data=[{categoryid:1,categoryname:'Coca Cola',icon:'coca.png'},
    {categoryid:2,categoryname:'Frooti',icon:'frooti.png'},
    {categoryid:3,categoryname:'Miranda',icon:'miranda.png'},
    {categoryid:4,categoryname:'RealJose',icon:'realjose.png'},
    {categoryid:5,categoryname:'Red Bull',icon:'redbull.png'},
    {categoryid:2,categoryname:'Frooti',icon:'frooti.png'},
    {categoryid:3,categoryname:'Miranda',icon:'miranda.png'},
     {categoryid:2,categoryname:'Frooti',icon:'frooti.png'},
    {categoryid:3,categoryname:'Miranda',icon:'miranda.png'},
   ]
   const handleCategoryClick=(cid)=>{
    setIndex(cid)

   }
 function showCategory(){
  return data.map((item)=>{
    return(<div  >
     <div onClick={()=>handleCategoryClick(item.categoryid)}  style={{cursor:'pointer', width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',borderBottom:item.categoryid==index?'4px solid red':''}}>
     <div style={{display:'flex',alignItems:'center',justifyContent:'center',width:'70%',height:'70%',borderRadius:'50%'}}>
     <img style={{width:'100%'}} src={`${serverUrl}/images/${item.icon}`}/>
     </div>
     <div style={{fontSize:matches?'0.7rem':'1rem'}}>{item.categoryname}</div>
     </div>
  
   </div>)
 })

}
const handlePrevious=()=>{
sliderRef.current.slickPrev()
}
const handleNext=()=>{
  sliderRef.current.slickNext()
}
return(


<div style={{width:'95%',position:'relative'}}>
   <div style={{fontSize:20,fontWeight:'bold',marginBottom:10,marginLeft:'6px'}}>Drinks</div>
{matches?<></>:<Image onClick={handlePrevious} style={{position:'absolute',top:'42%',zIndex:2,cursor:'pointer'}} src="/images/left.png" width={35} height={35} alt="" />}
  <Slider ref={sliderRef} {...settings}>
   {showCategory()}
   </Slider>

     {matches?<></>:<Image onClick={handleNext} style={{position:'absolute',top:'42%',right:'-0.3%',zIndex:2,cursor:'pointer'}} src="/images/next.png" width={35} height={35} alt="" />}
     </div>
)

}


