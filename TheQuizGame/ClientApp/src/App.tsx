import * as React from "react";
import { ReactElement } from "react";
import { Route } from "react-router";
import "./custom.css";
import EndGame from "./Pages/EndGame";
import GamePage from "./Pages/GamePage";
import LandingPage from "./Pages/LandingPage";

interface Props {}

export default function AppPage({}: Props): ReactElement {


  const [difficulty, setDifficulty] = React.useState<number>(30);

  const [score, setScore] = React.useState(0);

  return (
    <React.Fragment>
      <Route exact path="/">
        <LandingPage difficulty = {difficulty} setDifficulty = {setDifficulty} />
      </Route>
      <Route exact path="/game">
        <GamePage difficulty = {difficulty} score = {score} setScore = {setScore} />
      </Route>
      <Route exact path="/end">
        <EndGame score = {score} setScore = {setScore} />
      </Route>
    </React.Fragment>
  );
}
