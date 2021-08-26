import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import React, { ReactElement } from "react";
import PrimaryButton from "../Components/PrimaryButton";
import { useStyles } from "./Styles/LandingPageStyles";

interface Props {
  difficulty: number;
  setDifficulty: Function;
}

export default function LandingPage(props: Props): ReactElement {

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    props.setDifficulty(event.target.value as number);
  };

  return (
    <div className={classes.landingPage}>
      <div className={classes.title}>Car Quiz Game</div>
      <div className={classes.body}>
        {/* Difficulty */}
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label" className = {classes.label}>
            Difficulty
          </InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={props.difficulty}
            onChange={handleChange}
            label="Difficulty"
            className={classes.select}
          >
            <MenuItem value = {30}>Easy</MenuItem>
            <MenuItem value = {20}>Medium</MenuItem>
            <MenuItem value = {10}>Hard</MenuItem>
          </Select>
        </FormControl>
        {/* Start */}
          <PrimaryButton />
      </div>
    </div>
  );
}
