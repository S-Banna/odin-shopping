import { useOutletContext } from "react-router-dom";
import styles from "./Shop.module.css";

export default function Shop() {
	const data = useOutletContext()[1];
	const handleAdd = useOutletContext()[2];
	const handleRemove = useOutletContext()[3];

	return (
		<div className={styles.mainCont}>
			<ul className={styles.ul}>
				{data.map((item) => {
					return (
						<div className={styles.itemCont} key={item.item}>
							<img src={item.image} alt={item.item} className={styles.image} />
							<h4 className={styles.title}>{item.item}</h4>
							<p className={styles.price}>{item.price + "$"}</p>
							{item.count > 0 && <em>{item.count + " in cart."}</em>}
							<div className={styles.buttonCont}>
								<button
									className={styles.button}
									onClick={() => handleAdd(item.id)}
								>
									Add
								</button>
								{item.count > 0 && (
									<button
										className={styles.button}
										onClick={() => handleRemove(item.id)}
									>
										Remove
									</button>
								)}
							</div>
						</div>
					);
				})}
			</ul>
		</div>
	);
}
