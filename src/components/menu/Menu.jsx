import { NavLink } from "react-router-dom";

import './menu.css'

function Menu() {

    return(
        <div className='menu-background'>
            <div className='menu-button-wrapper'>
                <div className='menu-button'>
                    <NavLink to="/dice_selection">Lancer une partie</NavLink>
                </div>
                <div className='menu-button'>
                    Manuel des règles
                </div>
            </div>
        </div>
    )
}

export default Menu