import React from 'react';
import { Link } from "react-router-dom";
import '../assets/styles/component/NotFound.scss';

const NotFound = () => (
    <div className="not-found">
        <h1>
            404
        </h1>
        <h3>
            No encontrado
        </h3>
        <Link to="/">
            <button>
                Regresar a Inicio
            </button>
        </Link>
    </div>
);

export default NotFound;