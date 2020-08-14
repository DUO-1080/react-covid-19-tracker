import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);
  console.log(dailyData);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchData();
    console.log("chart fetch data finish.");
  }, []);

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map((daily) => daily.date),
        datasets: [
          {
            label: "infected",
            borderColor: "#3333ff",
            data: dailyData.map((daily) => daily.confirmed),
            fill: true,
          },
          {
            label: "deaths",
            data: dailyData.map((daily) => daily.deaths),
            borderColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
