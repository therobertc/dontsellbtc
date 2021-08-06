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

        <div>
          <div>
            <p>How much passive BTC income do you want?</p>
            <input className={styles.input} id="yearlyIncome"></input>
          </div>

          <div>
            <p>What do you think the price of Bitcoin will be?</p>
            <input className={styles.input} id="priceBTC"></input>
          </div>
          <div>
            <p>Estimated interest rates</p>
            <input className={styles.input} id="interestRate"></input>
          </div>

          <div>
            <p>Amount of BTC you need</p>
            <input className={styles.input} id="amountBTC"></input>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/rohunvora"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by<span className={styles.logo}>Rohun</span>
        </a>
      </footer>
    </div>
  );
}
