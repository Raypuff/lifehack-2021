import React from "react";
import styles from "./Workshops.module.css";

function WorkshopItem(props) {
  return (
    <div className={styles.workshopItem}>
      <a
        className={styles.organizerLogoContainer}
        href={props.organizerLink}
        target="_blank"
        rel="noreferrer"
      >
        <img
          className={styles.organizerLogo}
          src={props.organizerLogo}
          alt={props.organizer}
        />
      </a>
      <div className={styles.content}>
        <p className={styles.title}>{props.title}</p>
        <p className={styles.datetime}>{props.datetime}</p>
        <hr className={styles.divider} />
        <p className={styles.description}>{props.description}</p>
        <p className={styles.organizer}>Organized by {props.organizer}</p>
      </div>
    </div>
  );
}

export default WorkshopItem;
