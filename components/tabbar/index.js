import styles from "./navbar.module.css"
import { useState, useEffect } from "react";
import MenuButton from "@/components/button"

export default function NavBar() {
    const [hover, setHover] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("var( --lightgrey)");
    
    function MouseHover() {
        setHover(true)
        setBackgroundColor("var( --ashgrey)");
      }
      function MouseExit(){
        setHover(false)
        setBackgroundColor("var( --lightgrey)");
      }

      //const MouseHover = setHover(true) & setBackgroundColor("var( --ashgrey)");

    return (
        <div 
        className={styles.navBar}
        onMouseEnter={MouseHover}
        onMouseLeave={MouseExit}
        style={{
            backgroundColor,
            transition: 'background-color 0.5s ease'
        }}
        >
            <div className={styles.navBarInnerContainer}>
                <h1 className={styles.headerPosition}>Fruit Jam</h1>
                <div className={styles.buttonGroup}>
                    <MenuButton className={styles.buttonPosition}/>
                    <MenuButton className={styles.buttonPosition}/>
                    <MenuButton className={styles.buttonPosition}/>
                </div>
            </div>
        </div>
    )}