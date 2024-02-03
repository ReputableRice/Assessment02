import styles from "./navbar.module.css"
import { useState, useEffect } from "react";
import LogoOverlay from "../logo";

export default function NavBar() {
    const [hover, setHover] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("var( --indigo)");
    
    function MouseHover() {
        setHover(true)
        setBackgroundColor("var( --darkblue)");
      }
      function MouseExit(){
        setHover(false)
        setBackgroundColor("var( --indigo)");
      }

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
                <LogoOverlay/>
            </div>
        </div>
    )}