import styles from "./card.module.css";
import { useState } from "react";
import { fruitNames } from "@/inventory/inventory";


export default function Card() {
    const [input, setInput] = useState();

    const getCardStyle = flagValue => (input & flagValue) > 0 ? {
        display: 'grid',
        backgroundColor: 'var(--darkblue)',
        color: 'var(--ivory)',
    } : { display: 'none' };

    return (
        <>
            <div className={styles.main}>
                <div className={styles.inputFruit}>
                    <div className={styles.inputLine}></div>
                    <input
                        id='input'
                        type='text'
                        placeholder='Type a Number For Some Fruit!'
                        value={input}
                        onChange={event => setInput(event.target.value)}
                        className={styles.inputBitmask}
                    />
                    <div className={styles.inputLine}></div>
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
                                alt={fruitNames[item].alt}
                                className={styles.fruitImage}
                            />
                        </div>
                    ))
                }
            </div>
        </>
    );
}
