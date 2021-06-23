import styles from "./Sponsors.module.css";
import sponsorLogo from "../../images/sponsor-logo.png";
import micronLogo from "../../images/micron-logo.png";
import csitLogo from "../../images/csit-logo.png";
import shopeeLogo from "../../images/shopee-logo.png";
import websparksLogo from "../../images/websparks-logo.png";
import dstaLogo from "../../images/dsta-logo.png";
import socLogo from "../../images/soc-logo.png";
import compClubLogo from "../../images/comp_club-logo.png";

const Sponsors = () => {
	return (
		<div className={styles.sponsors} name="sponsors">
			<h2 className={styles.header}>Sponsors and Organizers</h2>
			<p className={styles.title}>Main sponsors</p>
			<div className={styles.logoContainer}>
				<img className={styles.logo} src={micronLogo} alt="Micron" />
				<img className={styles.logo} src={csitLogo} alt="CSIT" />
			</div>
			<p className={styles.title}>Supporting Organizations</p>
			<div className={styles.logoContainer}>
				<img className={styles.logo} src={websparksLogo} alt="Websparks" />
				<img className={styles.logo} src={shopeeLogo} alt="Shopee" />
				<img className={styles.logo} src={dstaLogo} alt="DSTA" />
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
