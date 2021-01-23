import React from 'react'
import './headerStyle.css';
import {MdMenu} from 'react-icons/md'

const Menu = () => {
    return (
        <div className='Menu'>
            <MdMenu className='iconMenu'/>
            <span>Menu</span>
        </div>
    )
}

export default Menu
