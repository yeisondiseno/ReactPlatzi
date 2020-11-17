import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/component/Header.scss';

import logo from '../assets/img/logo-platzi-video-BW2.png';
import userIcon from '../assets/img/user-icon.png';

const Header = props => {

    const { user } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({});
    }

    return(
        <header className="header">
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video"/>
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    <img 
                        src={hasUser ?  
                                gravatar(user.email) 
                                : userIcon 
                            } 
                        alt={user.email}
                    />
                    {/* <img src={userIcon} alt=""/> */}
                    <p>Perfil</p>
                </div>
                <ul>
                    { hasUser ?
                        <li><a href="/">{user.name}</a></li>
                        :
                        null
                    }
                    { hasUser ?
                        <li>
                            <a href="#logout" onClick={handleLogout}>
                                Cerrar sesión
                            </a>
                        </li>
                        :
                        <li>
                            <Link to="/login" >
                                Iniciar sesión
                            </Link>
                        </li>
                    }

                </ul>
            </div>
        </header>
    );
}


const mapStateToProps = state => {
    return {
        user: state.user
    }
};

const mapDispatchToProps = {
    logoutRequest,
}

// export default Header;
export default connect(mapStateToProps, mapDispatchToProps)(Header);