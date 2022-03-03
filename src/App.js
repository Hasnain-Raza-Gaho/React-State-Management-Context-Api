import React from 'react';
import {MovieProvider} from './MovieContext';
import MovieList from './MovieList'
import AddMovie from './AddMovie'

function App() {


  return (
    <div>

    <MovieProvider>
      <AddMovie/>
      <MovieList/>
    </MovieProvider>
    </div>
  );
}

export default App;