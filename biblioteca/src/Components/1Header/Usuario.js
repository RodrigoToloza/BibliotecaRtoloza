import React from 'react'
import './headerStyle.css';
import UserImg from './girl.png'

const Usuario = () => {
    return (
        <div className='User'>
            <div className='UserPictire'>
                <img src={UserImg} alt="Usuario"/>
            </div>
        </div>
    )
}

export default Usuario
