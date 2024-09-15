import React, { useEffect, useState } from "react";

import css from "./style.module.css";

export default (props) => {
	const calculateTimeRemaining = () => {
		props.setTimeDifference(+new Date(props.endDate) - +new Date());
		let timeRemaining = {};
		if (props.timeDifference) {
			timeRemaining = {
				days: Math.abs(Math.floor(props.timeDifference / (1000 * 60 * 60 * 24))),
				hours: Math.abs(Math.floor((props.timeDifference / (1000 * 60 * 60)) % 24)),
				minutes: Math.abs(Math.floor((props.timeDifference / 1000 / 60) % 60)),
				seconds: Math.abs(Math.floor((props.timeDifference / 1000) % 60)),
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
	let pastReleaseDate = false;
	if (props.timeDifference < 0) {
		pastReleaseDate = true;
		timerComponents.push(<div className={css.time}>EDF Deploy!</div>);
	}

	Object.keys(timeRemaining).forEach((interval) => {
		timerComponents.push(
			<span className={css.time} key={interval}>
				{interval == "days" && pastReleaseDate ? "-" : ""}
				{timeRemaining[interval]} {interval}{" "}
			</span>
		);
	});

	if (timerComponents.length) {
		return <div className={css.countdown}>{timerComponents}</div>;
	}
};
