import React from 'react';
import '../assets/styles/component/Categories.scss';

const Categories = ({ children }) => (
    <div className="categories">
        <h3 className="categories__title">Mi lista</h3>
        {children}
    </div>
);

export default Categories;