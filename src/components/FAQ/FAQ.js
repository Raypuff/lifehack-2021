import React from "react";
import QuestionBlock from "./QuestionBlock";
import styles from "./FAQ.module.css";

const FAQ = () => {
	const questionList = [
		{
			qn: "Who can participate?",
			ans: "The event is open to all current Polytechnic, Junior College and ITE students, students awaiting entry to University, and all Undergraduate students.",
		},
		{
			qn: "I don’t have a team member. Can I still participate?",
			ans: "Each team should have 2 to 4 members. You may email us at lifehack@nuscomputing.com and we can try to match you up with someone.",
		},
		{
			qn: "How will the submissions be assessed?",
			ans: "Details on judging criteria and rules will be elaborated upon on the event Opening Day (23 July). Judging panels will consist of NUS professors and industry professionals.",
		},
				{
			qn: "Is the hackathon fully online?",
			ans: "Yes. LifeHack 2021 will be a fully online event from 19 to 25 July 2021.",
		},
		{
			qn: "Do I need any technical experience or knowledge?",
			ans: "Some knowledge of programming is recommended but not necessary! We have workshops planned for you over 19 to 22 July. Attending the workshops will provide you with resources and ideas to help you conceptualize and create your hack.",
		},
		{
			qn: "Can I use code I previously wrote?",
			ans: "You are allowed to use snippets of code you have previously written. However, copying your entire hack from previous events or from online is strictly not allowed.",
		},
		{
			qn: "Are there any restrictions on platforms and programming languages which can be used?",
			ans: "No. Feel free to use any programming language or technology you’re comfortable with!",
		},
	];

	return (
		<div className={styles.background}>
		<div className={styles.faq} name="faq">
			<h2>FAQ</h2>
			<div className={styles.questionBox}>
				{questionList.map((questionItem) => (
					<QuestionBlock question={questionItem.qn} answer={questionItem.ans} />
				))}
											</div>
			<div className={styles.furtherEnq}>
				<h5>For futher enquries, kindly email lifehack@nuscomputing.com</h5>
			</div>
		</div>
</div>
	);
};

export default FAQ;
