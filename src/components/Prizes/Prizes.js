import styles from "./Prizes.module.css";
import BigPrize from "./BigPrize";
import SmallPrize from "./SmallPrize";
import FirstPrizeLogo from "../../images/prizes/idea1.svg";
import SecondPrizeLogo from "../../images/prizes/idea2.svg";
import ThirdPrizeLogo from "../../images/prizes/idea3.svg";

const Prizes = () => {
  return (
    <div className={styles.prizes} name="prizes">
      <h1 className={styles.header}>Prizes</h1>
      <p className={styles.subheader}>
        Prizes are awarded to winners from each Theme. Meaning that up to S$17,000 worth of prizes are being given away!
      </p>
      <div className={styles.bigPrizes}>
        <BigPrize logo={SecondPrizeLogo} label="Third Prize" award="S$2400" />
        <BigPrize logo={FirstPrizeLogo} label="First Prize" award="S$3200" />
        <BigPrize logo={ThirdPrizeLogo} label="Second Prize" award="S$1600" />
      </div>
      <div className={styles.bigPrizesMobile}>
        <BigPrize logo={FirstPrizeLogo} label="First Prize" award="S$3200" />
        <BigPrize logo={SecondPrizeLogo} label="Second Prize" award="S$2400" />
        <BigPrize logo={ThirdPrizeLogo} label="Third Prize" award="S$1600" />
      </div>
      <hr className={styles.divider} />
      <div className={styles.smallPrizes}>
      <SmallPrize label="Special Category Prizes" award="S$400 + 4 SOCcats" />
        {/* <SmallPrize label="Most Impressive Pre-University Hack" award="S$400" />
        <SmallPrize label="Most Outstanding Undergraduate Hack" award="$$$" />
        <SmallPrize label="Most Relevant To Both Themes" award="$$$" />
        <SmallPrize label="Most Boomer-Friendly" award="$$$" />
        <SmallPrize label="Secret Special Category" award="$$$" />
        <SmallPrize label="Luckiest Team (lucky draw)" award="$$$" /> */}
      </div>
    </div>
  );
};

export default Prizes;
