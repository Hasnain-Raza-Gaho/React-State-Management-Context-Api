import React from 'react';
import {MovieProvider} from './MovieContext';
import MovieList from './MovieList'

function App() {


  return (
    <MovieProvider>
      <MovieList/>
    </MovieProvider>
  );
}

export default App;