import React from 'react';
import Header from '../Component/Header';
import Footer from '../Component/Footer'; 


const Layout = ( { children } ) => (
    <div className="App">
        <Header />
            { children }
        <Footer />
    </div>
);

export default Layout;