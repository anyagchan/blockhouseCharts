import styles from "./page.module.css";

import CandlestickChart from "./components/CandlestickChart.js";
import LineChart from "./components/LineChart.js";
import PieChart from "./components/PieChart.js";
import BarChart from "./components/BarChart.js";

const Home = () => {
  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1>Blockhouse Dashboard</h1>
      </div>
      <div className={styles.main}>
        <section className={styles.chart}>
          <h2>Candlestick Chart</h2>
          <CandlestickChart />
        </section>
        <section className={styles.chart}>
          <h2>Line Chart</h2>
          <LineChart />
        </section>
        <section className={styles.chart}>
          <h2>Bar Chart</h2>
          <BarChart />
        </section>
        <section className={styles.chart}>
          <h2>Pie Chart</h2>
          <PieChart />
        </section>
      </div>
    </div>
  );
};

export default Home;
