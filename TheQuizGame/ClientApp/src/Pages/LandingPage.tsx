import React, { ReactElement } from "react";
import { useStyles } from "./Styles/LandingPageStyles";

interface Props {}

export default function LandingPage({}: Props): ReactElement {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>Car Quiz Game</div>
      <div className={classes.body}>
        {/* Difficulty */}
        {/* Start */}
      </div>
    </div>
  );
}
