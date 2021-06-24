import aboutLogo from "../../images/about.png";
import educationLogo from "../../images/education.png";
import socialLogo from "../../images/social.png";
import styles from "./About.module.css";

const About = () => {
	return (
		<div className={styles.background}>
			<div className={styles.sponsors} name="about">
				{/* <h2 className={styles.header}>about</h2> */}
				<img className={styles.image} alt="ABOUT" src={aboutLogo} />
				<p className={styles.title}>
					LifeHack 2021 is a 24h virtual hackathon that wants you to develop
					innovative software solutions that can make a change in peoples’ lives
					in a post-COVID world. Through exciting workshops and events, you will
					have the chance to learn various technologies from web development to
					utilizing clouds services.
				</p>
				<br />
				<p className={styles.title2}>
					There will be 2 themes for participants to choose from
				</p>
				<div className={styles.themeRow}>
					{/* <h3 className={styles.header}>Education</h3>
					<h3 className={styles.header}>Social</h3> */}
					<img
						className={styles.themeImage}
						src={educationLogo}
						alt="EDUCATION"
					/>
					<img className={styles.themeImage} src={socialLogo} alt="SOCIAL" />
				</div>
			</div>
		</div>
	);
};

export default About;
