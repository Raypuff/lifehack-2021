import React from "react";
import styles from "./Prizes.module.css";
import BigPrize from "./BigPrize";
import SmallPrize from "./SmallPrize";
import FirstPrizeLogo from "../../images/prizes/idea1.svg";
import SecondPrizeLogo from "../../images/prizes/idea2.svg";
import ThirdPrizeLogo from "../../images/prizes/idea3.svg";

const firstPrizeEd = (
  <BigPrize
    logo={FirstPrizeLogo}
    label="First Prize"
    winner="EduHome"
    link="https://lifehack-2021.devpost.com/submissions/249999-eduhome-059"
    award="S$3200"
    isFirstPrize
  />
);
const secondPrizeEd = (
  <BigPrize
    logo={SecondPrizeLogo}
    label="Second Prize"
    winner="Pavo"
    link="https://lifehack-2021.devpost.com/submissions/250040-exclusive-cs-nerds-036"
    award="S$2400"
  />
);
const thirdPrizeEd = (
  <BigPrize
    logo={ThirdPrizeLogo}
    label="Third Prize"
    winner="Langeration"
    link="https://lifehack-2021.devpost.com/submissions/250106-gme-010"
    award="S$1600"
  />
);

const firstPrizeSo = (
  <BigPrize
    logo={FirstPrizeLogo}
    label="First Prize"
    winner="GuniCorn"
    link="https://lifehack-2021.devpost.com/submissions/250037-team-noobs-087-gunicorn"
    award="S$3200"
    isFirstPrize
  />
);
const secondPrizeSo = (
  <BigPrize
    logo={SecondPrizeLogo}
    label="Second Prize"
    winner="MediaTE"
    link="https://lifehack-2021.devpost.com/submissions/249909-programmererror-126"
    award="S$2400"
  />
);
const thirdPrizeSo = (
  <BigPrize
    logo={ThirdPrizeLogo}
    label="Third Prize"
    winner="ForeignInSing"
    link="https://lifehack-2021.devpost.com/submissions/250077-danbing-110"
    award="S$1600"
  />
);

const smallPrizes = [
  [
    "Most Impressive Pre-University Hack",
    "CoReality",
    "https://lifehack-2021.devpost.com/submissions/250129-dreamscape-037",
  ],
  [
    "Most Outstanding Undergraduate Hack",
    "TeleAsk",
    "https://lifehack-2021.devpost.com/submissions/250085-chongsters-119",
  ],
  [
    "Most Relevant To Both Themes",
    "MindHack",
    "https://lifehack-2021.devpost.com/submissions/250082-findnewbf-capt16-61-052",
  ],
  [
    "Most Boomer-Friendly",
    "Cat Cafe",
    "https://lifehack-2021.devpost.com/submissions/250041-tealturtle-050",
  ],
  // ["Most Impressive Usage of Data"],
  [
    "Luckiest Team",
    "Darubi",
    "https://lifehack-2021.devpost.com/submissions/250089-darubi-035",
  ],
  [
    "Most Misleading Title",
    "PinMeDown",
    "https://lifehack-2021.devpost.com/submissions/250091-yeetcoders-007",
  ],
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
        <h2>Education Theme</h2>
        <div className={styles.bigPrizes}>
          {secondPrizeEd}
          {firstPrizeEd}
          {thirdPrizeEd}
        </div>
        <div className={styles.bigPrizesMobile}>
          {firstPrizeEd}
          {secondPrizeEd}
          {thirdPrizeEd}
        </div>
        <h2>Social Theme</h2>
        <div className={styles.bigPrizes}>
          {secondPrizeSo}
          {firstPrizeSo}
          {thirdPrizeSo}
        </div>
        <div className={styles.bigPrizesMobile}>
          {firstPrizeSo}
          {secondPrizeSo}
          {thirdPrizeSo}
        </div>

        <p className={styles.subheader}>
          Don&apos;t think you could win the top prizes? You can still try for
          the prizes in our special category too! Each team will be awarded
          S$400 as well as 4 of our very own SOCcats!
        </p>

        <div className={styles.smallPrizes}>
          {smallPrizes.map((prize, idx) => (
            <SmallPrize
              label={prize[0]}
              key={"smallprize-" + idx}
              winner={prize[1]}
              link={prize[2]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prizes;
