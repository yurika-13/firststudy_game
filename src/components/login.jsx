import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/logo.png";
import { useState, useRef } from "react";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import "./login.css";
import { GamePlay } from "./game";

function Login() {
  const [start, setStart] = useState(true);
  const [name, setName] = useState();
  // const name = useRef();

  function clickStart(e) {
    setStart(false);
  }

  function handleNameChange(e) {
    setName(e.target.value);
  }

  return (
    <div className="front">
      {start ? (
        <div className="start_login">
          <img src={logo} alt="logo" className="logo"></img>
          <h1>" This is choosing correct sushi game "</h1>
          <h2>First : please submit your name </h2>

          <div className="button">
            <input
              className="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              // ref={name}
              placeholder=" please your name here! "
            />
            <Button
              variant="primary"
              size="lg"
              /*disabled(無効化ボタン！)*/ onClick={clickStart}
            >
              Submit!
            </Button>
          </div>
        </div>
      ) : (
        <div>
          {/* <img src={logo} alt="logo" className="logo"></img> */}
          <div className="button">
            <GamePlay User={name} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
