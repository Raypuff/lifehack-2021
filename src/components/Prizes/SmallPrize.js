import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./Prizes.module.css";

function SmallPrize(props) {
  return (
    <Fade bottom>
      <div className={styles.smallPrizeContainer}>
        <p className={styles.smallPrizeLabel}>{props.label}</p>
        <p className={styles.smallPrizeAward}>{props.award}</p>
      </div>
    </Fade>
  );
}

export default SmallPrize;
