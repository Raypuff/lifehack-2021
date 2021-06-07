import logo from "./lifehack-logo-600x450.png";
import styles from "./Header.module.css";
import { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <Link to="main" smooth={true}>
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
          <Link to="timeline" smooth={true}>
            Timeline
          </Link>
        </li>
        <li>
          <Link to="workshops" smooth={true}>
            Workshops
          </Link>
        </li>
        <li>
          <Link to="prizes" smooth={true}>
            Prizes
          </Link>
        </li>
        <li>
          <Link to="faq" smooth={true}>
            FAQ
          </Link>
        </li>
        <li>
          <Link to="sponsors" smooth={true}>
            Sponsors
          </Link>
        </li>
        <li>
          <Link to="register" className={styles.registerButton} smooth={true}>
            Register
          </Link>
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
