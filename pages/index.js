import Head from "next/head";
import styles from "../styles/Countdown.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>EDF 6 Western PC Release Countdown</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<section className={styles.headerContainer}>
					<h1 className={styles.title}>EDF 6 Western PC Release</h1>
					<h2 className={styles.date}>
						<i>25 · 07 · 24</i>
					</h2>
				</section>
				{/* <section className={styles.countdownContainer}>
					<h1 className={styles.title}>EDF 6 Western PC Release</h1>
					<h2 className={styles.date}>
						<i>25 · 07 · 24</i>
					</h2>
				</section> */}
			</main>

			<footer>
				<a
					href="https://store.steampowered.com/app/2291060/EARTH_DEFENSE_FORCE_6/"
					target="_blank"
					rel="noopener noreferrer">
					<i class="fa-brands fa-steam"></i> Steam
				</a>
				<a href="https://www.d3p.co.jp/edf6/en/" target="_blank" rel="noopener noreferrer">
					<i class="fa-solid fa-circle-arrow-up"></i> Publisher (D3)
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
