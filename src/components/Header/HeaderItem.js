import React from "react";
import { Link } from "react-scroll";
import styles from "./Header.module.css";

const HeaderItem = (props) => {
  return (
    <div className={styles.headerItem}>
      <Link to={props.to} smooth={true} onClick={props.onClick} offset={-68}>
        {props.content}
      </Link>
    </div>
  );
};

export default HeaderItem;
