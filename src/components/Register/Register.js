import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import styles from "./Register.module.css";

const Register = () => {
	return (
		<div className={styles.register} name="register">
			<Fade>
				<p className={styles.text}>
					So what are you waiting for?
					<br />
				</p>
			</Fade>
			<Tada>
				<a
					href="https://nus.campuslabs.com/engage/submitter/form/start/489879"
					target="_blank"
					rel="noreferrer"
					className={styles.registerButton}
				>
					REGISTER NOW
				</a>
			</Tada>
		</div>
	);
};

export default Register;
