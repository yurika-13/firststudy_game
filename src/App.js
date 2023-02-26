// import logo from './logo.svg';
import './App.css';
import Login from "./components/login"
import GamePlay from "./components/game";
import PopupGameover from "./components/gameover"
// import {Link} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Answer from "./components/answer"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={`/`} element={<Home />} /> */}
        <Route path={`/GamePlay/`} element={<GamePlay/>} />
        <Route path={`/`} element={<Login/>} />
        <Route path={`/gameOver/`} element={<PopupGameover/>} />
        <Route path={`/Answer/`} element={<Answer/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
