import styles from "./sidebar.module.css"

export default function SideBar() {
    return (
        <div className={styles.sideBarformatting}>
            <h5
                className={styles.titleText}>Learn About Fruits!</h5>
            <p className={styles.mainText}>
                In botany, a fruit is the seed-bearing structure in flowering plants that is formed from the ovary after flowering (see Fruit anatomy).

                Fruits are the means by which flowering plants (also known as angiosperms) disseminate their seeds. Edible fruits in particular have long propagated using the movements of humans and other animals in a symbiotic relationship that is the means for seed dispersal for the one group and nutrition for the other; in fact, humans and many other animals have become dependent on fruits as a source of food. Consequently, fruits account for a substantial fraction of the world's agricultural output, and some (such as the apple and the pomegranate) have acquired extensive cultural and symbolic meanings.

                In common language usage, fruit normally means the seed-associated fleshy structures (or produce) of plants that typically are sweet or sour and edible in the raw state, such as apples, bananas, grapes, lemons, oranges, and strawberries. In botanical usage, the term fruit also includes many structures that are not commonly called 'fruits' in everyday language, such as nuts, bean pods, corn kernels, tomatoes, and wheat grains.
            </p>
            <h5 className={styles.instructionTitleText}>Instructions</h5>
            <ul className={styles.instructionText}>
                <li>Type a number into the textbox</li>
                <li>Corresponding fruit(s) will be displayed based on the number</li>
            </ul>
        </div>
    )
}