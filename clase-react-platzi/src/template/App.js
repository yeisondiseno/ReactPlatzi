import React from 'react';
import logo from '../logo.svg';
import '../assets/styles/App.scss';
import Header from '../Component/Header';
import Search from '../Component/Search';
import Categories from '../Component/Categories';
import Carousel from  '../Component/Carousel';
import CarouselItem from '../Component/CarouselItem';
import Footer from '../Component/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Search />

      <Categories title="Mi lista">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Tendencias">
        <Carousel>
          <CarouselItem />
          <CarouselItem />
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Vídeo">
        <Carousel>
          <CarouselItem />
        </Carousel>
      </Categories>

      <Footer />

    </div>
  );
}

export default App;
