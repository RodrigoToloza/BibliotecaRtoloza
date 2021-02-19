import React, { useState } from 'react'
import './menu.css';
import {MdMenu} from 'react-icons/md'

const Menu = () => {
    return (
        <div>
            <NavBar>
                <DropdownMenu />
            </NavBar>
        </div>
    )
}

export default Menu;

const DropdownMenu = () => {
    const DropdownItem = (props) => {
        return (
            <a href={props.children.url} className="menu-item">
                {props.children.name}
            </a>
        )
    }
    const login = {
        url: "/",
        name: "login"
    }
    
    return (
        <div className="dropdown">
            <bienvenido>Bienvenido</bienvenido>
            <h1>Usuario</h1>
            <DropdownItem>Mi Perfil</DropdownItem>
            <DropdownItem>{login}</DropdownItem>
            <DropdownItem>Continuar Leyendo</DropdownItem>
        </div>
    )
}



const NavBar = (props) => {
    const [open, setOpen] = useState(false)
    return (
        <li className="navbar">
            <a href="#" className="icon-button" onClick={()=> setOpen(!open)}>
                <MdMenu className="boton"/>
            </a>
            {open && props.children}
        </li>
    );
}

