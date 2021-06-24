import styles from "./Prizes.module.css";
import BigPrize from "./BigPrize";
import SmallPrize from "./SmallPrize";
import FirstPrizeLogo from "../../images/prizes/idea1.svg";
import SecondPrizeLogo from "../../images/prizes/idea2.svg";
import ThirdPrizeLogo from "../../images/prizes/idea3.svg";
import soccat from "../../images/prizes/soccat.png";

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
					<BigPrize logo={ThirdPrizeLogo} label="Second Prize" award="S$2400" />
					<BigPrize logo={FirstPrizeLogo} label="First Prize" award="S$3200" />
					<BigPrize logo={SecondPrizeLogo} label="Third Prize" award="S$1600" />
				</div>
				<div className={styles.bigPrizesMobile}>
					<BigPrize logo={FirstPrizeLogo} label="First Prize" award="S$3200" />
					<BigPrize
						logo={SecondPrizeLogo}
						label="Second Prize"
						award="S$2400"
					/>
					<BigPrize logo={ThirdPrizeLogo} label="Third Prize" award="S$1600" />
				</div>
				<p className={styles.subheader}>
					Don't think you could win the top prizes? You can still try for the
					prizes in our special category too! Each team will be awarded S$400 as
					well as 4 of our very own SOCcats!
				</p>

				{/* <hr className={styles.divider} /> */}
				<div className={styles.smallPrizes}>
					<SmallPrize label="Most Impressive Pre-University Hack" />
					<SmallPrize label="Most Outstanding Undergraduate Hack" />
					<SmallPrize label="Most Relevant To Both Themes" />
					<SmallPrize label="Most Boomer-Friendly Hack" />
					<SmallPrize label="Luckiest Team" />
					<SmallPrize label="Shh!! Secret Special Category..." />
				</div>
			</div>
		</div>
	);
};

export default Prizes;
