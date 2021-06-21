import WorkshopItem from "./WorkshopItem";
import NusHackersLogo from "../../images/workshops/nus-hackers.png";
import styles from "./Workshops.module.css";

const Workshops = () => {
  return (
    <div className={styles.workshops} name="workshops">
      <h1 className={styles.header}>Workshops</h1>
      <div className={styles.workshopGrid}>
        <WorkshopItem
          title="Introduction to Front End Web Development with HTML/ CSS"
          datetime="19 July, 4:00pm - 6:00pm"
          description="Learn how to create functional and beautiful websites with HTML and CSS!"
          organizer="NUS Hackers"
          organizerLogo={NusHackersLogo}
          organizerLink="https://www.nushackers.org/"
        />
        <WorkshopItem
          title="Introduction to Front End Web Development with HTML/ CSS"
          datetime="19 July, 4:00pm - 6:00pm"
          description="Learn how to create functional and beautiful websites with HTML and CSS!"
          organizer="NUS Hackers"
          organizerLogo={NusHackersLogo}
          organizerLink="https://www.nushackers.org/"
        />
        <WorkshopItem
          title="Introduction to Front End Web Development with HTML/ CSS"
          datetime="19 July, 4:00pm - 6:00pm"
          description="Learn how to create functional and beautiful websites with HTML and CSS!"
          organizer="NUS Hackers"
          organizerLogo={NusHackersLogo}
          organizerLink="https://www.nushackers.org/"
        />
        <WorkshopItem
          title="Introduction to Front End Web Development with HTML/ CSS"
          datetime="19 July, 4:00pm - 6:00pm"
          description="Learn how to create functional and beautiful websites with HTML and CSS!"
          organizer="NUS Hackers"
          organizerLogo={NusHackersLogo}
          organizerLink="https://www.nushackers.org/"
        />
      </div>
    </div>
  );
};

export default Workshops;
