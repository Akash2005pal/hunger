"use client";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import AddToCartComponent from "../../purchaseinterface/AddToCartComponent";
import ProductImageComponent from "../../purchaseinterface/ProductImageComponent";
import ProductInfoComponent from "../../purchaseinterface/ProductInfoComponent";
import ProductRateComponent from "../../purchaseinterface/ProductRateComponent";
import SimilarAvailableComponent from "../../purchaseinterface/SimilarAvailableComponent";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { postData } from "@/app/services/FetchNodeServices";
import Header from "@/app/components/Header";
import { Grid } from "@mui/material";
import { useSelector } from "react-redux";
import Footer from "@/app/components/Foter";

export default function ProductDetailComponent() {
  const { id } = useParams();
  const cart = useSelector((state) => state.cart);

  const [foodItem, setFoodItem] = useState({});
  const [categoryList, setCategoryList] = useState([]);
  const [pictureList, setPictureList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const aboutRef = useRef();

  // ✅ MOBILE MEDIA QUERY
  const matches = useMediaQuery("(max-width:768px)");

  const fetchFoodDetails = async () => {
    let data = {};
    const cartkeys = Object.keys(cart);

    if (cartkeys.includes(id)) {
      data = cart[id];
      setFoodItem(data);
    } else {
      const response = await postData(
        "users/fetch_all_fooditems_by_id",
        { fooditemid: id }
      );
      data = response.data;
      data["qty"] = 0;
      setFoodItem(data);
    }

    fetchAllFoodByCategoryId(data?.categoryid);
  };

  const fetchAllFoodByCategoryId = async (cn) => {
    const response = await postData(
      "users/fetch_all_fooditems_by_category_id",
      { categoryid: cn }
    );
    setCategoryList(response.data);
  };

  const fetchAllFoodPicture = async () => {
    const response = await postData(
      "pictures/fetch_all_picture",
      { fooditemid: id }
    );
    setPictureList(response.data);
  };

  useEffect(() => {
    fetchFoodDetails();
    fetchAllFoodPicture();
  }, [id]);

  return (
    <div>
      <Header dataRef={aboutRef} />

      {/* MAIN CONTAINER */}
      <div
        style={{
          background: "#F3ECF7",
          minHeight: "100vh",
          width: matches ? "100%" : "95%",
          borderRadius: matches ? 0 : 20,
          marginLeft: matches ? 0 : "2%",
          marginTop: matches ? 0 : 20,
          padding: matches ? 12 : 40, // ✅ MOBILE FIX
        }}
      >
        <Grid container spacing={2}>
          {/* LEFT : IMAGE */}
          <Grid size={matches ? 12 : 6}>
            <ProductImageComponent
              data={foodItem}
              pictures={pictureList}
            />
          </Grid>

          {/* RIGHT : DETAILS */}
          <Grid
            size={matches ? 12 : 6}
            style={{ padding: matches ? 0 : 40 }} // ✅ MOBILE FIX
          >
            <div style={{ marginBottom: matches ? 10 : 20 }}>
              <ProductRateComponent data={foodItem} />
            </div>

            <div style={{ marginBottom: matches ? 12 : 20 }}>
              <AddToCartComponent
                data={foodItem}
                refresh={refresh}
                setRefresh={setRefresh}
              />
            </div>

            <div style={{ width: "100%", marginBottom: matches ? 12 : 20 }}>
              <SimilarAvailableComponent data={categoryList} />
            </div>

            <div>
              <ProductInfoComponent data={foodItem} />
            </div>
          </Grid>
        </Grid>
      </div>
      <Footer/>
    </div>
  );
}
