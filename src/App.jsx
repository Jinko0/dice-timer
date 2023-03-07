import { Routes, Route } from "react-router-dom";

import './App.css'

import Menu from './components/menu/Menu'
import DiceSelectionScreen from './components/dice/DiceSelectionScreen'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/dice_selection" element={<DiceSelectionScreen />}></Route>
      </Routes>
    </div>
  )
}

export default App
