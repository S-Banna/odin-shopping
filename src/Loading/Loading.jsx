import styles from "./loading.module.css";

export default function Loading() {
    return (
        <div className={styles.cont}>
            <h1 className={styles.one}>Loading...</h1>
            <p className={styles.two}>Please wait while store data is fetched.</p>
        </div>
    )
}