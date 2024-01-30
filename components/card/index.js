import styles from "./card.module.css"
import { useState } from "react";
import Link from 'next/link'

export default function FruitCard() {
    const cardDescription = "Default";
    const cardTitle = "Default";
    const [hover, setHover] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("");
    const [height, setHeight] = useState("5rem");

    function MouseHover() {
        setHover(true)
        setBackgroundColor("var( --ashgrey)");
        setHeight("10rem");

    }
    function MouseExit() {
        setHover(false)
        setBackgroundColor("");
        setHeight("5rem");
    }


    const [input, setInput] = useState(); //stores the input that the user enters


    const classFilters = {
        1: 'Magician',  //key: value
        2: 'Theif',
        4: 'Warrior',
        8: 'Bowman',
        16: 'Pirate',
        32: 'Nothing'
    }
    const getClassStyle = flagValue => (input & flagValue) > 0 ? {
        backgroundColor: 'yellow',

    } : null;

    return (
        <>
            <input //this connects to the useState at the top
                className={styles.card}
                id="input"
                type="text"
                placeholder="bitmask decimal value"
                value={input}
                onChange={event => setInput(event.target.value)} //this is the trigger and sets the setInput 
            />
            {
                Object.keys(classFilters).map(item => ( //if you hover over classFilters you can see what thte values is it takes the keys of the classFilters and takes the value
                    <button 
                    key={item} 
                    style={getClassStyle(item)} 
                    className={styles.card}
                    >
                        <p>{item}</p>
                        {/* prints the item */}
                        <p>{classFilters[item]}</p>
                    </button>
                ))
            }
            <Link
                href="/example"//Put link to fruit page here after applying a function to generate which fruit based on bits
                className={styles.card}
                onMouseEnter={MouseHover}
                onMouseLeave={MouseExit}
                style={{
                    backgroundColor,
                    transition: "background-color 0.2s ease , height 0.2s ease",
                    borderRadius: "1rem",
                    textDecoration: "none",
                    height
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