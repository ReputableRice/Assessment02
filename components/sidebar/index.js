import styles from "./sidebar.module.css"
import { useState, useEffect } from "react";

export default function SideBar() {
    const [hover, setHover] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("blue");
    
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
        className={styles.sideBar}
        onMouseEnter={MouseHover}
        onMouseLeave={MouseExit}
        style={{
            backgroundColor,
            transition: 'background-color 0.5s ease'
        }}
        >
            <div className={styles.sideBarInnerContainer}>
                <h1>Fruit Jam</h1>
                <h2>Fruity Fun Facts!</h2>
            </div>
        </div>
    )}