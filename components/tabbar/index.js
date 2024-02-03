import styles from "./navbar.module.css"
import { useState, useEffect } from "react";
import MenuButton from "@/components/button"
import Image from "next/image";

export default function NavBar() {
    const [hover, setHover] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("var( --lightgrey)");
    
    function MouseHover() {
        setHover(true)
        setBackgroundColor("var( --ashgrey)");
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
                <img src='/images/logo.png' className={styles.headerPosition}/>
            </div>
        </div>
    )}