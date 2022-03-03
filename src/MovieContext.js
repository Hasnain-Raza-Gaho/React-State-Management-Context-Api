import React,{ useState, createContext } from 'react';




export const MovieContext = createContext()

export const MovieProvider = (props)=> {
  const [movies, setMovies] = useState([
    {
        name: 'Harry Potter',
        price : '$110',
        id : 23124
    },

    {
        name: 'Game of Throne',
        price : '$210',
        id : 2313324
    },

    {
        name: 'Inception',
        price : '$10',
        id : 2312214
    }
])    
// console.log(<MovieContext/>)
  return (
   <MovieContext.Provider value={'hello'}>
     {props.children}
   </MovieContext.Provider>
  )
}

export default MovieProvider
