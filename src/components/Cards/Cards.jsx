import React from "react";
import styles from "./Cards.module.css";
import { Grid } from "@material-ui/core";
import DetailCard from "../Card/DetailCard";

const Cards = (props) => {
  const {
    data: { confirmed, recovered, deaths, lastUpdate },
  } = props;
  if (!confirmed) return <p>loading...</p>;
  return (
    <div className={styles.container}>
      <Grid container justify="center" spacing={3}>
        <DetailCard
          type={"infected"}
          value={confirmed.value}
          description={"Number of active case of COVID-19"}
          lastUpdate={lastUpdate}
        />
        <DetailCard
          type={"recovered"}
          value={recovered.value}
          description={"Number of recovered from COVID-19"}
          lastUpdate={lastUpdate}
        />
        <DetailCard
          type={"deaths"}
          value={deaths.value}
          description={"Number of deaths case of COVID-19"}
          lastUpdate={lastUpdate}
        />
      </Grid>
    </div>
  );
};

export default Cards;
