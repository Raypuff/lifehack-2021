import logo from "../../images/lifehack-logo.png";
import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-scroll";
// import { Link as LinkR } from "react-router-dom";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  function closeNavActive() {
    if (navActive) {
      setNavActive(false);
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link to="main" onClick={closeNavActive} smooth={true}>
          <img
            className={styles.logo}
            title="LifeHack 2021"
            src={logo}
            alt="LifeHack Logo"
          />
        </Link>
      </div>
      <ul className={navActive ? styles.navActive : styles.navLinks}>
        <li>
          <Link to="timeline" onClick={closeNavActive} smooth={true}>
            Timeline
          </Link>
        </li>
        <li>
          <Link to="workshops" onClick={closeNavActive} smooth={true}>
            Workshops
          </Link>
        </li>
        <li>
          <Link to="prizes" onClick={closeNavActive} smooth={true}>
            Prizes
          </Link>
        </li>
        <li>
          <Link to="faq" onClick={closeNavActive} smooth={true}>
            FAQ
          </Link>
        </li>
        <li>
          <Link to="sponsors" onClick={closeNavActive} smooth={true}>
            Sponsors
          </Link>
        </li>
        <li>
          <a
            href="https://www.instagram.com/nuscomputingclub/"
            target="_blank"
            className={styles.registerButton}
            onClick={closeNavActive}
          >
            REGISTER NOW
          </a>
        </li>
      </ul>
      <div
        className={styles.burger}
        onClick={(event) => setNavActive(!navActive)}
      >
        <div className={navActive ? styles.line1 : styles.inactive}></div>
        <div className={navActive ? styles.line2 : styles.inactive}></div>
        <div className={navActive ? styles.line3 : styles.inactive}></div>
      </div>
    </nav>

    // <header>
    //   {headerButtons.map((headerButton) => (
    //     <HeaderButton key={headerButton} buttonName={headerButton} />
    //   ))}
    //   <button className={styles.registerButton}>
    //     <h3>Register Now!</h3>
    //   </button>
    // </header>
  );
};

export default Header;
