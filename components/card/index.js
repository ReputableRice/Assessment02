import styles from "./card.module.css"
import { useState } from "react";

export default function FruitCard() {
    const cardDescription = "Default";
    const cardTitle = "Default";
    const [hover, setHover] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("var( --lightgrey)");

    function MouseHover() {
        setHover(true)
        setBackgroundColor("var( --ashgrey)");
    }
    function MouseExit() {
        setHover(false)
        setBackgroundColor("var( --lightgrey)");
    }
    return (
        <>
            <div
                className={styles.card}
                onMouseEnter={MouseHover}
                onMouseLeave={MouseExit}
                style={{
                    backgroundColor,
                    transition: "background-color 0.5s ease",
                    borderRadius: "1rem"
                }}
            >
                <div
                    className={styles.cardTitle}

                >{cardTitle}</div>
                <div
                    className={styles.cardTitle}
                >{cardDescription}</div>
            </div>
        </>
    )
}