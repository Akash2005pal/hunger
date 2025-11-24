import Image from "next/image";
import Link from "next/link";
import styles from "./foter.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.logoBox}>
          <h1>HUNGER BUDDY</h1>
          <p>© 2025 Hunger Buddy Limited</p>
        </div>

        <div className={styles.column}>
          <h4>Company</h4>
          <Link href="#">About Us</Link>
          <Link href="#">HungerBuddy Corporate</Link>
          <Link href="#">Careers</Link>
          <Link href="#">Team</Link>
          <Link href="#">HungerBuddy One</Link>
          <Link href="#">HungerBuddy Instamart</Link>
          <Link href="#">HungerBuddy Dineout</Link>
          <Link href="#">Minis</Link>
          <Link href="#">Pyng</Link>
        </div>

        <div className={styles.column}>
          <h4>Contact Us</h4>
          <Link href="#">Help & Support</Link>
          <Link href="#">Partner With Us</Link>
          <Link href="#">Ride With Us</Link>

          <h4 style={{ marginTop: "20px" }}>Legal</h4>
          <Link href="#">Terms & Conditions</Link>
          <Link href="#">Cookie Policy</Link>
          <Link href="#">Privacy Policy</Link>
        </div>

        <div className={styles.column}>
          <h4>Available in:</h4>
          <Link href="#">Bangalore</Link>
          <Link href="#">Gurgaon</Link>
          <Link href="#">Hyderabad</Link>
          <Link href="#">Delhi</Link>
          <Link href="#">Mumbai</Link>
          <Link href="#">Pune</Link>

          <select className={styles.citySelect}>
            <option>685 cities</option>
          </select>
        </div>

        <div className={styles.column}>
          <h4>Life at HungerBuddy</h4>
          <Link href="#">Explore With Swiggy</Link>
          <Link href="#">HungerBuddy News</Link>
          <Link href="#">Snackables</Link>

          <h4 style={{ marginTop: "20px" }}>Social Links</h4>
          <div className={styles.socialRow}>
            <Image src="/images/linkedin-sign.png" width={20} height={20} alt="linkedin" />
            <Image src="/images/instagram.png" width={20} height={20} alt="instagram" />
            <Image src="/images/facebook.png" width={20} height={20} alt="facebook" />
            <Image src="/images/pinterest-logo.png" width={20} height={20} alt="pinterest" />
            <Image src="/images/social.png" width={20} height={20} alt="twitter" />
          </div>
        </div>
      </div>

      <div className={styles.bottomRow}>
        <p>For better experience, download the Hunger Buddy app now</p>
        <div className={styles.storeRow}>
          <Image src="/images/appstore.png" width={150} height={45} alt="appstore" />
          <Image src="/images/google.png" width={150} height={45} alt="playstore" />
        </div>
      </div>
    </footer>
  );
}
