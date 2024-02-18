import styles from './ResultingTip.module.css';

export function ResultingTip() {
    return (
        <section className={styles.resultSection}>
            <div className={styles.resultGrid}>
                <div>
                    <div className={styles.resultMainLabel}>Tip Amount</div>
                    <div className={styles.resultSubLabel}>/ person</div>
                </div>
                <div className={styles.resultSumLabel}>$ {0}</div>
                <div>
                    <div className={styles.resultMainLabel}>Total</div>
                    <div className={styles.resultSubLabel}>/ person</div>
                </div>
                <span className={styles.resultSumLabel}>$ {0}</span>
            </div>
            <button className={styles.resetButton}>RESET</button>
        </section>
    );
}
