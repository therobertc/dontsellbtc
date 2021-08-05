import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Don't Sell BTC</title>
        <meta name="description" content="Thx Satoshi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Dont Sell BTC</h1>

        <p className={styles.description}>
          Find out how much passive income you can make
        </p>

        <div className={styles.grid}>
          <p className={styles.description}>Put calculator here</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by<span className={styles.logo}>Rohun</span>
        </a>
      </footer>
    </div>
  );
}
