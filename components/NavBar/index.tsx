import React from "react";
import styles from "./NavBar.module.css";
import logo from "../../public/logo.png";
import Image from "next/image";
import SearchBar from "../SearchBar";
import Link from "next/link";
function NavBar() {
  return (
    <div className={styles.nav_bar}>
      <div>
        <Link href={"/"}>
          <div className={styles.logo}>
            <Image
              src={logo.src}
              alt=""
              layout="intrinsic"
              width={178}
              height={185}
            />
          </div>
        </Link>
      </div>

      <div className={styles.nav_item}>
        <ul>
          <li className={styles.nav_li}>
            <Link href={"/service"}>
              <a className={styles.nav_li}>SERVICE</a>
            </Link>
          </li>
          <li className={styles.nav_li}>
            <Link href={"/accomplishment"}>
              <a className={styles.nav_li}>ACCOMPLISHMENT</a>
            </Link>
          </li>
          <li className={styles.nav_li}>PEOPLE</li>
          <li className={styles.nav_li}>ABOUT</li>
          <li className={styles.nav_li}>BLOG</li>
          <li className={styles.nav_li}>BE FOR CAUSE</li>
          <li className={styles.nav_li}>CONTACT</li>
          <li className={styles.nav_li}>
            <SearchBar></SearchBar>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavBar;
