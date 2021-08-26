import React, { ReactElement, useEffect, useState } from "react";
import Answers, { IAnswer } from "../Components/Answers";
import Question from "../Components/Question";
import { getQuestions } from "../Services/QuestionService";
import { useStyles } from "./Styles/GamePageStyles";
import { useHistory } from "react-router";

export interface IQuestion {
  id: string;
  text: string;
  answers: IAnswer[];
}

interface Props {
  difficulty: number;
  score: number;
  setScore: Function;
}

function generateRandomInteger(max: number) {
  return Math.floor(Math.random() * max) + 1;
}

export default function GamePage(props: Props): ReactElement {
  const classes = useStyles();
  const [time, setTime] = useState(props.difficulty);
  const [isTimeStopped, setIsTimeStopped] = useState<boolean>(false);
  const [usedIndexes, setUsedIndexes] = useState<number[]>([]);
  const [index, setIndex] = useState(generateRandomInteger(103));
  const [allQuestions, setAllQuestions] = useState<IQuestion[]>([]);
  const [timerTimeout, setTimerTimeout] = useState<NodeJS.Timeout>();
  const history = useHistory();

  useEffect(() => {
    getQuestions().then((data) => {
      setAllQuestions(data);
    });
  }, []);

  useEffect(() => {
    if (time > 0 && !isTimeStopped) {
      setTimerTimeout(setTimeout(() => setTime(time - 1), 1000));
    } else if (!isTimeStopped) {
      setNextIndex();
    }
  }, [time, isTimeStopped]);

  useEffect(() => {
    if (timerTimeout !== undefined) clearTimeout(timerTimeout);
    setTime(props.difficulty);
  }, [index]);

  useEffect(() => {
    if (usedIndexes.length >= 15) {
      history.push("/end");
    }
  }, [usedIndexes]);

  const getCurrentQuestionText = () => {
    if (allQuestions.length > 0) {
      return allQuestions[index].text;
    }
    return "";
  };

  const getCurrentAnswers = () => {
    if (allQuestions.length > 0) {
      return allQuestions[index].answers;
    }
    return [];
  };

  const increaseScore = () => {
    props.setScore(props.score + 1);
  };

  const setNextIndex = (): number => {
    let ok: boolean = false;
    const randomIndex = generateRandomInteger(103);
    for (let i = 0; i < usedIndexes.length; i++) {
      if (randomIndex === usedIndexes[i]) {
        ok = true;
      }
    }
    if (ok === true) {
      setIndex(randomIndex);
      setUsedIndexes([...usedIndexes, randomIndex]);
      return setNextIndex();
    }
    else{
      setIndex(randomIndex);
      setUsedIndexes([...usedIndexes, randomIndex]);
      return randomIndex;
    }
  };

  return (
    <div className={classes.gamepage}>
      <div className={classes.scoreandtime}>
        Score: &nbsp; {props.score}
        <span className={classes.time}>Timer: &nbsp; {time}</span>
      </div>
      <div>
        <Question question={getCurrentQuestionText()} />
      </div>
      <div>
        <Answers
          setIsTimeStopped = {setIsTimeStopped}
          score = {props.score}
          setTimerTimeout = {setTimerTimeout}
          setTime = {setTime}
          time = {time}
          increaseScore={increaseScore}
          setNextIndex={setNextIndex}
          answers={getCurrentAnswers()}
        />
      </div>
    </div>
  );
}
