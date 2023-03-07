import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./game.css";
import logo from "./images/logo.png";
import corn from "./images/corn.png";
// import salmon_cheese from "./images/salmon_cheese.png";
import salmon from "./images/salmon.png";
import sea_bream from "./images/sea_bream.png";
import tuna from "./images/tuna.png";
import PopupGameover from "./gameover";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Timer from "./timer";
// import { sushiImages } from "./images";

function GamePlay(props) {
  const [start, setStart] = useState(true);
  const [isRunning, setIsRunning] = useState(false);
  const [quest1, setQuest1] = useState(false);
  const [quest2, setQuest2] = useState(false);
  const [quest3, setQuest3] = useState(false);
  const [gameover, setGameover] = useState(false);
  const { User } = props;
  //   console.log(sushiImages[0]);

  function startTimer() {
    setIsRunning(true);
    setStart(false);
    setQuest1(true);
  }

  function stopTimer() {
    setIsRunning(false);
  }

  function restartTimer() {
    setIsRunning(true);
  }

  function OK1() {
    setQuest1(false);
    setQuest2(true);
  }

  function OK2() {
    setQuest2(false);
    setQuest3(true);
  }

  function OK3() {
    <></>;
  }

  function NG() {
    setGameover(true);
  }

  return (
    <div className="gameplay">
      <img src={logo} alt="logo" className="logo"></img>
      {/* isRunning={isRunning}　をつけると、timerのトリガーを設定できる*/}
      <Timer isRunning={isRunning} />
      <p>player name : {User}</p>
      <div className="game">
        {start ? (
          <div className="start">
            {/*start window*/}
            <h1>Hello! {User}</h1>
            <h1>Are you ready ...?</h1>
            <Button
              variant="primary"
              size="lg"
              /*disabled(無効化ボタン！)*/ onClick={startTimer}
            >
              start!
            </Button>
          </div>
        ) : (
          <>
            <Button
              variant="primary"
              size="lg"
              /*disabled(無効化ボタン！)*/ onClick={stopTimer}
            >
              stop!
            </Button>
            <Button
              variant="primary"
              size="lg"
              /*disabled(無効化ボタン！)*/ onClick={restartTimer}
            >
              restart!
            </Button>
          </>
        )}
        {quest1 && (
          <>
            {/*question1*/}
            <h1></h1>
            <h1>Which is corn?</h1>
            <img src={corn} alt="corn" onClick={OK1} />
            <img src={salmon} alt="salmon" onClick={NG} />
          </>
        )}
        {quest2 && (
          <>
            {/*question2*/}
            <h1></h1>
            <h1>Which is salmon?</h1>
            <img src={tuna} alt="tuna" onClick={NG} />
            <img src={salmon} alt="salmon" onClick={OK2} />
          </>
        )}
        {quest3 && (
          <>
            {/*question3*/}
            <h1></h1>
            <h1>Which is the higher cost rate?</h1>
            <img src={sea_bream} id="sea_bream" alt="sea_bream" onClick={NG} />
            <img src={tuna} alt="tuna" onClick={OK3} />
          </>
        )}
      </div>
      <div className="gameover">{gameover && <PopupGameover />}</div>
    </div>
  );
}

export { GamePlay };
