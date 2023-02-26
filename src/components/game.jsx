import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./game.css"
import logo from "./images/logo.png"
import corn from "./images/corn.png";
import salmon_cheese from "./images/salmon_cheese.png";
import salmon from "./images/salmon.png";
import sea_bream from "./images/sea_bream.png";
import tuna from "./images/tuna.png";
import PopupGameover from "./gameover";

function GamePlay(){
    const [quest1, setQuest1] = useState(true);
    const [quest2, setQuest2] = useState(false);
    const [quest3, setQuest3] = useState(false);
    const [gameover, setGameover] = useState(false);

    function OK1(){
        setQuest1(false);
        setQuest2(true);
    }

    function OK2(){
        setQuest2(false);
        setQuest3(true);
    }

    function OK3(){
        <></>
    }

    function NG(){
        setGameover(true);
    }

    return(
        <div className="gameplay">
            <div className="game">
            { quest1 &&
             <>
             {/*question1*/}
             <img src={logo} alt="logo" className="logo"></img>
             <h1>Which is corn?</h1>
             <img src={corn} alt="corn" onClick={OK1}/>
             <img src={salmon} alt="salmon" onClick={NG}/>
             </>
            }
            { quest2 &&
             <>
             {/*question2*/}
             <img src={logo} alt="logo" className="logo"></img>
             <h1>Which is salmon?</h1>
             <img src={tuna} alt="tuna" onClick={NG}/>
             <img src={salmon} alt="salmon" onClick={OK2}/>
             </>
            }
            { quest3 &&
             <>
              {/*question3*/}
              <img src={logo} alt="logo" className="logo"></img>
             <h1>Which is the higher cost rate?</h1>
             <img src={sea_bream} id="sea_bream" alt="sea_bream" onClick={NG}/>
             <img src={tuna} alt="tuna" onClick={OK3}/>
             </>
            }
            </div>
            <div className="gameover">
                { gameover && 
                < PopupGameover />}
            </div>
        </div>
    )
}

export default GamePlay;
