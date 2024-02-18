import { ResultingTip } from '../ResultingTip/ResultingTip';
import { TipPercentageInput } from '../TipPercentageInput/TipPercentageInput';
import styles from './TipCalculator.module.css';

export function TipCalculator() {
    return (
        <div className={styles.card}>
            <section className={styles.formSection}>
                <label>Bill</label>
                <input type="number" />
                <label>Select Tip %</label>
                <TipPercentageInput />
                <label>Number of people</label>
                <input type="number" />
            </section>
            <ResultingTip />
        </div>
    );
}
