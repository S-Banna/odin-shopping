import styles from "./Checkout.module.css";

export default function Checkout() {
    return (
        <div className={styles.cont}>
            <h1>Thanks for checking out!</h1>
            <h3>This website is a fake store. All assets were fetched from <a href="https://fakestoreapi.com">fakestoreapi.com</a>.</h3>
        </div>
    )
}