import styles from "./Timeline.module.css";
import ReactDOM from "react-dom";

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function HackTimeline() {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{textAlign: "center"}}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Registration
              </Typography>
              <Typography>25 June - 16 July</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="black" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{textAlign: "center"}}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Workshops
              </Typography>
              <Typography>19 July - 22 July</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              9:30 am - 12:00pm
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="black" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{textAlign: "center"}}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Opening Ceremony
              </Typography>
              <Typography>23 July</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              12:00pm
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="black" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{textAlign: "center"}}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Release of Problem Statement
              </Typography>
              <Typography>23 July</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              12:00pm
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="black" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{textAlign: "center"}}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Submission of Hack
              </Typography>
              <Typography>24 July</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              12:00pm
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="black" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent style={{textAlign: "center"}}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Announcement of Winners
              </Typography>
              <Typography>25 July</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              3:00pm - 4:30pm
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent style={{textAlign: "center"}}>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Closing Ceremony and Prize Presentation
              </Typography>
              <Typography>25 July</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Container>
  );
}
