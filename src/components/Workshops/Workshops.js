import styles from "./Workshops.module.css";

const Workshops = () => {
  return (
    <div className={styles.workshops} name="workshops">
      <h1>Workshops</h1>
      <p>
        Insert message
        <br />
      </p>

      <div className={styles.row}>
        <div className={styles.descriptionCol}>
          <h3>Introduction to Front End Web Development with HTML/ CSS</h3>
          <p>
            <b>By:</b> <i>Ask Alumni/IG</i>
            <br />
            <b>Date:</b> <i>19th July</i>
            <br />
            <b>Timing:</b> <i>4:00PM - 6:00PM</i>
            <br />
            <br />
            <b>Description:</b> <i>placeholder</i>
          </p>
        </div>
        <div className={styles.descriptionCol}>
          <h3>Introduction to Python Pandas for Data Analysis</h3>
          <p>
            <b>By:</b> <i>Ask Alumni/IG</i>
            <br />
            <b>Date:</b> <i>19th July</i>
            <br />
            <b>Timing:</b> <i>7:00PM - 9:00PM</i>
            <br />
            <br />
            <b>Description:</b> <i>placeholder</i>
          </p>
        </div>

        <div className={styles.descriptionCol}>
          <h3>Data Visualization using Tableau</h3>
          <p>
            <b>By:</b> <i>Ask Central Library Research Group/ NUSSU commIT</i>
            <br />
            <b>Date:</b> <i>20th July</i>
            <br />
            <b>Timing:</b> <i>4:00PM - 6:00PM</i>
            <br />
            <br />
            <b>Description:</b> <i>placeholder</i>
          </p>
        </div>

        <div className={styles.descriptionCol}>
          <h3>Using Python to make your first Telegram Bot</h3>
          <p>
            <b>By:</b> <i>Ask Alumni/IG</i>
            <br />
            <b>Date:</b> <i>20th July</i>
            <br />
            <b>Timing:</b> <i>7:00PM - 9:00PM</i>
            <br />
            <br />
            <b>Description:</b> <i>placeholder</i>
          </p>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.descriptionCol}>
          <h3>How to incorporate UI/UX concepts into your design</h3>
          <p>
            <b>By:</b> <i>Find sponsor/ IG</i>
            <br />
            <b>Date:</b> <i>21st July</i>
            <br />
            <b>Timing:</b> <i>5:00PM - 6:00PM</i>
            <br />
            <br />
            <b>Description:</b> <i>placeholder</i>
          </p>
        </div>

        <div className={styles.descriptionCol}>
          <h3>Web development with ReactJS</h3>
          <p>
            <b>By:</b> <i>Find sponsor/IG</i>
            <br />
            <b>Date:</b> <i>21st July</i>
            <br />
            <b>Timing:</b> <i>7:00PM - 10:00PM</i>
            <br />
            <br />
            <b>Description:</b> <i>placeholder</i>
          </p>
        </div>

        <div className={styles.descriptionCol}>
          <h3>Data sourcing / extraction (web scraping)</h3>
          <p>
            <b>By:</b> <i>Find sponsor/ IG</i>
            <br />
            <b>Date:</b> <i>22nd July</i>
            <br />
            <b>Timing:</b> <i>4:00PM - 6:00PM</i>
            <br />
            <br />
            <b>Description:</b> <i>placeholder</i>
          </p>
        </div>
        <div className={styles.descriptionCol}>
          <h3>Utilizing AWS Cloud Services</h3>
          <p>
            <b>By:</b> <i>Ask AWS</i>
            <br />
            <b>Date:</b> <i>22nd July</i>
            <br />
            <b>Timing:</b> <i>7:00PM - 10:00PM</i>
            <br />
            <br />
            <b>Description:</b> <i>placeholder</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Workshops;
