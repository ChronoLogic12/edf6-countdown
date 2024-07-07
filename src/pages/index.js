import React, { useEffect, useState } from "react";

import Head from "next/head";
import styles from "../styles/Countdown.module.css";

import { Countdown } from "../components";

export default function Home() {
	const [endDate, setEndDate] = useState("");

	useEffect(() => {
		setEndDate(new Date("july 25, 2024 00:00:00").getTime());
	}, []);

	return (
		<div className={styles.container}>
			<Head>
				<title>EDF 6 Western PC Release Countdown</title>
				<link rel="icon" href="/favicon.png" />
			</Head>

			<main className={styles.pageContainer}>
				<section className={styles.headerContainer}>
					<h1 className={styles.title}>EDF 6 Western PC Release</h1>
					<h2 className={styles.date}>
						<i>25 · 07 · 24</i>
					</h2>
				</section>
				<section className={styles.countdownContainer}>
					<Countdown endDate={endDate} />
				</section>
			</main>

			<footer>
				<a
					href="https://store.steampowered.com/app/2291060/EARTH_DEFENSE_FORCE_6/"
					target="_blank"
					rel="noopener noreferrer">
					<i className="fa-brands fa-steam"></i> Steam
				</a>
				<a href="https://www.d3p.co.jp/edf6/en/" target="_blank" rel="noopener noreferrer">
					<i className="fa-solid fa-circle-arrow-up"></i> Publisher (D3)
				</a>
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
