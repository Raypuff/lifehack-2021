import logo from "../../images/lifehack-logo.png";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div className={styles.mainBody} name="main">
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="LifeHack logo"></img>
      </div>
      <div className={styles.description}>
        <p className={styles.title}>LifeHack 2021</p>
        <p className={styles.date}>23-24 July</p>
        <p className={styles.subtitle}>
          Stay ahead of change. Innovate the future.
        </p>
        <a
          href="https://nus.campuslabs.com/engage/submitter/form/start/489879"
          target="_blank"
          rel="noreferrer"
          className={styles.registerButton}
        >
          REGISTER NOW
        </a>
      </div>
      <div className={styles.description2}>
        <p className={styles.date}>23-24 July 2021</p>
        <p className={styles.subtitle}>
          Stay ahead of change
          <br />
          Innovate the future
        </p>
        {/* <p className={styles.title}>LifeHack 2021</p> */}
        <a
          href="https://nus.campuslabs.com/engage/submitter/form/start/489879"
          target="_blank"
          rel="noreferrer"
          className={styles.registerButton}
        >
          REGISTER NOW
        </a>
      </div>
    </div>
  );
};

export default Main;
