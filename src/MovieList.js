import React,{useState, useContext} from 'react';
import Movie from './Movie'
import {MovieContext} from './MovieContext'

const MovieList = () => {

const value2 = useContext(MovieContext)
    return (
        <div>
   {value2}
        </div>
    )
}

export default MovieList