import { useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css";

export default function Shop() {
	const data = useOutletContext()[1];

	return (
		<div className={styles.mainCont}>
			<ul className={styles.ul}>
				{data.map((item) => {
					return (
						<div className={styles.itemCont} key={item.item}>
							<img src={item.image} alt={item.item} className={styles.image} />
							<h4 className={styles.title}>{item.item}</h4>
							<p className={styles.price}>{item.price}</p>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
