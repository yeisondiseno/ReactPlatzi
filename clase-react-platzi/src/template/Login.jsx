import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from "react-router-dom";
import { loginRequest } from '../actions';
import '../assets/styles/component/Login.scss';

import googleIcon from '../assets/img/google-icon.png';
import twitterIcon from '../assets/img/twitter-icon.png';

const Login = props => {

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
    props.loginRequest(form);
    props.history.push('/');
    // console.log(form)
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
            <img src={googleIcon} alt='Google logo' />
            Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='Twitter logo' />
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

const mapDispatchToProps =  {
  loginRequest,
};

// export default Login;
export default withRouter(connect(null, mapDispatchToProps)(Login));