import React,{useState} from 'react';
import Movie from './Movie'

const MovieList = () => {
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

    return (
        <div>
    {movies.map(movie => (
    <Movie name={movie.name}/>
    ))}
        </div>
    )
}

export default MovieList