import React from 'react';
import logo from "../../Assets/Cosanber/cosanberlogo.png";
import './login.css'

const Login = () => {
    
    const onChange = () => {    
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
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                            onChange={onChange}
                        ></input>
                    </div>
                    <div className="campo-form">
                        <input type="submit" className="btn btn-submit" value="Iniciar Sesion"></input>
                    </div>
                </form>
            
            </div>
        </div>
    )
}

export default Login;