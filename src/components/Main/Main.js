import logo from "../../images/lifehack-logo.png";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div name="main">
      <div className={styles.headerBg}></div>
      <div className={styles.mainBody}>
        <img className={styles.myimage} src={logo} alt="LifeHack logo"></img>
        <div className={styles.description}>
          <p className={styles.title}>LifeHack 2021</p>
          <p className={styles.date}>23-24 July</p>
          <p className={styles.subtitle}>
            Stay ahead of change. Innovate the future
          </p>
          <a
            href="https://www.instagram.com/nuscomputingclub/"
            target="_blank"
            className={styles.registerButton}
          >
            REGISTER NOW
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
