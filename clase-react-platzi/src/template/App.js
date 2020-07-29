import React from 'react';
import logo from '../logo.svg';
import '../assets/styles/App.scss';
import Header from '../Component/Header';
import Search from '../Component/Search';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />
    </div>
  );
}

export default App;
