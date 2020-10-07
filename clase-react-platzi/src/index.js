import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';

import App from './routes/App';

const initialState = {
  "user": {},
  "playing": {},
  "myList": [],
  "trends": [
    {
      id: 2,
      slug: "tvshow-2",
      title: "In the Dark",
      type: "Scripted",
      language: "English",
      year: 2009,
      contentRating: "16+",
      duration: 164,
      cover:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=698&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 3,
      slug: "tvshow-3",
      title: "Instinct",
      type: "Adventure",
      language: "English",
      year: 2002,
      contentRating: "16+",
      duration: 137,
      cover:
        "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=635&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 4,
      slug: "tvshow-4",
      title: "Grand Hotel",
      type: "Comedy",
      language: "English",
      year: 2014,
      contentRating: "16+",
      duration: 163,
      cover:
        "https://images.unsplash.com/photo-1554727242-741c14fa561c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 5,
      slug: "tvshow-5",
      title: "Stargate Atlantis",
      type: "Scripted",
      language: "English",
      year: 2014,
      contentRating: "16+",
      duration: 194,
      cover:
        "https://images.unsplash.com/photo-1576582842668-ca5c297a5425?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 6,
      slug: "tvshow-6",
      title: "Final Space",
      type: "Scripted",
      language: "English",
      year: 2017,
      contentRating: "16+",
      duration: 124,
      cover:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 7,
      slug: "tvshow-7",
      title: "The InBetween",
      type: "Drama",
      language: "English",
      year: 2011,
      contentRating: "16+",
      duration: 179,
      cover:
        "https://images.unsplash.com/photo-1482264851290-446b18e3ee9f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
  ],
  "originals": [
    {
      id: 8,
      slug: "tvshow-8",
      title: "Stargate Atlantis",
      type: "Action",
      language: "English",
      year: 2012,
      contentRating: "16+",
      duration: 148,
      cover:
        "https://images.unsplash.com/photo-1481410491085-5e00972436e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 9,
      slug: "tvshow-9",
      title: "Alien Highway",
      type: "Action",
      language: "English",
      year: 2019,
      contentRating: "16+",
      duration: 128,
      cover:
        "https://images.unsplash.com/photo-1554384645-13eab165c24b?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 10,
      slug: "tvshow-10",
      title: "Elementary",
      type: "Animation",
      language: "English",
      year: 2011,
      contentRating: "16+",
      duration: 346,
      cover:
        "https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 11,
      slug: "tvshow-11",
      title: "Strange Angel",
      type: "War",
      language: "English",
      year: 2015,
      contentRating: "16+",
      duration: 226,
      cover:
        "https://images.unsplash.com/photo-1587120020260-a4d140e6b149?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 12,
      slug: "tvshow-12",
      title: "Private Eyes",
      type: "Comedy",
      language: "English",
      year: 2018,
      contentRating: "16+",
      duration: 190,
      cover:
        "https://images.unsplash.com/photo-1588973185663-4a813304a081?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
    {
      id: 13,
      slug: "tvshow-13",
      title: "NCIS: Los Angeles",
      type: "Drama",
      language: "English",
      year: 2010,
      contentRating: "16+",
      duration: 160,
      cover:
        "https://images.unsplash.com/photo-1558385018-ffb540da3997?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
      description: "Vestibulum ac est lacinia nisi venenatis tristique",
      source: "https://mdstrm.com/video/58333e214ad055d208427db5.mp4",
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
