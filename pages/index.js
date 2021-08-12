import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import InputSlider from "../components/InputSlider";

export default function Home() {
  const [yearlyIncome, setYearlyIncome] = useState(0);
  const [priceBTC, setPriceBTC] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [netValue, setNetValue] = useState(0);

  const calculate = () => {
    let cal_1 = parseFloat(priceBTC) * parseFloat(interestRate);
    let cal_2 = parseFloat(yearlyIncome) / cal_1;
    if (cal_2 === 0) {
      setNetValue(0);
    } else {
      setNetValue(cal_2);
    }
  };

  useEffect(() => {
    if ((yearlyIncome && priceBTC && interestRate) === 0) {
      setNetValue(0);
    } else {
      calculate();
    }
  }, [yearlyIncome, priceBTC, interestRate]);

  return (
    <div className={styles.container}>
      <Head>
        <title>$NERDS</title>
        <meta name="description" content="Thx Satoshi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          width: "100%",
          padding: 20,
          //backgroundColor: "#FFF",
        }}
      >
        <h1 style={{ color: "#FFF", textAlign: "center", fontSize: 80 }}>
          NERDS ON THE BLOCKCHAIN
        </h1>

        {/* <img
          style={{ height: 200, width: 500 }}
          src={require("../img/gravel.png")}
        /> */}

        <h1 style={{ color: "#FFF", textAlign: "center", fontSize: 80 }}>
          WHAT ARE NERDS?
        </h1>

        <p
          style={{
            color: "#FFF",
            textAlign: "center",
            fontSize: 30,
            paddingLeft: 100,
            paddingRight: 100,
          }}
        >
          NERDS ARE A COLLECTION OF 2500 NFTS ON THE ETHEREUM BLOCKCHAIN. EACH
          NFT IS 0.05 ETH TO MINT. YOU CAN MINT MAX 30 NFTS AT A TIME.
        </p>

        <button className={styles.button}>
          <p className={styles.buttontxt}>MINT NERDS</p>
        </button>
      </div>

      <footer className={styles.footer}>
        {/* <a
          href="https://twitter.com/rohunvora"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsored by<span className={styles.logo}>Rohun</span>
        </a> */}
      </footer>
    </div>
  );
}
