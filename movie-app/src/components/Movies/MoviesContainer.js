import React, { useState, useEffect } from 'react';

import { DetailsCard, MovieCard, Title } from '../index';
import { getFilmsData } from '../../api/index';

import styles from './MoviesContainer.module.css';

const MoviesContainer = ({ urlParam, title }) => {

    const [ data, setData ] = useState({});

    useEffect(() => {

        const getData = async () => {
            const movies = await getFilmsData(urlParam);
            setData(movies)
        }
        getData();

    }, [urlParam]);


    return(
        <div className={ styles.container }>
            <Title  titlePage={ title } />           
              {
                data.hasOwnProperty('results') ?  data.results.map(movie => {
                    return <MovieCard key={ movie.id}  { ...movie } />
                }) : data ? <DetailsCard movie={ data }/> : "Loading ..."
              }            
        </div>

    )

}

export default MoviesContainer;