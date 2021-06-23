import styles from "./Sponsors.module.css";
import micronLogo from "../../images/organizations/micron-logo.png";
import csitLogo from "../../images/organizations/csit-logo.png";
import shopeeLogo from "../../images/organizations/shopee-logo.png";
import websparksLogo from "../../images/organizations/websparks-logo.png";
import dstaLogo from "../../images/organizations/dsta-logo.png";
import socLogo from "../../images/organizations/soc-logo.png";
import compClubLogo from "../../images/organizations/comp_club-logo.png";

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
