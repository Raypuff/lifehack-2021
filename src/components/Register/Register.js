import styles from "./Register.module.css";

const Register = () => {
	return (
		<div className={styles.register} name="register">
			<p className={styles.text}>
				So what are you waiting for?
				<br />
			</p>
			<a
            href="https://nus.campuslabs.com/engage/submitter/form/start/489879"
            target="_blank"
            rel="noreferrer"
            className={styles.registerButton}
         
          >REGISTER NOW</a>
		</div>
	);
};

export default Register;
