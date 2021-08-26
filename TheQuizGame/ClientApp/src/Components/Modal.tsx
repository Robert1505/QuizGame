import React, { useEffect } from "react";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import trueAnswer from "../Backgrounds/tick.png";
import wrongAnswer from "../Backgrounds/cross.png";
import PrimaryButton from "./PrimaryButton";
import { ReactElement } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core";
import { clearInterval } from "timers";

interface Props {
  isClicked: boolean;
  isCorrect: boolean;
  setNextIndex: Function;
  time: number;
  setTime: Function;
  setTimerTimeout: Function;
  score: number;
  setIsTimeStopped: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    align: {
      textAlign: "center",
    },
    text: {
      fontFamily: "Poppins",
      fontWeight: 800,
      fontSize: 30,
      paddingTop: 15,
    },
    continueButton: {
      border: 0,
      fontWeight: 800,
      fontSize: 40,
      marginBottom: 30,
      color: "black",
    },
  })
);

export default function Modal(props: Props): ReactElement {
  useEffect(() => {
    if (props.isClicked === true) {
      submit();
    }
  }, [props.isClicked]);

  const classes = useStyles();

  const submit = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        if (props.isCorrect) {
          return (
            <div className={classes.align}>
              <img src={trueAnswer} />
              <p className={classes.text}>Correct</p>
              <button
                onClick={() => {
                  onClose();
                  props.setNextIndex();
                  props.setIsTimeStopped(false);
                }}
                className={classes.continueButton}
              >
                Press to continue
              </button>
            </div>
          );
        } else {
          return (
            <div className={classes.align}>
              <img src={wrongAnswer} />
              <p className={classes.text}>Incorrect</p>
              <button
                onClick={() => {
                  onClose();
                  props.setNextIndex();
                  props.setIsTimeStopped(false);
                }}
                className={classes.continueButton}
              >
                Press to continue
              </button>
            </div>
          );
        }
      },
    });
  };

  return <></>;
}
