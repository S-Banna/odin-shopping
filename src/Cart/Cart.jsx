import styles from "./Cart.module.css";
import { Link } from "react-router-dom";

export default function Cart({ data }) {
    let total = 0;

    return (
        <div className={styles.mainCont}>
            <div className={styles.borderWrapper}>
                <div className={styles.itemCont}>
                    {data.filter(item => item.count > 0).map((item) => {
                        const text = item.item.length > 10 ? item.item.substring(0, 7) + "..." : item.item;
                        total = total + item.price * item.count;
                        return (
                            <div key={item.item} className={styles.item}>
                                <img className={styles.image} src={item.image} alt={item.item} />
                                <div className={styles.textCont}>
                                    <p>{text}</p>
                                    <p>{item.count + " piece(s): " + item.count * item.price + "$"}</p>
                                </div>
                            </div>
                        )
                    })}
                    <p>{"Total: " + total + "$"}</p>
                    <Link className={styles.link} to="/checkout">Checkout</Link>
                </div>
            </div>
        </div>
    )
}