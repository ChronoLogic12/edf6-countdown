import { useEffect, useState } from "react";

import css from "./style.module.css";

export default function Player() {
	const playlist = require("../../../public/audio/EDF41.mp3");
	const [audioElement, setAudioElement] = useState(null);
	const [playButton, setPlayButton] = useState(null);

	useEffect(() => {
		setAudioElement(document.querySelector("#myAudio"));
		setPlayButton(document.querySelector("#playAudio"));
	}, []);

	const handleAudio = () => {
		if (!playButton.classList.contains("isPlaying")) {
			playButton.classList.add("isPlaying");
			audioElement.setAttribute("src", playlist);
			audioElement.play();
		} else {
			audioElement.pause();
			playButton.classList.remove("isPlaying");
		}
	};
	return (
		<div className={css.player}>
			<audio id="myAudio">Your browser does not support the audio element.</audio>

			<p>Click the Play/Stop button to save our mother earth!</p>
			<i className="fa-solid fa-caret-down"></i>
			<button className={css.button} id="playAudio" onClick={handleAudio} type="button">
				Play/Stop
			</button>
		</div>
	);
}
