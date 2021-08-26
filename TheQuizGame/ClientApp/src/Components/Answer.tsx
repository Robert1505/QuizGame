import {
  Card,
  CardContent,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import React, { ReactElement, useState } from "react";
import { IAnswer } from "./Answers";
import Modal from "./Modal";




interface Props {
  character: string;
  answer: IAnswer;
  setNextIndex: Function;
  increaseScore: Function;
  time: number;
  setTime: Function;
  setTimerTimeout: Function;
  score: number;
  setIsTimeStopped: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 275,
      background: "white !important",
      width: 130,
      height: 130,
      borderRadius: 7,
      cursor: 'pointer',
      paddingTop: 45,
      textAlign: 'center',
      paddingLeft: 5,
      paddingRight: 5
    },
    style: {
      fontFamily: 'Poppins',
      fontWeight: 800,
    },
    
  })
);

export default function Answer(props: Props): ReactElement {
  const classes = useStyles();
  const [isClicked, setIsClicked] = useState(false);


  const handleClick = () => {
    setIsClicked(true);
    if(props.answer.isCorrect){
      props.increaseScore();
    }
    props.setIsTimeStopped(true);
    setTimeout(function(){
      setIsClicked(false);
    }, 1000);
  }


  return (
    <>
      <div className={classes.root} onClick={() => handleClick()}>
        <div className = {classes.style}>
          {props.character}. &nbsp; {props.answer.text}
        </div>
      </div>
      <Modal setIsTimeStopped = {props.setIsTimeStopped} score = {props.score} setTimerTimeout = {props.setTimerTimeout} setTime = {props.setTime} time = {props.time} isClicked = {isClicked} isCorrect = {props.answer.isCorrect} setNextIndex = {props.setNextIndex} />
    </>
  );
}
