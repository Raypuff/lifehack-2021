import styles from "./Workshops.module.css";

const Workshops = () => {
  return (
    <div className={styles.workshops} name="prizes">
      <h1>Available Workshops</h1>
      <p>
        Insert message
        <br />
      </p>

      <div className={styles.row}>
        <div className={styles.descriptionCol}>
          <h3>Intro to HTML/CSS</h3>
          <p>Timing: placeholder Description: placeholder</p>
        </div>
        <div className={styles.descriptionCol}>
          <h3>Intro to HTML/CSS</h3>
          <p>Timing: placeholder Description: placeholder</p>
        </div>

        <div className={styles.descriptionCol}>
          <h3>Intro to JavaScript</h3>
          <p>Timing: placeholder Description: placeholder</p>
        </div>

        <div className={styles.descriptionCol}>
          <h3>Intro to ReactJS</h3>
          <p>Timing: placeholder Description: placeholder</p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.descriptionCol}>
          <h3>Intro to HTML/CSS</h3>
          <p>Timing: placeholder Description: placeholder</p>
        </div>

        <div className={styles.descriptionCol}>
          <h3>Intro to JavaScript</h3>
          <p>Timing: placeholder Description: placeholder</p>
        </div>

        <div className={styles.descriptionCol}>
          <h3>Intro to ReactJS</h3>
          <p>Timing: placeholder Description: placeholder</p>
        </div>
        <div className={styles.descriptionCol}>
          <h3>Intro to JavaScript</h3>
          <p>Timing: placeholder Description: placeholder</p>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
