import React, {useEffect, useState} from 'react';
import logo from "../../Assets/Cosanber/cosanberlogo.png";
import './login.css';
import axios from 'axios';

const Login = () => {
    const [rut, setRut] = useState('');
    const [password, setPassword] = useState('');

    const Validar = () => { 
        const user = {
            rut: rut,
            password: password
        }
        console.log(user)

        // try {
        //     const response = await axios.post({
        //         url: 'http://localhost:3525/api/auth/login',
        //         data: user
        //     })
        //     console.log(response)
        // } catch (error) {
        //     console.log(error)
        // }
    }
    
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
                            type="submit" 
                            className="btn btn-submit" 
                            onClick={Validar} 
                            value="Iniciar Sesion"></input>
                    </div>
                </form>
            
            </div>
        </div>
    )
}

export default Login;