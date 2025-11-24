'use client'
import Image from 'next/image';
import styles from './fooditem.module.css';

export default function FoodItemCard() {
    const serverUrl=process.env.serverUrl
var data=[{fooditemid:1,  fooditemname:'Poha', fooditemtype:'Veg', fooditemtaste:'Spicy', ingredients:'Rice,Vegitables', fullprice:400, halfprice:270, offerprice:299, picture:'poha.png', rating:5.0, status:'Available'},
  {fooditemid:2,  fooditemname:'Jalebi', fooditemtype:'Veg', fooditemtaste:'', ingredients:'Rice,Vegitables', fullprice:600, halfprice:300, offerprice:0, picture:'jalbi.png', rating:5.0, status:'Available'},
  {fooditemid:3,  fooditemname:'Samosa', fooditemtype:'Veg', fooditemtaste:'Spicy', ingredients:'Rice,Vegitables', fullprice:120, halfprice:70, offerprice:100, picture:'samosa.png', rating:5.0, status:'Available'},
  {fooditemid:4,  fooditemname:'Dosa', fooditemtype:'NonVeg', fooditemtaste:'Medium', ingredients:'Rice,Vegitables', fullprice:300, halfprice:0, offerprice:180, picture:'dosha.png', rating:5.0, status:'Available'},
]
const showFood=()=>{
return data.map((item)=>{
var percent=(item.fullprice-item.offerprice)/item.fullprice*100

return ( <div className={styles.card}>
      <div className={styles.imageContainer}>
        <div className={styles.imageStyle}>
        <img
          src={`${serverUrl}/images/${item.picture}`}
          alt=""
        style={{width:'100%',height:'100'}}
        />
        </div>
        <div className={styles.discountBadge}>
          {item.offerprice==0?<></>:<>{percent.toFixed(0)}% OFF UPTO ₹{item.fullprice-item.offerprice}</>}
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.name}>{item.fooditemtype=='Veg'?<img src={`${serverUrl}/images/veg.png`} width='16'/>:<img src={`${serverUrl}/images/nonveg.png`} width='16'/>} <span style={{marginLeft:'2%'}}> {item.fooditemname}</span><span style={{marginLeft:'4%'}}>{item.fooditemtaste=='Spicy'?<img src={`${serverUrl}/images/chilli.png`} width={16}/>:<></>}</span> </h3>
        
        <div className={styles.ratingContainer}>
          <img src={`${serverUrl}/images/star.png`} alt='' width={20} height={20} />
          <span className={styles.rating}>{item.rating.toFixed(1)}</span>
          <span className={styles.separator}>•</span>
          <span className={styles.deliveryTime}>30-35 mins</span>
        </div>
        <p className={styles.location}>{item.offerprice==0?<span style={{fontWeight:'bold',color:'#000'}}>₹{item.fullprice}</span>:<><span style={{fontWeight:'bold',marginRight:'2%',color:'#000'}}>₹{item.offerprice}</span> <s>₹{item.fullprice}</s></>}</p>
       
        <p className={styles.cuisine}>North Indian</p>
        
      </div>
    </div>)


})

}


  return (<div style={{width:'100%', marginTop:40}}>
    <div style={{fontSize:20,fontWeight:'bold',marginBottom:10,marginLeft:'6%'}}>Today's Menu</div>
    <div style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
    {showFood()}
    </div>
  </div>
    );
}
