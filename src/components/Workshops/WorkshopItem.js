import React from "react";
import styles from "./Workshops.module.css";

function WorkshopItem(props) {
  return (
    <div className={styles.workshopItem}>
      <div className={styles.content}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.datetime}>{props.datetime}</p>
        <hr class="solid" />
        <p className={styles.description}>{props.description}</p>
        <p className={styles.organizer}>Organized by {props.organizer}</p>
      </div>
      <a
        className={styles.organizerLogo}
        href={props.organizerLink}
        target="_blank"
      >
        <img src={props.organizerLogo} alt={props.organizer} />
      </a>
    </div>
  );
}

export default WorkshopItem;
