import React, { useState, useEffect } from 'react';

import { DetailsCard, MovieCard } from '../index';
import { getFilmsData } from '../../api/index';

import styles from './MoviesContainer.module.css';

const MoviesContainer = ({ urlParam }) => {

    const [ data, setData ] = useState({});

    useEffect(() => {

        const getData = async () => {
            const movies = await getFilmsData(urlParam);
            setData(movies)
        }
        getData();

    }, [urlParam]);

    console.log(data)

    return(
        <div className={ styles.container }>           
              {
                data.hasOwnProperty('results') ?  data.results.map(movie => {
                    return <MovieCard key={ movie.id}  { ...movie } />
                }) : data ? <DetailsCard movie={ data }/> : "Loading ..."
              }            
        </div>

    )

}

export default MoviesContainer;