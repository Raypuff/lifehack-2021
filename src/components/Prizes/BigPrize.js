import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./Prizes.module.css";

const BigPrize = (props) => {
  const { logo, label, winner, link, award, isFirstPrize } = props;

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
          <a
            className={styles.bigPrizeLink}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {winner}
          </a>
        </div>
      </div>
    </Fade>
  );
};

export default BigPrize;
