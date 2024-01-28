import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import SideBar from "@/components/sidebar";


export default function Home() {
  return (
    <>
      <Head>
        <title>Bitwise App</title>
        <meta name="Fruit Jam" content="A Bitwise Mini Application made using create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <SideBar/>
      </main>
    </>
  );
}
