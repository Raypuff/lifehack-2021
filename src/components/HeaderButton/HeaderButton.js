import styles from "./HeaderButton.module.css";

const HeaderButton = ({ buttonName }) => {
  const names = {
    timeline: "Timeline",
    workshops: "Workshops",
    prizes: "Prizes",
    faq: "FAQ",
    sponsors: "Sponsors",
  };
  return <div className={styles.headerButton}>{names[buttonName]}</div>;
};

export default HeaderButton;
