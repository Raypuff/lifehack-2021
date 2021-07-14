import React, { useState } from "react";
import HeaderItem from "./HeaderItem";
import logo from "../../images/lifehack-logo.svg";
import styles from "./Header.module.css";
import { Links } from "../../Constants";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  const toggleNav = () => {
    setNavActive(!navActive);
  };

  const closeNav = () => {
    setNavActive(false);
  };

  const burger = (
    <div className={styles.burgerContainer}>
      <div className={styles.burger} onClick={toggleNav}>
        <div className={navActive ? styles.line1 : styles.inactive}></div>
        <div className={navActive ? styles.line2 : styles.inactive}></div>
        <div className={navActive ? styles.line3 : styles.inactive}></div>
      </div>
    </div>
  );

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <HeaderItem
          to="main"
          onClick={closeNav}
          content={
            <img
              className={styles.logo}
              title="LifeHack 2021"
              src={logo}
              alt="LifeHack Logo"
            />
          }
        />
      </div>
      <ul className={navActive ? styles.navActive : styles.navLinks}>
        <li>
          <HeaderItem to="about" onClick={closeNav} content="About" />
        </li>
        <li>
          <HeaderItem to="timeline" onClick={closeNav} content="Timeline" />
        </li>
        <li>
          <HeaderItem to="workshops" onClick={closeNav} content="Workshops" />
        </li>
        <li>
          <HeaderItem to="prizes" onClick={closeNav} content="Prizes" />
        </li>
        <li>
          <HeaderItem to="faq" onClick={closeNav} content="FAQ" />
        </li>
        <li>
          <HeaderItem to="sponsors" onClick={closeNav} content="Sponsors" />
        </li>
        <li>
          {/* <a
            href={Links.registration}
            target="_blank"
            rel="noreferrer"
            className={styles.registerButton}
            onClick={closeNav}
          >
            REGISTER NOW
          </a> */}
          <HeaderItem to="register" onClick={closeNav} content="REGISTER NOW" />
        </li>
      </ul>
      {burger}
    </nav>
  );
};

export default Header;
