// import logo from './logo.svg';
import './App.css';
import Login from "./components/login"
import GamePlay from "./components/game";
// import {Link} from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path={`/`} element={<Home />} /> */}
        <Route path={`/GamePlay/`} element={<GamePlay/>} />
        <Route path={`/`} element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
