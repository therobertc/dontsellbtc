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
        <title>Don't Sell BTC</title>
        <meta name="description" content="Thx Satoshi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <div
        style={{
          backgroundColor: "#FFF",

          borderColor: "#000",
        }}
      >
        <main className={styles.main}>
          <h1 className={styles.title}>Don't Sell BTC</h1>

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

      {/* <p className={styles.answer}>{netValue}</p>
            </div> */}

      {/* </div>
        </main>
      </div> */}

      <div
        style={{
          width: "100%",
          padding: 20,
          backgroundColor: "#FFF",
        }}
      >
        <h1>How to never sell Bitcoin.</h1>
        <p>~1 minute</p>

        <p>Figure out how much Bitcoin you need.</p>

        <p>
          The idea is to never sell your Bitcoin, but rather loan it out & use
          the interest as passive income so you can live a fulfilling life &
          still keep your Bitcoin forever.
        </p>

        <h1>Quick Explanation:</h1>

        <p>
          As Bitcoin grows in adoption, people & institutions will need to take
          out loans denominated in Bitcoin. You will be paid interest for taking
          that risk. Today, many of the options available may be too risky to
          trust your precious Bitcoin with, but as time passes safer solutions
          will be created.
        </p>

        <h1>
          1: How much money do you want to earn passively from your Bitcoin
          holdings every year?
        </h1>

        {/* <InputSlider></InputSlider> */}

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

        <h1>
          2: What do you think the price of Bitcoin will be in 5-10 years?
        </h1>

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

        <p>
          And finally, we’re just going to use the average American interest
          rate for loaning out gold -- which is 8.5%.
        </p>

        <input
          className={styles.input}
          id="interestRate"
          placeholder="8.5%"
          type="number"
          onChange={(e) => {
            if (e.target.value === "") {
              setInterestRate(0);
            } else {
              setInterestRate(e.target.value);
            }
          }}
        ></input>

        <p>
          Alright, so given the numbers you’ve stated -- you would need to
          accumulate<h1>~{(netValue * 100).toFixed(2)}</h1> Bitcoins in order to
          live completely on your Bitcoin income without ever selling your
          coins.
        </p>

        <button className={styles.button}>
          <p className={styles.buttontxt}>Get Started</p>
        </button>
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
