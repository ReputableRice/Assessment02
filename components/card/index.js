import styles from "./card.module.css"
import { useState } from "react";
import Link from 'next/link'

export default function FruitCard() {
    const cardDescription = "Default";
    const cardTitle = "Default";
    const [hover, setHover] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("");

    function MouseHover() {
        setHover(true)
        setBackgroundColor("var( --ashgrey)");
    }
    function MouseExit() {
        setHover(false)
        setBackgroundColor("");
    }

    return (
        <>
            <Link
                href=''//Put link to fruit page here after applying a function to generate which fruit based on bits
                className={styles.card}
                onMouseEnter={MouseHover}
                onMouseLeave={MouseExit}
                style={{
                    backgroundColor,
                    transition: "background-color 0.2s ease",
                    borderRadius: "1rem",
                    textDecoration: "none",
                }}
            >
                <span
                    className={styles.cardTitle}
                >{cardTitle}</span>
                <span
                    className={styles.cardDescription}
                >{cardDescription}</span>
            </Link>
        </>
    )
}