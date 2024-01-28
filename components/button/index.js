import styles from "./button.module.css"

export default function MenuButton() {
    const variableText = "Default";

    return(
    <button
    className={styles.menuFormat}
    style={{backgroundColor: "red"}}
    >
        {variableText} Meow
    </button>
    )}