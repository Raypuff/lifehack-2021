import styles from "./Prizes.module.css";
import BigPrize from "./BigPrize";
import SmallPrize from "./SmallPrize";
import FirstPrizeLogo from "../../images/prizes/idea1.svg";
import SecondPrizeLogo from "../../images/prizes/idea2.svg";
import ThirdPrizeLogo from "../../images/prizes/idea3.svg";

const column = (classId, cat1, val1, cat2, val2) => {
  return (
    <div className={classId}>
      <div>
        <h4>{cat1}</h4>
        <h4>{val1}</h4>
      </div>
      <div>
        <h4>{cat2}</h4>
        <h4>{val2}</h4>
      </div>
    </div>
  );
};

const Prizes = () => {
  return (
    <div className={styles.prizes} name="prizes">
      <h1 className={styles.header}>Prizes</h1>
      <p className={styles.subheader}>
        These prizes will be awarded to 2 teams, one from each group.
      </p>
      <div className={styles.bigPrizes}>
        <BigPrize logo={SecondPrizeLogo} label="Second Prize" award="$1600" />
        <BigPrize logo={FirstPrizeLogo} label="First Prize" award="$3200" />
        <BigPrize logo={ThirdPrizeLogo} label="Third Prize" award="800" />
      </div>
      <hr class="solid" />
      <div className={styles.smallPrizes}>
        <SmallPrize label="Most Impressive Pre-University Hack" award="$$$" />
        <SmallPrize label="Most Outstanding Undergraduate Hack" award="$$$" />
        <SmallPrize label="Most Relevant To Both Themes" award="$$$" />
        <SmallPrize label="Most Boomer-Friendly" award="$$$" />
        <SmallPrize label="Secret Special Category" award="$$$" />
        <SmallPrize label="Luckiest Team (lucky draw)" award="$$$" />
      </div>
    </div>
  );
};

export default Prizes;
