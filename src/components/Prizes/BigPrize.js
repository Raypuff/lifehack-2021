import React from "react";
import styles from "./Prizes.module.css";

function BigPrize(props) {
  return (
    <div
      className={styles.bigPrizeContainer}
      style={{ marginTop: props.label !== "First Prize" ? "2rem" : "0" }}
    >
      <img
        className={styles.bigPrizeLogo}
        src={props.logo}
        alt={props.label}
        loading="lazy"
      />
      <div className={styles.bigPrizeText}>
        <p className={styles.bigPrizeLabel}>{props.label}</p>
        <p className={styles.bigPrizeAward}>{props.award}</p>
      </div>
    </div>
  );
}

export default BigPrize;
