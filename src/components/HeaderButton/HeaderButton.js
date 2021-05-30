import styles from "./HeaderButton.module.css";
import { Link } from "react-scroll";

const HeaderButton = ({ buttonName }) => {
  const names = {
    timeline: "Timeline",
    workshops: "Workshops",
    prizes: "Prizes",
    faq: "FAQ",
    sponsors: "Sponsors",
  };
  return (
    <Link className={styles.headerButton} to={buttonName} smooth={true}>
      {names[buttonName]}
    </Link>
  );
};

export default HeaderButton;
