import React from  'react';
import '../assets/styles/component/Carga.scss'
import spiner from '../assets/img/spiner.svg';

const Carga = () => (
    <div className="spinner">
        <img src={spiner} alt="" className="spinner--img" />
    </div>
);

export default Carga;