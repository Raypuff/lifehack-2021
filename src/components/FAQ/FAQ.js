import React from "react";
import QuestionBlock from "./QuestionBlock";
import styles from "./FAQ.module.css";

const FAQ = () => {
	const questionList = [
		{
			qn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			qn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			qn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			qn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			qn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			qn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			qn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
		{
			qn: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
			ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
		},
	];

	return (
		<div className={styles.faq} name="faq">
			<h2>FAQ</h2>
			{questionList.map((questionItem) => (
				<QuestionBlock question={questionItem.qn} answer={questionItem.ans} />
			))}
			<div className={styles.furtherEnq}>
				<h5>For futher enquries, kindly email lifehack@nuscomputing.com</h5>
			</div>
		</div>
	);
};

export default FAQ;
