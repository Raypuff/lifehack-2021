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
    marginLeft: "0",
  },
}));

const timeline = [
  { title: "Registration", datetime: "25 June - 16 July" },
  { title: "Workshops", datetime: "19 July - 22 July" },
  {
    title: "Opening Ceremony",
    datetime: "23 July, 9:30am - 12:00pm",
  },
  {
    title: "Release of Problem Statements",
    datetime: "23 July, 12:00pm",
  },
  {
    title: "Submission of Hack",
    datetime: "24 July, 12:00pm",
  },
  {
    title: "Announcement of Winners",
    datetime: "25 July, 12:00pm",
  },
  {
    title: "Closing Ceremony and Prize Presentation",
    datetime: "25 July, 3:00pm - 4:30pm",
  },
];

const HackTimeline = () => {
  const classes = useStyles();

  return (
    <div className={styles.background}>
      {" "}
      <div className={styles.timeline} name="timeline">
        <p className={styles.header}>Timeline</p>
        <div className={styles.container}>
          <Timeline align="left" className={classes.timeline}>
            {timeline.map((event, idx) => (
              <TimelineEvent
                title={event.title}
                datetime={event.datetime}
                key={"timeline-" + idx}
              />
            ))}
            <TimelineDot className={classes.dot}>
              <PowerIcon className={classes.powerIcon} />
            </TimelineDot>
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default HackTimeline;
