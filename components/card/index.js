import styles from "./card.module.css";
import { useState } from "react";
import { fruitNames } from "@/inventory/inventory";


export default function Home() {
    const [input, setInput] = useState(); //stores the input that the user enters

    const getCardStyle = flagValue => (input & flagValue) > 0 ? {
        display: 'grid',
        opacity: '1',

        backgroundColor: 'var(--darkblue)',
        color: 'var(--ivory)',

    } : { display: 'none', opacity: '0' };

    return (
        <>
            <div className={styles.main}>
                <div className={styles.inputFruit}>
                    <input
                        id='input'
                        type='text'
                        placeholder='Insert Number For a Fruit!'
                        value={input}
                        onChange={event => setInput(event.target.value)}
                        className={styles.inputBitmask}
                    />
                </div>
                {
                    Object.keys(fruitNames).map(item => (
                        <div
                            className={styles.card}
                            key={item}
                            style={getCardStyle(item)}
                        >
                            <h1 className={`${styles.fruitTitle} ${styles.fruitText}`}>
                                {...fruitNames[item].fruit}
                            </h1>
                            <p
                                className={`${styles.fruitDescription} ${styles.fruitText}`}>
                                {...fruitNames[item].description}
                            </p>
                            <img
                                src={fruitNames[item].image}
                                className={styles.fruitImage}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
}
