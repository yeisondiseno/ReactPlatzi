import React from 'react';
import { connect } from 'react-redux';
import '../assets/styles/App.scss';
import Search from '../Component/Search';
import Categories from '../Component/Categories';
import Carousel from  '../Component/Carousel';
import CarouselItem from '../Component/CarouselItem';
// import Carga from '../Component/Carga';
// hook 
// import useInitialState from '../assets/hooks/useInitialState';

// const API = 'http://localhost:3000/initialState'; se cambio por el redux

function Home( { mylist, trends, originals } ) {
  // const initialState = useInitialState(API);

  return (
    <>
      <Search />
      {mylist.length > 0 ? 
        <Categories title="Mi lista">
          <Carousel>
            {mylist.map(item => 
              <CarouselItem 
                key={item.id} 
                {...item} 
                isList
              />
            )}
          </Carousel>
        </Categories>
        : ''
      }
      <Categories title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Vídeo">
        <Carousel>
          {originals.map(item => 
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
    </>
  );
}

const mapStateToProps = state => {
  return {
    mylist: state.mylist,
    trends: state.trends,
    originals: state.originals,
  }
}

// export default Home;
export default connect(mapStateToProps, null)(Home);
