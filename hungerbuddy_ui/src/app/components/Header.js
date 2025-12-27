"use client";

import styles from "./Header.module.css";
import User from "./user";
import Image from "next/image";
import CategoryComponent from "./Category";
import SearchBar from "./SearchBar";

import { useEffect, useState } from "react";
import { getData } from "../services/FetchNodeServices";
import {useSelector} from "react-redux"

export default function Header({dataRef,foodList,setFoodList}) {
  const [categoryList, setCategoryList] = useState([]);
  var cart=useSelector((state)=>state.cart)
  var totalItems=Object.keys(cart)
  var total=totalItems?.length
  console.log("Total:",total)
  const fetchAllCategory = async () => {
    const response = await getData("users/fetch_all_category"); // ✔ corrected
    setCategoryList(response.data);
  };

  useEffect(function()  {
    fetchAllCategory();
  }, []);

  return (
    <div className={styles.maincontainer}>
      <div className={styles.stylebar}>
        <div className={styles.navbar}>
          <div className={styles.styletext}>
            <div className={styles.styleone}>HungerBuddy in</div>
            <div className={styles.styletwo}>20 minutes</div>
            <div>
              <span className={styles.stylethree}>Home</span> -{" "}
              <span className={styles.stylename}>Jackie Thomas</span>
            </div>
          </div>
        </div>
        <User totalItems={total}/>
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <SearchBar />
      </div>

     

      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "30px" }}>
        <CategoryComponent dataRef={dataRef} data={categoryList}  foodList={foodList} setFoodList={setFoodList}/>
      </div>

      
    </div>
  );
}
