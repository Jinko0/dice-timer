import { useEffect, useState } from 'react'
import './diceSelectionScreen.css'

function DiceSelectionScreen({dice,setDice}) {
    const [isActive,setActive] = useState(false)

    useEffect(() => {
        // lorsqu'un dé est choisit on affiche la decription du dé et le bouton confirmer
        if (dice != undefined) {
            setActive(true)
        ,[dice]}
    })

    return(
        <div className='dice-selection-wrapper'>
            <div className='dice-selection-title'>Choix de la difficulté</div>
            <div className='dices-wrapper'>
                <div className='dice' onClick={() => {setDice(1)}}>dé 1</div>
                <div className='dice' onClick={() => {setDice(2)}}>dé 2</div>
                <div className='dice' onClick={() => {setDice(3)}}>dé 3</div>
            </div>
            <div className={isActive ? 'dice-description' : 'dice-description hidden'}>Une face sur 6 est piegé seulement</div>
            <div className={isActive ? 'confirmation-button' : 'confirmaton-button hidden'}>Confirmer</div>
        </div>
    )
}

export default DiceSelectionScreen