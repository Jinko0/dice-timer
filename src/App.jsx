import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import './App.css'

import Menu from './components/menu/Menu'
import DiceSelectionScreen from './components/dice/DiceSelectionScreen'
import TimerSelectionScreen from "./components/timer/TimerSelectionScreen";
import TimerScreen from "./components/timer/timerScreen";

function App() {
  const [dice, setDice] = useState(undefined)
  const [timer, setTimer] = useState(undefined)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/diceSelection" element={<DiceSelectionScreen dice={dice} setDice={setDice}/>}></Route>
        <Route path="/timerSelection" element={<TimerSelectionScreen timer={timer} setTimer={setTimer}/>}></Route>
        <Route path="/timer" element={<TimerScreen timer={timer} setTimer={setTimer}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
