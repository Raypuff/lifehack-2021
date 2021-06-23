import React from 'react';
import { Link } from "react-scroll";
import styles from "./Header.module.css";

function HeaderItem(props) {
  return (
    <div className={styles.headerItem}>
      <Link to={props.to} smooth={true}>
        {props.content}
      </Link>
    </div>
  )
}

export default HeaderItem
