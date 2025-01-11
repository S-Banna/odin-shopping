import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar({ toggleCart, toggled }) {
	return (
		<div className={styles.navBar}>
			<h3 style={{ margin: 0, fontSize: "24px" }}>Logo</h3>
			<div className={styles.buttons}>
				<Link className={styles.link} to={"home"}>
					Home
				</Link>
				<Link className={styles.link} to={"shop"}>
					Shop
				</Link>
				{toggled ? (
					<button className={styles.button} style={{boxShadow: "0 0 5px 4px greenyellow"}} onClick={toggleCart}>
						Cart
					</button>
				) : (
					<button className={styles.button} onClick={toggleCart}>
						Cart
					</button>
				)}
			</div>
		</div>
	);
}
