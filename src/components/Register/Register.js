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
        <button className={styles.registerButton}>REGISTER NOW</button>
      </Tada>
    </div>
  );
};

export default Register;
