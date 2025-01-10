import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

export default function NavBar({ handletoggle }) {
    return (
        <div className={styles.navBar}>
            <h3 style={{margin: 0, fontSize: "24px"}}>Logo</h3>
            <div className={styles.buttons}>
                <Link className={styles.link} to={"home"}>Home</Link>
                <Link className={styles.link} to={"shop"}>Shop</Link>
                <button className={styles.button} onClick={() => handletoggle()}>Cart</button>
            </div>
        </div>
    )
}