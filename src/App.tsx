import styles from './App.module.css';
import { TipCalculator } from './components/TipCalculator/TipCalculator';

function App() {
    return (
        <div className={styles.app}>
            <p className={styles.appTitle}>SPLI</p>
            <p className={styles.appTitle}>TTER</p>
            <TipCalculator />
        </div>
    );
}

export default App;
