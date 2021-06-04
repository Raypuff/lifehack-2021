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
			qn: "Must I be present for the zoom session if my team is shortlisted?",
			ans: "At least one member of the team has to be present. If no members are available, the team will be disqualified.",
		},
		{
			qn: "Is the hackathon fully online?",
			ans: "Yes. LifeHack 2021 will be a fully online event from 19 to 25 July 2021.",
		},
		{
			qn: "Do I need any technical experience or knowledge?",
			ans: "Basic programming competencies are expected, else all are welcome! We have workshops planned for you over 19 to 22 July. Attending the workshops will provide you with resources to conceptualize and create your project.",
		},
		{
			qn: "Can I use code I previously wrote?",
			ans: "You are allowed to use previously written code. However, the copying of ideas and code is not allowed.",
		},
		{
			qn: "Are there any restrictions on platforms and programming languages which can be used?",
			ans: "No. Feel free to use any programming language or technology you’re comfortable with!",
		},
	];

	return (
		<div className={styles.faq} name="faq">
			<h2>FAQ</h2>
			<div className={styles.questionBox}>
				{questionList.map((questionItem) => (
					<QuestionBlock question={questionItem.qn} answer={questionItem.ans} />
				))}
				<div className={styles.questionItem}>
					<h3>Who owns the intellectual property rights to my submission?</h3>
					<p>
						For IP Rights agreement, please refer to this <a href=" / ">document</a>.
					</p>
				</div>
				<div className={styles.questionItem}>
					<h3>Where can I get the latest updates and announcements?</h3>
					<p>
						Join us in our Telegram channel <a href="/">here</a> for the latest updates!
					</p>
				</div>
			</div>
			<div className={styles.furtherEnq}>
				<h5>For futher enquries, kindly email lifehack@nuscomputing.com</h5>
			</div>
		</div>
	);
};

export default FAQ;
