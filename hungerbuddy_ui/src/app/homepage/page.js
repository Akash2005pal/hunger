'use client'
import AdvertisementComponent from "../components/Artical"
import DrinksComponent from "../components/Drinks"
import FoodItemCard from "../components/FooditemCard"
import FooterComponent from "../components/Foter"
import Header from "../components/Header"
import { useRef, useState, useEffect } from "react"
import SnacksComponent from "../components/Snacks"
import { getData, postData, serverURL } from "../services/FetchNodeServices"
import ScrollProductList from "../purchaseinterface/ScrollProductList"
import { useRouter } from "next/navigation"
export default function HomePage() {
  const aboutRef = useRef(null)
  const [snacksList, setSnacksList] = useState([])
  const [drinkList, setDrinkList] = useState([])
  const [foodList, setFoodList] = useState([])
  var navigate = useRouter()

  const fetchAllFood = async (cn) => {
    var response = await postData("users/fetch_all_fooditems_by_category", { categoryname: cn });
    if (cn == 'Snacks')
      setSnacksList(response.data);
    else if (cn == "Drinks")
      setDrinkList(response.data)

  };

  const fetchAllFoodItems = async () => {
    var response = await getData("users/fetch_all_fooditems");

    setFoodList(response.data);

  };

  useEffect(function () {
    fetchAllFood('Snacks');
    fetchAllFood('Drinks')
    fetchAllFoodItems()
  }, []);
  return (<div>
    <div>
      <Header dataRef={aboutRef} foodList={foodList} setFoodList={setFoodList} />
    </div>

    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <SnacksComponent data={snacksList} />
    </div>

    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <DrinksComponent data={drinkList} />
    </div>


    <div ref={aboutRef}>
      <FoodItemCard data={foodList} />
    </div>
    <div style={{ width: '20%' }}>
      <ScrollProductList />
    </div>
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <AdvertisementComponent />
    </div>
    <FooterComponent />

  </div>)
}