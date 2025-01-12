import styles from "./Home.module.css";
import { Link, useOutletContext } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Home() {
	const [displayed, setDisplayed] = useState(0);
	const images = useOutletContext()[0];

	useEffect(() => {
		const interval = setInterval(() => {
			setDisplayed((prevDisplayed) => (prevDisplayed + 1) % 4);
		}, 2000);
		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className={styles.container}>
			<div className={styles.imageSlider}>
				<img className={styles.image} src={images[displayed].image}></img>
			</div>
			<Link to="/shop" className={styles.link}>
				Get started!
			</Link>
		</div>
	);
}
