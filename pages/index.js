import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

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
        <title>Don't Sell BTC</title>
        <meta name="description" content="Thx Satoshi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div
        style={{
          backgroundColor: "#FFF",
        }}
      >
        <main className={styles.main}>
          <h1 className={styles.title}>Dont Sell BTC</h1>

          <p className={styles.description}>
            Find out how much passive income you can make
          </p>

          <div>
            <div>
              <p>How much passive BTC income do you want?</p>
              <input
                className={styles.input}
                id="yearlyIncome"
                placeholder="$100,000"
                type="number"
                onChange={(e) => {
                  if (e.target.value === "") {
                    setYearlyIncome(0);
                  } else {
                    setYearlyIncome(e.target.value);
                  }
                }}
              ></input>
            </div>

            <div>
              <p>What do you think the price of Bitcoin will be?</p>
              <input
                className={styles.input}
                id="priceBTC"
                placeholder="$100,000,000"
                type="number"
                onChange={(e) => {
                  if (e.target.value === "") {
                    setPriceBTC(0);
                  } else {
                    setPriceBTC(e.target.value);
                  }
                }}
              ></input>
            </div>
            <div>
              <p>Estimated interest rates</p>
              <input
                className={styles.input}
                id="interestRate"
                placeholder="5%"
                type="number"
                onChange={(e) => {
                  if (e.target.value === "") {
                    setInterestRate(0);
                  } else {
                    setInterestRate(e.target.value);
                  }
                }}
              ></input>
            </div>

            <div>
              <p style={{ textAlign: "center" }}>Amount of BTC you need</p>
              {/* <input
                className={styles.answer}
                id="amountBTC"
                // placeholder="100 BTC"
                type="number"
                value={netValue}
                readOnly
              ></input> */}

              <p className={styles.answer}>{netValue}</p>
            </div>

            {/* <button className={styles.button}>
              <p className={styles.buttontxt}>CALCULATE PASSIVE INCOME</p>
            </button> */}
          </div>
        </main>
      </div>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/rohunvora"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sponsored by<span className={styles.logo}>Rohun</span>
        </a>
      </footer>
    </div>
  );
}
