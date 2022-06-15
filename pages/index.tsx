import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import crate from "../public/neon-crate.png";
import bulb from "../public/bulb.png";
import {
  SmallBlackButton,
  VideoBanner,
  Countdown,
  ContainerWithButton,
} from "../components";

const Home: NextPage = () => {
  return (
    <div>
      <div className={styles.first_banner}>
        <div className={styles.small_title}>
          WELCOME TO{" "}
          <span className={styles.title_span}> BIRTHDAY ENGINEERS</span>!
        </div>
        <div className={styles.big_title}>
          <span className={styles.title_span}>BE</span> HANDCRAFT HAPPINESS
          HERE!!
        </div>
      </div>

      <div className={styles.second_banner}>
        <div className={styles.second_banner_row_1}>
          <div className={styles.second_banner_row_1_text}>
            Lorem idivsum dolor sit amet, consectetur adipiscing elit, sed do ei
            sed do ei sed do do
          </div>
          <div style={{ margin: 24 }}>
            <SmallBlackButton label=" BOOK HAPPINESS" />
          </div>
        </div>
        <div className={styles.second_banner_row_2}>
          <Image
            src={crate.src}
            alt=""
            width={250}
            height={280}
            layout="intrinsic"
          ></Image>
        </div>
      </div>
      <div>
        <VideoBanner />
      </div>
      <div className={styles.bulb}>
        <Image
          src={bulb.src}
          alt=""
          width={293}
          height={416}
          layout="intrinsic"
        />
      </div>
      <div className={styles.countdown}>
        <Countdown />
        <Countdown />
        <Countdown />
      </div>
      <div className={styles.small_container_with_button}>
        <ContainerWithButton></ContainerWithButton>
      </div>
    </div>
  );
};

export default Home;
