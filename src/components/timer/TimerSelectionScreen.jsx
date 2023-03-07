import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";

import './timerSelectionScreen.css'

function TimerSelectionScreen({timer, setTimer}) {
    const [isActive,setActive] = useState(false)

    function changeTimer(e, timer) {
        setTimer(timer)
        Array.from(document.getElementsByClassName("timer")).forEach(e => e.classList.remove("selected-button"))
        e.target.classList.add('selected-button')
    }

    useEffect(() => {
        // lorsqu'un timer est choisit on affiche le bouton confirmer
        if (timer != undefined) {
            setActive(true)
        ,[timer]}
    })

    return(
        <div className='timer-selection-wrapper'>
            <div className='timer-selection-title'>Choix du Timer</div>
            <div className='timers-wrapper'>
                <div className='timer' onClick={(e) => {changeTimer(e, 15)}}>15</div>
                <div className='timer' onClick={(e) => {changeTimer(e, 30)}}>30</div>
                <div className='timer' onClick={(e) => {changeTimer(e, 60)}}>60</div>
            </div>
            <div className={isActive ? 'menu-button' : 'menu-button hidden'}>
                <NavLink to='/timer'>Confirmer</NavLink> 
            </div>
        </div>
    )
}

export default TimerSelectionScreen