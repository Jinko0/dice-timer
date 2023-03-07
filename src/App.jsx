import { Routes, Route } from "react-router-dom";

import './App.css'

import Menu from './components/menu/Menu'
import DiceSelectionScreen from './components/dice/DiceSelectionScreen'
import { useState } from "react";

function App() {
  const [dice, setDice] = useState(undefined)

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/dice_selection" element={<DiceSelectionScreen dice={dice} setDice={setDice}/>}></Route>
      </Routes>
    </div>
  )
}

export default App
