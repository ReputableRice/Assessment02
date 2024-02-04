import styles from './footer.module.css'
import { fruitNames } from '@/inventory/inventory';

export default function FooterFruit() {
    return (
        <>
            <footer className={styles.footerFruit}>
                <div 
                className={styles.fruitImageFooter}
                style={{
                    width: '10vw',
                    display: 'flex',
                    justifyContent: 'space-around',
                    margin: 'auto',
                    opacity: '0.5'
                    }}>
                    {
                        Object.keys(fruitNames).map(item => (
                            <img
                                src={fruitNames[item].image}
                                alt={fruitNames[item].alt}
                                className={styles.footerFruitImage}
                                width={15}
                            />
                        ))
                    }
                </div>
                <div className={styles.footerText}>© Jackie T. 2024</div>
                <div className={styles.footerText}>Information Sourced Via Wikipedia</div>
            </footer>
        </>
    )
}