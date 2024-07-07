import React, { useEffect, useState } from "react";

import Head from "next/head";
import css from "../styles/Home.module.css";

import { EDF41 } from "../../public/audio/EDF41.mp3";
import { EDF5 } from "../../public/audio/EDF5.mp3";

import { Countdown, Player } from "../components";

export default function Home() {
	const [endDate, setEndDate] = useState("");

	useEffect(() => {
		setEndDate(new Date("july 25, 2024 00:00:00").getTime());
	}, []);

	return (
		<div className={css.container}>
			<Head>
				<title>EDF 6 Western PC Release Countdown</title>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className={css.pageContainer}>
				<section className={css.headerContainer}>
					<h1 className={css.title}>EDF 6 Western PC Release</h1>
					<h2 className={css.date}>
						<i>25 · 07 · 24</i>
					</h2>
				</section>
				<section className={css.countdownContainer}>
					<Countdown endDate={endDate} />
				</section>
			</main>

			<footer>
				<Player />
				<a
					href="https://store.steampowered.com/app/2291060/EARTH_DEFENSE_FORCE_6/"
					target="_blank"
					rel="noopener noreferrer">
					<i className="fa-brands fa-steam"></i> Steam
				</a>
				<a href="https://www.d3p.co.jp/edf6/en/" target="_blank" rel="noopener noreferrer">
					<i className="fa-solid fa-circle-arrow-up"></i> Publisher (D3)
				</a>
				<small className={css.disclaimer}>
					All images, text, and audio related to Sandlot's games are the property of Sandlot. This
					website is not affiliated with or endorsed by Sandlot. All rights to the respective
					intellectual property belong to their respective owners. No copyright infringement is
					intended.
				</small>
			</footer>

			<style jsx global>{`
				html,
				body {
					padding: 0;
					margin: 0;
				}
				* {
					box-sizing: border-box;
				}
			`}</style>
		</div>
	);
}
