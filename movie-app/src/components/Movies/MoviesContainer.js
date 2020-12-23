import React, { useState, useEffect } from 'react';

import { MovieCard } from '../index';
import { getFilmsData } from '../../api/index';

const MoviesContainer = ({ urlParam }) => {

    const [ movies, setMovies ] = useState();

    useEffect(() => {

        const getData = async () => {
            setMovies(await getFilmsData(urlParam));
        }
        getData();

    }, [urlParam]);
    console.log(movies)

    return(
        <div>           
              {
                movies ?  movies.results.map(movie => {
                    return <MovieCard key={ movie.id} title={ movie.title } imageUrl={ movie.backdrop_path } />
                }) : "Loading ...."
              }            
        </div>

    )

}

export default MoviesContainer;