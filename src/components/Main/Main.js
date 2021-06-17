import logo from "../../images/lifehack-logo.png";
import styles from "./Main.module.css";

const Main = () => {
  return (
    <div name="main">
      <div className={styles.headerBg}></div>
      <div className={styles.mainBody}>
        <img className={styles.myimage} src={logo} alt="LifeHack logo"></img>
        <div className={styles.description}>
          <h className={styles.title}>LifeHack 2021</h>
          <p className={styles.subtitle}>
            LifeHack 2021 is a 24h virtual hackathon that wants YOU to develop
            innovative software solutions that can make a change in peoples’
            lives in a post-COVID world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
