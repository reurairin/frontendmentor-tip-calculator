import styles from './TipPercentageInput.module.css';

export function TipPercentageInput() {
    return (
        <div className={styles.percentageGrid}>
            <button className={styles.percentageButton}>5%</button>
            <button className={styles.percentageButton}>10%</button>
            <button className={styles.percentageButton}>15%</button>
            <button className={styles.percentageButton}>25%</button>
            <button className={styles.percentageButton}>50%</button>
            <input type="number" placeholder="Custom"></input>
        </div>
    );
}
