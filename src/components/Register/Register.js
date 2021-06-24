import React from "react";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
import { Links } from "../../Constants";
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
          href={Links.registration}
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
