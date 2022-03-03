import React,{ useState, createContext } from 'react';

export const MovieContext = createContext()

export const MovieProvider = (props)=> {
    
console.log(<MovieContext/>)
  return (
      <MovieContext.Provider>
          {props.children}
      </MovieContext.Provider>
  )
}

export default MovieProvider
