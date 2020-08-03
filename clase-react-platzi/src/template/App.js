import React, { useState, useEffect} from 'react';
// import logo from '../logo.svg';
import '../assets/styles/App.scss';
import Header from '../Component/Header';
import Search from '../Component/Search';
import Categories from '../Component/Categories';
import Carousel from  '../Component/Carousel';
import CarouselItem from '../Component/CarouselItem';
import Footer from '../Component/Footer';

function App() {
  const [ videos, setVideos ] = useState({ mylist: [], trends: [], originals: [] }); 

  useEffect(() => {
    // const fetchVideos = async () => {
    //   try {
    //     const response = await fetch('http://localhost:3000/initialState');
    //     const data = await response.json();
    //     return setVideos(data);
    //   } catch {
    //     console.log('error');
    //   }
    // };
    // fetchVideos();
    // console.log(setVideos);
    fetch('http://localhost:3000/initialState')
      .then(response => response.json())
      .then(data => setVideos(data));
  }, []);

  // console.log(videos);

  return (
    <div className="App">
      <Header />
      <Search />

      {videos.mylist.length > 0 && (
        <Categories title="Mi lista">
          <Carousel>
            <CarouselItem />
          </Carousel>
        </Categories>
      )}

      <Categories title="Tendencias">
        <Carousel>
          {videos.trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Categories title="Originales de Platzi Vídeo">
        <Carousel>
          {videos.originals.map(item => 
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Footer />

    </div>
  );
}

export default App;
