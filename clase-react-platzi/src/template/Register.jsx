import React, { useState } from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';
import { Link, withRouter } from "react-router-dom";
import '../assets/styles/component/Register.scss'

const Register = props => {

    const [ form, setForm ] = useState({
        email: '',
        name: '',
        password: '',
    })

    const handleInput = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.registerRequest(form);
        props.history.push('/');
    }

    return(
        <section className="register">
            <section className="register__container">
                    <h2>
                        Regístrate
                    </h2>
                    <form 
                        className="register__container--form" 
                        onSubmit={handleSubmit} 
                    >
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Nombre" 
                            name="name"
                            onChange={handleInput}
                        />
                        <input 
                            className="input" 
                            type="text" 
                            placeholder="Correo" 
                            name="email"
                            onChange={handleInput}
                        />
                        <input 
                            className="input" 
                            type="password" 
                            placeholder="Contraseña" 
                            name="password"
                            onChange={handleInput}
                        />
                        <button type="submit" className="button">
                            Registrarme
                        </button>
                    </form>
                    <Link to="/login">
                        Iniciar sesión
                    </Link>
            </section>
        </section>
    );
}

const mapDispatchToProps =  {
  registerRequest,
};

// export default Register;
export default withRouter(connect(null, mapDispatchToProps)(Register));