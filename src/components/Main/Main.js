import React from "react";
import Bounce from "react-reveal/Bounce";
import Slide from "react-reveal/Slide";
import { Links } from "../../Constants";
import logo from "../../images/lifehack-logo.png";
import styles from "./Main.module.css";

const registerButton = (
  <a
    href={Links.registration}
    target="_blank"
    rel="noreferrer"
    className={styles.registerButton}
  >
    REGISTER NOW
  </a>
);

const Main = () => {
  return (
    <div className={styles.mainBody} name="main">
      <Bounce>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={logo} alt="LifeHack logo"></img>
        </div>
      </Bounce>
      <Slide right cascade>
        <div className={styles.description}>
          <p className={styles.title}>LifeHack 2021</p>
          <p className={styles.date}>23-24 July</p>
          <p className={styles.subtitle}>
            Stay ahead of change. Innovate the future.
          </p>
          {registerButton}
        </div>
      </Slide>
      <div className={styles.description2}>
        <p className={styles.date}>23-24 July 2021</p>
        <p className={styles.subtitle}>
          Stay ahead of change
          <br />
          Innovate the future
        </p>
        {registerButton}
      </div>
    </div>
  );
};

export default Main;
