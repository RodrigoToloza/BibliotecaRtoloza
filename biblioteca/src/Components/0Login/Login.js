import React, {useState} from 'react';
import logo from "../../Assets/Cosanber/cosanberlogo.png";
import './login.css';
import {getCats} from '../sharedComponents/querys';

const Login = () => {
    const [rut, setRut] = useState('');
    const [password, setPassword] = useState('');

    
    return (
        <div className="form-usuario">    
            <div className="login-box sombra-dark">
                <img src={logo} alt="Logo colegio" className="logo ubicarlogo"></img>
                <h1>Iniciar Sesión</h1>
                <form>
                    <div className="campo-form">
                        <label htmlFor="rut">Ingrese RUT</label>
                        <input
                            type="text"
                            id="rut"
                            name="rut"
                            placeholder="Rut sin dv"
                            onChange={(e) => {setRut(e.target.value)}}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={(e) => {setPassword(e.target.value)}}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <input 
                            type="button" 
                            className="btn btn-submit" 
                            onClick={()=> {
                                const user = {
                                    rut: rut,
                                    password: password
                                }
                                const val = getCats(user)
                                console.log(val.status)
                                
                            }} 
                            value="Iniciar Sesion"></input>
                    </div>
                </form>
            
            </div>
        </div>
    )
}

export default Login;