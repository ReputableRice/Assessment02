import styles from "./sidebar.module.css"
import { useState, useEffect } from "react";

export default function SideBar() {
    const [hover, setHover] = useState(false)
    const [backgroundColor, setBackgroundColor] = useState("blue")
    
    function MouseHover() {
        setHover(true)
        setBackgroundColor = "red";
      }
      function MouseExit(event){
        setHover(false)
        setBackgroundColor = "blue";
      }
      
    return (
        <div 
        className={styles.sideBar}
        onMouseEnter={MouseHover}
        onMouseLeave={MouseExit}
        style={{backgroundColor:bgColor}}
        >
            <div className={styles.sideBarInnerContainer}>
                
            </div>
        </div>
    )}