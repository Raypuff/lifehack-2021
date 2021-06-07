import styles from "./Main.module.css";

const Main = () => {
  return (
    <div name="main" className={styles.mainBody}>
      <div className={styles.myimage}>
        <img src="LifeHack 1500x1500 logo.png" alt="LifeHack logo"></img>
      </div>
      <div className={styles.description}>
        <h>LifeHack 2021</h>
        <p>LifeHack 2021 is a 24h virtual hackathon that wants YOU to develop innovative software solutions that can make a change in peoples’ lives in a post-COVID world.</p>
      </div>
    </div>
  );
};

export default Main;
