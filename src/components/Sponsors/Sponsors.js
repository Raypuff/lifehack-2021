import styles from "./Sponsors.module.css";
import sponsorLogo from "../../images/sponsor-logo.png";
import micronLogo from "../../images/micron-logo.png";
import csitLogo from "../../images/csit-logo.png";
import socLogo from "../../images/soc-logo.png";
import compClubLogo from "../../images/comp_club-logo.png";

// const Sponsors = () => {
//   return (
//     <div className={styles.sponsors} name="sponsors">
//       this is sponsors
//     </div>
//   );
// };

const Sponsors = () => {
	return (
		<div className={styles.sponsors} name="sponsors">
			<h2 className={styles.mainTitle}>Sponsors and Organizers</h2>
			<p className={styles.title}>Sponsored By</p>
			<div className={styles.logoContainer}>
				<img className={styles.logo} src={micronLogo} alt="Placeholder" />
				<img className={styles.logo} src={csitLogo} alt="Placeholder" />
				<img className={styles.logo} src={sponsorLogo} alt="Placeholder" />
			</div>
			<p className={styles.title}>Organized By</p>
			<div className={styles.logoContainer}>
				<img className={styles.logo} src={socLogo} alt="NUS Computing" />
				<img
					className={styles.logo}
					src={compClubLogo}
					alt="NUS Students' Computing Club"
				/>
			</div>
		</div>
	);
};

export default Sponsors;
