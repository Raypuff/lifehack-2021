import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./Prizes.module.css";

const SmallPrize = (props) => {
  return (
    <Fade bottom>
      <div className={styles.smallPrizeContainer}>
        <p className={styles.smallPrizeLabel}>{props.label}</p>
        <a
          className={styles.smallPrizeLink}
          href={props.link}
          target="_blank"
          rel="noreferrer"
        >
          {props.winner}
        </a>
      </div>
    </Fade>
  );
};

export default SmallPrize;
