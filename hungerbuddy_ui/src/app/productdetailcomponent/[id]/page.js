"use client";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AddToCartComponent from "../../purchaseinterface/AddToCartComponent";
import ProductImageComponent from "../../purchaseinterface/ProductImageComponent";
import ProductInfoComponent from "../../purchaseinterface/ProductInfoComponent";
import ProductRateComponent from "../../purchaseinterface/ProductRateComponent";
import SimilarAvailableComponent from "../../purchaseinterface/SimilarAvailableComponent";
import Card from "../../purchaseinterface/Card"
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { postData } from "../../services/FetchNodeServices";
import FooterComponent from "../../components/Foter";
import Header from "../../components/Header";
export default function ProductDetailComponent() {
  var params = useParams()
  const { id } = useParams()
  const [foodItem, setFoodItem] = useState({})
  const [categoryList, setCategoryList] = useState([])

  const aboutRef = useRef()
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));



  const fetchFoodDetails = async () => {

    var response = await postData("users/fetch_all_fooditems_by_id", { fooditemid: id });

    //alert(JSON.stringify(response.data))

    setFoodItem(response.data)

    await fetchAllFoodByCategoryId(response.data.categoryid)
  }

  const fetchAllFoodByCategoryId = async (cn) => {
    var response = await postData("users/fetch_all_fooditems_by_category_id", { categoryid: cn });
    //  alert(JSON.stringify(response.data))
    setCategoryList(response.data)
  };

  useEffect(function () {
    fetchFoodDetails()
  }, [id])

  return (
    <div>
      <div>
        <Header dataRef={aboutRef} />
      </div>

      <div
        style={{
          background: "#F3ECF7",
          minHeight: "100vh",
          width: matches ? "100%" : "95%",
          borderRadius: matches ? 0 : 20,
          marginLeft: matches ? "0" : "2%",
          marginTop: matches ? 0 : 20,
        }}
      >
        
          <div style={{ padding: "15px" }}>

            <Card data={foodItem}/>


           


          </div>
     
      </div>
    </div>
  );
}