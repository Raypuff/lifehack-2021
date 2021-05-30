import HeaderButton from "../HeaderButton";
import logo from "./lifehack-logo-600x450.png";
import styles from "./Header.module.css";

const Header = () => {
  const headerButtons = ["timeline", "workshops", "prizes", "faq", "sponsors"];

  return (
    <header>
      <img title="LifeHack 2021" src={logo} alt="MISSING PNG" />
      {headerButtons.map((headerButton) => (
        <HeaderButton key={headerButton} buttonName={headerButton} />
      ))}
      <button className={styles.registerButton}>
        <h3>Register Now!</h3>
      </button>
    </header>
  );
};

export default Header;
