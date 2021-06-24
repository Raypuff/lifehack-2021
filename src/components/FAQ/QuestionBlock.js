import React from "react";
import styles from "./FAQ.module.css";

const QuestionBlock = (props) => {
  return (
    <div className={styles.tab}>
      <input type="checkbox" id={`checkbox-${props.id}`} />
      <label className={styles.tabLabel} htmlFor={`checkbox-${props.id}`}>
        {props.question}
      </label>
      <p className={styles.tabContent}>{props.answer}</p>
    </div>
  );
};

export default QuestionBlock;
