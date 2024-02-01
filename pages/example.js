import styles from "@/styles/Home.module.css";
import { useState } from "react";



export default function Home() {

  const[input,setInput] = useState(); //stores the input that the user enters


  const classFilters = {
    1: { fruit: 'Apple', description: 'An apple is a round, edible fruit produced by an apple tree (Malus spp., among them the domestic or orchard apple; Malus domestica). Apple trees are cultivated worldwide and are the most widely grown species in the genus Malus. The tree originated in Central Asia, where its wild ancestor, Malus sieversii, is still found. Apples have been grown for thousands of years in Asia and Europe and were introduced to North America by European colonists. Apples have religious and mythological significance in many cultures, including Norse, Greek, and European Christian tradition.', },
    2: { fruit: 'Banana', description: 'A banana is an elongated, edible fruit – botanically a berry[1][2] – produced by several kinds of large herbaceous flowering plants in the genus Musa.[3] In some countries, bananas used for cooking may be called "plantains", distinguishing them from dessert bananas. The fruit is variable in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow upward in clusters near the top of the plant. Almost all modern edible seedless (parthenocarp) bananas come from two wild species – Musa acuminata and Musa balbisiana. The scientific names of most cultivated bananas are Musa acuminata, Musa balbisiana, and Musa × paradisiaca for the hybrid Musa acuminata × M. balbisiana, depending on their genomic constitution. The old scientific name for this hybrid, Musa sapientum, is no longer used.' },
    4: { fruit: 'Blueberry', description: 'Blueberries are a widely distributed and widespread group of perennial flowering plants with blue or purple berries. They are classified in the section Cyanococcus within the genus Vaccinium. Vaccinium also includes cranberries, bilberries, huckleberries and Madeira blueberries.[1] Commercial blueberries—both wild (lowbush) and cultivated (highbush)—are all native to North America. The highbush varieties were introduced into Europe during the 1930s.[2]' },
    8: { fruit: 'Grape', description: 'A grape is a fruit, botanically a berry, of the deciduous woody vines of the flowering plant genus Vitis. Grapes are a non-climacteric type of fruit, generally occurring in clusters. The cultivation of grapes began perhaps 8,000 years ago, and the fruit has been used as human food over history. Eaten fresh or in dried form (as raisins, currants and sultanas), grapes also hold cultural significance in many parts of the world, particularly for their role in winemaking. Other grape-derived products include various types of jam, juice, vinegar and oil.' },
    16: { fruit: 'Watermelon', description: 'Watermelon (Citrullus lanatus) is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties. Watermelon is grown in favorable climates from tropical to temperate regions worldwide for its large edible fruit, which is a berry with a hard rind and no internal divisions, and is botanically called a pepo. The sweet, juicy flesh is usually deep red to pink, with many black seeds, although seedless varieties exist. The fruit can be eaten raw or pickled, and the rind is edible after cooking. It may also be consumed as a juice or an ingredient in mixed beverages.' },
    32: { fruit: 'Orange', description: 'An orange is a fruit of various citrus species in the family Rutaceae (see list of plants known as orange); it primarily refers to Citrus × sinensis,[1] which is also called sweet orange, to distinguish it from the related Citrus × aurantium, referred to as bitter orange.' }
  };
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
        <table>
          <tbody>
            {
              Object.keys(classFilters).map(item => ( //if you hover over classFilters you can see what thte values is it takes the keys of the classFilters and takes the value
                <tr key={item} style={getClassStyle(item)} > 
                  <td>{item}</td> 
                  {/* prints the item */}
                  <td>{classFilters[item].fruit}</td>
                  <td>{classFilters[item].description}</td>
                </tr>
              ))
            }
          </tbody>
          
        </table>
      </main>
    </>
  );
}
