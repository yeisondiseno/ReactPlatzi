import React from 'react';
// import logo from '../logo.svg';
import '../assets/styles/App.scss';
import Header from '../Component/Header';
import Search from '../Component/Search';
import Categories from '../Component/Categories';
import Carousel from  '../Component/Carousel';
import CarouselItem from '../Component/CarouselItem';
import Footer from '../Component/Footer';
import Carga from '../Component/Carga';
// hook 
import useInitialState from '../assets/hooks/useInitialState';

const API = 'http://localhost:3000/initialState';

function Home() {

  const initialState = useInitialState(API);

  return initialState.length === 0 ? <Carga /> : (
    <div className="App">
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            {initialState.originals.map(item => 
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {initialState.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Vídeo">
        <Carousel>
          {initialState.originals.map(item => 
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Footer />

    </div>
  );
}

export default Home;
