import React from "react";
import styles from "./Prizes.module.css";

function SmallPrize(props) {
  return (
    <div className={styles.smallPrizeContainer}>
      <p className={styles.smallPrizeLabel}>{props.label}</p>
      <p className={styles.smallPrizeAward}>{props.award}</p>
    </div>
  );
}

export default SmallPrize;
