import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./Prizes.module.css";

const BigPrize = (props) => {
  const { logo, label, award, isFirstPrize } = props;

  return (
    <Fade bottom>
      <div
        className={
          isFirstPrize
            ? styles.bigFirstPrizeContainer
            : styles.bigPrizeContainer
        }
      >
        <img
          className={styles.bigPrizeLogo}
          src={logo}
          alt={label}
          loading="lazy"
        />
        <div className={styles.bigPrizeText}>
          <p className={styles.bigPrizeLabel}>{label}</p>
          <p className={styles.bigPrizeAward}>{award}</p>
        </div>
      </div>
    </Fade>
  );
};

export default BigPrize;
