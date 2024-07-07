import React, { useEffect, useState } from "react";

import css from "./style.module.css";

export default (props) => {
	const calculateTimeRemaining = () => {
		const difference = +new Date(props.endDate) - +new Date();
		let timeRemaining = {};
		if (difference > 0) {
			timeRemaining = {
				days: Math.floor(difference / (1000 * 60 * 60 * 24)),
				hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
				minutes: Math.floor((difference / 1000 / 60) % 60),
				seconds: Math.floor((difference / 1000) % 60),
			};
		}
		return timeRemaining;
	};

	const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

	useEffect(() => {
		const timer = setTimeout(() => {
			setTimeRemaining(calculateTimeRemaining());
		}, 1000);
		return () => clearTimeout(timer);
	});

	const timerComponents = [];
	Object.keys(timeRemaining).forEach((interval) => {
		timerComponents.push(
			<span className={css.time} key={interval}>
				{timeRemaining[interval]} {interval}{" "}
			</span>
		);
	});
	if (timerComponents.length) {
		return (
			<div className={css.countdown}>
				{timeRemaining != 0 ? timerComponents : <p className={css.time}>EDF DEPLOY!</p>}
			</div>
		);
	}
};
