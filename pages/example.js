
import styles from "@/styles/Home.module.css";
import { useState } from "react";



export default function Home() {

  const[input,setInput] = useState(); //stores the input that the user enters


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

      <header>
        header area
      </header>
      <main className={styles.main}>
        <input //this connects to the useState at the top
          id="input"
          type="text"
          placeholder="bitmask decimal value"
          value={input}
          onChange={event => setInput(event.target.value)} //this is the trigger and sets the setInput 
        />
            {
              Object.keys(classFilters).map(item => ( //if you hover over classFilters you can see what thte values is it takes the keys of the classFilters and takes the value
                <button key={item} style={getClassStyle(item)} > 
                  <p>{item}</p> 
                  {/* prints the item */}
                  <p>{classFilters[item]}</p>
                </button>
              ))
            }
      </main>
      <footer>
        Footer Area
      </footer>
    </>
  );
}
