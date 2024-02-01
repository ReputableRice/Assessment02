import styles from "./card.module.css";
import { useState } from "react";
import Image from "next/image";
import { fruitNames } from "@/inventory/inventory";


export default function Home() {

    const [input, setInput] = useState(); //stores the input that the user enters

    const getCardStyle = flagValue => (input & flagValue) > 0 ? {
        display: 'flex',
        flexDirection:'row',

        width: '50rem',
        height: '20rem',

        backgroundColor: 'var(--darkblue)',
        color: 'var(--ivory)',

        transition: 'background-Color 0.5s ease',
    } : null;

    return (
        <>
            <div className={styles.main}>
                <input
                    id='input'
                    type='text'
                    placeholder='Insert Number For a Fruit!'
                    value={input}
                    onChange={event => setInput(event.target.value)}
                    className={styles.inputBitmask}
                />
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
                                className={`${styles.fruitDescription} ${styles.fruitText}`}
                                style={{
                                    transition: 'width 0.5s ease',
                                }}>
                                {...fruitNames[item].description}
                            </p>
                            <Image
                                src={fruitNames[item].image}
                                width={100}
                                height={100} />
                        </div>
                    ))
                }
            </div>
        </>
    );
}
