import { useEffect, useState } from 'react'
import { NavLink } from "react-router-dom";

import './diceSelectionScreen.css'

function DiceSelectionScreen({dice,setDice}) {
    const [isActive,setActive] = useState(false)
    const [description,setDescription] = useState("")


    function changeDice(e, dice) {
        setDice(dice)
        switch (dice) {
            case 1:
                setDescription(`Si vous découvrez le jeu ou si vous êtes lâche c'est vous qui voyez... <b>Une</b> seule face attaque sur le dé`)
                break;
            case 2:
                setDescription("La on commence à s'amuser ! <b>Deux</b> faces attaque sur le dé pour deux fois plus de plaisir !")
                break;
            case 3:
                setDescription("Pour les courageux ou les suicidaires. <b>Trois</b> faces attaque sur le dé. Préparez vous à recevoir des mandales")
                break;
            default:
                console.log("erreur cas non attendu")
        }
        Array.from(document.getElementsByClassName("dice")).forEach(e => e.classList.remove("selected-button"))
        e.target.classList.add('selected-button')
    }

    useEffect(() => {
        // lorsqu'un dé est choisit on affiche la description du dé et le bouton confirmer
        if (dice != undefined) {
            setActive(true)
        }
    },[dice])

    return(
        <div className='dice-selection-wrapper'>
            <div className='dice-selection-title'>Choix de la difficulté</div>
            <div className='dices-wrapper'>
                <div className='dice' onClick={(e) => {changeDice(e, 1)}}>dé 1
                </div>
                <div className='dice' onClick={(e) => {changeDice(e, 2)}}>dé 2
                </div>
                <div className='dice' onClick={(e) => {changeDice(e, 3)}}>dé 3
                </div>
            </div>
            <div id="dice-description" className={isActive ? 'dice-description' : 'dice-description hidden'} dangerouslySetInnerHTML={{ __html: description }}></div>
            <div className={isActive ? 'menu-button' : 'menu-button hidden'}>
                <NavLink to="/timerSelection">Confirmer</NavLink> 
            </div>
        </div>
    )
}

export default DiceSelectionScreen