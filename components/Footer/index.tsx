import React from "react";
import styles from "./Footer.module.css";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { FiTwitter } from "react-icons/fi";
import SubscribeEmail from "../SubscribeEmail";
import Image from "next/image";
import be from "../../public/BE.png";
function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_container_left}>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum.
        </p>

        <div className={styles.social}>
          <AiOutlineInstagram />
          <FiTwitter />
          <AiOutlineYoutube />
        </div>
      </div>
      <div className={styles.footer_container_right}>
        <ul className={styles.footer_ul}>
          <li className={styles.footer_li}>SERVICE</li>
          <li className={styles.footer_li}>ACCOMPLISHMENT</li>
          <li className={styles.footer_li}>PEOPLE</li>
          <li className={styles.footer_li}>ABOUT</li>
          <li className={styles.footer_li}>BLOG</li>
          <li className={styles.footer_li}>BE FOR CAUSE</li>
          <li className={styles.footer_li}>CONTACT</li>
        </ul>
        <div className={styles.subscribe}>
          <SubscribeEmail></SubscribeEmail>
        </div>
        <div className={styles.text_logo_container}>
          <div className={styles.text_logo}>
            <Image
              src={be.src}
              alt=""
              layout="intrinsic"
              width={249}
              height={229}
            ></Image>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
