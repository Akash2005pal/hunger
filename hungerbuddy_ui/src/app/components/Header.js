"use client";
import { MoveLeft } from "lucide-react";
import styles from "./Header.module.css";
import User from "./user";
import Image from "next/image";
import CategoryComponent from "./Category";
import SearchBar from "./SearchBar";
import DrinksComponent from "./Drinks";
import SnacksComponent from "./Snacks";
import Artical from "./Artical";
import { useEffect, useState } from "react";
import { getData } from "../services/FetchNodeServices";

export default function Header() {
  const [listCategory, setListCategory] = useState([]);

  const fetchAllCategory = async () => {
    const response = await getData("users/fetch_all_category"); // ✔ corrected
    setListCategory(response.data);
  };

  useEffect(() => {
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
        <User />
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "10px" }}>
        <SearchBar />
      </div>

      <Artical />

      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "30px" }}>
        <CategoryComponent data={listCategory} />
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginBottom: "30px" }}>
        <DrinksComponent />
      </div>

      <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <SnacksComponent />
      </div>
    </div>
  );
}
