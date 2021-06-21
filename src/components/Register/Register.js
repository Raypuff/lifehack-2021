import styles from "./Register.module.css";

const Register = () => {
	return (
		<div className={styles.register} name="register">
			<p className={styles.text}>
				So what are you waiting for?
				<br />
			</p>
			<button className={styles.registerButton}>REGISTER NOW</button>
		</div>
	);
};

export default Register;
