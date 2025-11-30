import { MoveLeft } from "lucide-react";
import styles from "./Header.module.css";
import User from "./user";
import Image from "next/image";
import CategoryComponent from "./Category";
import SearchBar from "./SearchBar";
import DrinksComponent from "./Drinks";
import SnacksComponent from "./Snacks";
import { Article } from "@mui/icons-material";
import Artical from "./Artical"
export default function Header() {
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
     <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom:'10px'}}>
        <SearchBar/>
      </div>
      <Artical/>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' ,marginBottom:'30px'}}>
        <CategoryComponent />

      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginBottom:'30px'}}>
        <DrinksComponent />
      </div>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <SnacksComponent />
        
      </div>
    </div>
  );
}
