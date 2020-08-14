import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import styles from "./Chart.module.css";
import { Line, Bar } from "react-chartjs-2";

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchData();
  }, []);
  console.log(confirmed, recovered, deaths);
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
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "recovered", "deaths"],
        datasets: [
          {
            label: "People",
            data: [confirmed.value, recovered.value, deaths.value],
            backgroundColor: [
              "rgba(0,0,255,0.5)",
              "rgba(0,255,0,0.5)",
              "rgba(255,0,0,0.5)",
            ],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? barChart : lineChart}</div>
  );
};

export default Chart;
