import React from "react";
import styles from "./Prizes.module.css";
import BigPrize from "./BigPrize";
import SmallPrize from "./SmallPrize";
import FirstPrizeLogo from "../../images/prizes/idea1.svg";
import SecondPrizeLogo from "../../images/prizes/idea2.svg";
import ThirdPrizeLogo from "../../images/prizes/idea3.svg";

const firstPrize = (
  <BigPrize
    logo={FirstPrizeLogo}
    label="First Prize"
    award="S$3200"
    isFirstPrize
  />
);
const secondPrize = (
  <BigPrize logo={SecondPrizeLogo} label="Second Prize" award="S$2400" />
);
const thirdPrize = (
  <BigPrize logo={ThirdPrizeLogo} label="Third Prize" award="S$1600" />
);

const smallPrizes = [
  "Most Impressive Pre-University Hack",
  "Most Outstanding Undergraduate Hack",
  "Most Relevant To Both Themes",
  "Most Boomer-Friendly Hack",
  "Luckiest Team",
  "Shh!! Secret Special Category...",
];

const Prizes = () => {
  return (
    <div className={styles.background}>
      {" "}
      <div className={styles.prizes} name="prizes">
        <h1 className={styles.header}>Prizes</h1>
        <p className={styles.subheader}>
          Prizes are awarded to winners from each Theme. Meaning that up to
          S$17,000 worth of prizes are being given away!
        </p>

        <div className={styles.bigPrizes}>
          {secondPrize}
          {firstPrize}
          {thirdPrize}
        </div>
        <div className={styles.bigPrizesMobile}>
          {firstPrize}
          {secondPrize}
          {thirdPrize}
        </div>
        <p className={styles.subheader}>
          Don&apos;t think you could win the top prizes? You can still try for
          the prizes in our special category too! Each team will be awarded
          S$400 as well as 4 of our very own SOCcats!
        </p>

        <div className={styles.smallPrizes}>
          {smallPrizes.map((prize, idx) => <SmallPrize label={prize} key={"smallprize-" + idx} />)}
        </div>
      </div>
    </div>
  );
};

export default Prizes;
