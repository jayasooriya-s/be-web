import React from "react";
import styles from "./VideoBanner.module.css";
import ReactPlayer from "react-player";
import { AiFillPlayCircle } from "react-icons/ai";
import banner from "../../public/video-banner.png";
function VideoBanner() {
  return (
    <div className={styles.container}>
      <div className={styles.stripe}></div>
      <div className={styles.background_container}>
        <div className={styles.stripe}></div>
        <div className={styles.video_player}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
            width="100%"
            height="100%"
            playIcon={<AiFillPlayCircle className={styles.play_button} />}
            light={banner.src}
          />
        </div>
      </div>
    </div>
  );
}

export default VideoBanner;
