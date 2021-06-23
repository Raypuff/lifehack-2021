import React from "react";
import styles from "./FAQ.module.css";

export default function QuestionBlock(props) {
	return (
		<div className={styles.tab}>
			<input type="checkbox" id={`checkbox-${props.id}`}/>
			<label className={styles.tabLabel} for={`checkbox-${props.id}`}>{props.question}</label>
			<p className={styles.tabContent}>{props.answer}</p>
		</div>
	);
}
