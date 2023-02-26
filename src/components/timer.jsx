import React from "react";
import { useEffect, useState } from "react";
import PopupGameover from "./gameover";
//import totalCapital from "";

function Timer({isRunning}){
    //let score = totalCapital;

    //タイマーの時間を設定 ”initialTime”
    const initialTime = 20;

    //”initialTime”からタイムがスタート
    const [time,setTime] = useState(initialTime);

    useEffect(() => {
        //timerIdを以下の記述のように定義
        let timerId;

        //isRunningがtrueだったら、、、
        if(isRunning){
            //timerIdは "setInterval" を使用し、timeをその時点のtimeから 0.01 引いた数に指定(1秒を10等分)
            timerId = setInterval(() => {
                setTime((time) => time - 0.01);
            },10)
        }
        return() => clearInterval(timerId);
        //↑ここまでがuseEffectの実行する関数、[isRunning] が変わったら実行される
    }, [isRunning]);

    return (
        <div>
            {time <= 0 ? (
                <PopupGameover/>
            ):(
                <div className="time">{time.toFixed(2)}sec</div>
                //.toFixed(2)で、タイマーの小数点の数を指定できる！（指定しないと超長くなる）
            )}
        </div>
    )
}

export default Timer;