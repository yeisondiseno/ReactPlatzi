import React from 'react';
import { withRouter  } from "react-router-dom";
import '../assets/styles/component/Player.scss';

const Player = props => {

    return (
        <div className="Player">
            <video controls autoplay >
                <source src="" type="video/mp4" />
            </video>
            <div className="Player-back">
                <button type="button" onClick={ () => props.history.goBack() }> 
                    Regresar
                </button>
            </div>
        </div>
    );
}

export default withRouter(Player);