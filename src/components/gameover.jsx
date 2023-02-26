import React from "react";
import "./gameover.css";
import {Link} from "react-router-dom";
import { useState } from "react";
import answer from "./answer";


function PopupGameover(){
    const [show, setShow] = useState(true);

    function Yes(){
        // 現在いるページ”GamePlay”をリロードしてくれる！
    }

    function No(){
        setShow(false);
    }

    return(
         <form>
            <div className="popup">
            <div className="overlay">
            { show ? (
                    <div className="gameover">
                        <h1 id="message1">Game over...!</h1>
                        <hr></hr>
                        <p id="message2">Do you want to play again ?</p>
                        <button id="yes" onClick={Yes}>yes</button>
                        <button type="button" id="no" onClick={No}>no</button>
                    </div>
                ) : (
                    <div className="gameover">
                        <h1 id="message1">Thanks for playing!</h1>
                        <hr></hr>
                        <p id="message2">Do you want to check answer ?</p>
                        <Link to = {`/Answer`}>
                        <button id="yes" >yes</button>
                        </Link>
                        <Link to = {`/`}>
                        <button type="button" id="no" >no</button>
                        </Link>
                    </div>
                )
                    }
                    </div>
            </div>
        </form>
    )
}

export default PopupGameover;