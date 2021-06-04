import React from "react";
import styles from "./FAQ.module.css";

export default function QuestionBlock(props) {
	return (
		<div className={styles.questionItem}>
			<h3>{props.question}</h3>
			<p>{props.answer}</p>
		</div>
	);
}
