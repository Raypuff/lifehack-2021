import React from "react";
import Timeline from "@material-ui/lab/Timeline";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineEvent from "./TimelineEvent";
import PowerIcon from "@material-ui/icons/Power";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Timeline.module.css";

const useStyles = makeStyles((theme) => ({
  dot: {
    color: "#1C1F35",
    backgroundColor: "transparent",
    boxShadow: "none",
    marginLeft: "-.5rem",
    webkitTransform: "rotateX(180deg)",
    transform: "rotateX(180deg)",
    padding: "0",
    margin: "0",
  },
  powerIcon: {
    width: "2.5rem",
    height: "2.5rem",
  },
  timeline: {
    marginLeft: "10vw",
  },
}));

export default function HackTimeline() {
  const classes = useStyles();

  return (
    <div className={styles.timeline} name="timeline">
      <p className={styles.header}>Timeline</p>
      <div className={styles.container}>
        <Timeline align="left" className={classes.timeline}>
          <TimelineEvent title="Registration" datetime="25 June - 16 July" />
          <TimelineEvent title="Workshops" datetime="19 July - 22 July" />
          <TimelineEvent
            title="Opening Ceremony"
            datetime="23 July, 9:30am - 12:00pm"
          />
          <TimelineEvent
            title="Release of Problem Statements"
            datetime="23 July, 12:00pm"
          />
          <TimelineEvent
            title="Submission of Hack"
            datetime="24 July, 12:00pm"
          />
          <TimelineEvent
            title="Announcement of Winners"
            datetime="25 July, 12:00pm"
          />
          <TimelineEvent
            title="Closing Ceremony and Prize Presentation"
            datetime="25 July, 3:00pm - 4:30pm"
          />
          <TimelineDot className={classes.dot}>
            <PowerIcon className={classes.powerIcon} />
          </TimelineDot>
        </Timeline>
      </div>
    </div>
  );
}
