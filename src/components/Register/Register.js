import React from "react";
import Fade from "react-reveal/Fade";
import Tada from "react-reveal/Tada";
// import { Links } from "../../Constants";
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
        {/* CLOSE SIGN UPS */}
        {/* <a
          href={Links.registration}
          target="_blank"
          rel="noreferrer"
          className={styles.registerButton}
        >
          REGISTER NOW
        </a> */}
        <div className={styles.closedText}>
          Due to overwhelming response and sign ups (even after opening up 30
          slots more than the intended 100 teams), we have unfortunately decided
          to close registration early on 13th July 2021.
          <br />
          <br />
          Thank you so much to everyone who signed up!
        </div>
      </Tada>
    </div>
  );
};

export default Register;
