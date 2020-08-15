import React from "react";
import { Grid, Card, CardContent, Typography } from "@material-ui/core";
import styles from "./DetailCard.module.css";
import CountUp from "react-countup";
import cx from "classnames";

const DetailCard = ({ type, description, value, lastUpdate }) => {
  return (
    <Grid
      item
      component={Card}
      className={cx(styles.card, styles[type])}
      xs={12}
      md={3}
    >
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {type}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={2.5} separator="," />
        </Typography>
        <Typography color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Grid>
  );
};

export default DetailCard;
