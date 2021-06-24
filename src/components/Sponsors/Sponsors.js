import React from "react";
import Fade from "react-reveal/Fade";
import micronLogo from "../../images/organizations/micron-logo.png";
import csitLogo from "../../images/organizations/csit-logo.png";
import shopeeLogo from "../../images/organizations/shopee-logo.png";
import websparksLogo from "../../images/organizations/websparks-logo.png";
import dstaLogo from "../../images/organizations/dsta-logo.png";
import startitLogo from "../../images/organizations/startit-logo.png";
import nusHackersLogo from "../../images/organizations/nus-hackers.png";
import socLogo from "../../images/organizations/soc-logo.png";
import compClubLogo from "../../images/organizations/comp_club-logo.png";
import styles from "./Sponsors.module.css";

const Sponsors = () => {
  return (
    <div className={styles.background}>
      {" "}
      <div className={styles.sponsors} name="sponsors">
        <h2 className={styles.header}>Sponsors and Organizers</h2>
        <Fade bottom>
          <p className={styles.title}>Main sponsors</p>
        </Fade>
        <Fade>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src={micronLogo}
              alt="Micron"
              loading="lazy"
            />
            <img
              className={styles.logo}
              src={csitLogo}
              alt="CSIT"
              loading="lazy"
            />
          </div>
        </Fade>
        <Fade bottom>
          <p className={styles.title}>Supporting Organizations</p>
        </Fade>
        <Fade>
          <div className={styles.logoContainer}>
            <img
              className={styles.smallLogo}
              src={websparksLogo}
              alt="Websparks"
              loading="lazy"
            />
            <img
              className={styles.smallLogo}
              src={shopeeLogo}
              alt="Shopee"
              loading="lazy"
            />
            <img
              className={styles.smallLogo}
              src={dstaLogo}
              alt="DSTA"
              loading="lazy"
            />
            <img
              className={styles.smallLogo}
              src={nusHackersLogo}
              alt="NUS Hackers"
              loading="lazy"
            />
            <img
              className={styles.smallLogo}
              src={startitLogo}
              alt="StartIT"
              loading="lazy"
            />
          </div>
        </Fade>
        <Fade bottom>
          <p className={styles.title}>Proudly Organized By</p>
        </Fade>
        <Fade>
          <div className={styles.logoContainer}>
            <img
              className={styles.logo}
              src={socLogo}
              alt="NUS Computing"
              loading="lazy"
            />
            <img
              className={styles.logo}
              src={compClubLogo}
              alt="NUS Students' Computing Club"
              loading="lazy"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Sponsors;
