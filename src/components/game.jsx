import React from "react";
import {Link} from "react-router-dom";
import {useState} from "react";
import "./game.css"
import logo from "./images/logo.jpeg"
import corn from "./images/corn.png";
import salmon_cheese from "./images/salmon_cheese.png";
import salmon from "./images/salmon.png";
import sea_bream from "./images/sea_bream.jpeg";
import tuna from "./images/tuna.png";

function GamePlay(){
    const [quest1, setQuest1] = useState(true);
    // const[quest2, setQuest2] = useState(false);

    function OK1(){
        setQuest1(false);
        return(
            <h1>clear!</h1>
        )
    }

    function OK2(){

    }

    function NG(){
        return(
        <Link to = {`/`} >home</Link>
        )
    }

    return(
        <div className="firstGame">
           { quest1 ? (
             <>
             <img src={logo} alt="logo" className="logo"></img>
             <h1>Which is corn?</h1>
             <img src={corn} alt="corn" onClick={OK1}/>
             <Link to = {`/`} >
             <img src={salmon} alt="salmon" onClick={NG}/>
             </Link>
             </>
             ):(
             <>
             <img src={logo} alt="logo" className="logo"></img>
             <h1>Which is salmon?</h1>
             <img src={tuna} alt="tuna" onClick={NG}/>
             <img src={salmon} alt="salmon" onClick={OK2}/>

             </>)
        }
        </div>
    )
}

export default GamePlay;
