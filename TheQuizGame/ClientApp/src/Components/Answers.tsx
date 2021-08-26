import { createStyles, makeStyles, Theme } from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import Answer from "./Answer";

interface Props {
  answers: IAnswer[];
  setNextIndex: Function;
  increaseScore: Function;
  time: number;
  setTime: Function;
  setTimerTimeout: Function;
  score: number;
  setIsTimeStopped: Function;
}

export interface IAnswer {
  text: string;
  isCorrect: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    align: {
      display: "flex",
      justifyContent: "center",
      gap: 32,
      marginBottom: 32,
    },
  })
);


export default function Answers(props: Props): ReactElement {
  const classes = useStyles();

  const renderAnswers = () => {
    if(props.answers.length === 4){
      return (
        <div>
          <div className={classes.align}>
            <Answer setIsTimeStopped = {props.setIsTimeStopped} score = {props.score} setTimerTimeout = {props.setTimerTimeout} setTime = {props.setTime} time = {props.time} increaseScore = {props.increaseScore} setNextIndex={props.setNextIndex} character="A" answer={props.answers[0]} />
            <Answer setIsTimeStopped = {props.setIsTimeStopped} score = {props.score} setTimerTimeout = {props.setTimerTimeout} setTime = {props.setTime} time = {props.time} increaseScore = {props.increaseScore} setNextIndex={props.setNextIndex} character="B" answer={props.answers[1]} />
          </div>
          <div className={classes.align}>
            <Answer setIsTimeStopped = {props.setIsTimeStopped} score = {props.score} setTimerTimeout = {props.setTimerTimeout} setTime = {props.setTime} time = {props.time} increaseScore = {props.increaseScore} setNextIndex={props.setNextIndex} character="C" answer={props.answers[2]} />
            <Answer setIsTimeStopped = {props.setIsTimeStopped} score = {props.score} setTimerTimeout = {props.setTimerTimeout} setTime = {props.setTime} time = {props.time} increaseScore = {props.increaseScore} setNextIndex={props.setNextIndex} character="D" answer={props.answers[3]} />
          </div>
        </div>
      );
    }
    return (
      <div>

      </div>
    )
  }

  return renderAnswers();
  
}
