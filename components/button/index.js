import styles from "./button.module.css"
import { useState } from "react";

export default function MenuButton() {
    const variableText = "Default";

    const [hover, setHover] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("var(--darkblue)");

    function MouseHover() {
        setHover(true)
        setBackgroundColor("var(--ivory)");
    }
    function MouseExit() {
        setHover(false)
        setBackgroundColor("var(--darkblue)");
    }

    return (
        <button
            className={styles.menuFormat}
            style={{ backgroundColor, transition: "background-color 0.2s ease" }}
            onMouseEnter={MouseHover}
            onMouseLeave={MouseExit}
        >
            {variableText} Meow
        </button>
    )
}