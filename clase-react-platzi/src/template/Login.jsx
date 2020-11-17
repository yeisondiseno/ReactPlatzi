import React, { useState } from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/component/Login.scss';

import googleIcon from '../assets/img/google-icon.png';
import twitterIcon from '../assets/img/twitter-icon.png';

const Login = () => {

  const [ form, setForm ] = useState({
    email: '',
    password: ''
  });


  const handleInput = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = e => {
    e.preventDefault();
    console.log(form)
  }

  return(
    <section className="login">
      <section className="login__container">
        <h2>Inicia sesión</h2>
        <form onSubmit={ handleSubmit } className="login__container--form">
          <input  className="input" 
                  type="email" 
                  placeholder="Correo" 
                  name="email"
                  onChange={handleInput}
          />
          <input  className="input" 
                  type="password" 
                  placeholder="Contraseña" 
                  name="password"
                  onChange={handleInput}
          />
          <button type="submit" className="button">Iniciar sesión</button>
          <div className="login__container--remember-me">
            <label>
              <input type="checkbox" id="cbox1" value="first_checkbox" />
              Recuérdame
            </label>
            <a href="/">Olvidé mi contraseña</a>
          </div>
        </form>
        <section className="login__container--social-media">
          <div>
            <img src={googleIcon} />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} />
            Inicia sesión con Twitter
          </div>
        </section>
        <p className="login__container--register">
          No tienes ninguna cuenta   
          <br/>
          <Link to="/register">
            Regístrate
          </Link>
        </p>
      </section>
    </section>
  );
}



export default Login;