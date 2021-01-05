import React, { useState, useEffect } from 'react';

import { DetailsCard, Card, Title } from '../index';
import { getData } from '../../api/index';

import styles from './MoviesContainer.module.css';

const MoviesContainer = ({ urlParam, title }) => {

    const [ data, setData ] = useState({});

    useEffect(() => {

        const getFilmsData = async () => {
            const movies = await getData(urlParam);
            setData(movies)
        }
        getFilmsData();
        
    }, [urlParam]);
    return(
        <div className={ styles.container }>
            <Title  titlePage={ title } type={ 'movie' } />           
              {
                data.hasOwnProperty('results') ?  data.results.map(movie => {
                    return <Card key={ movie.id} type={ 'movie' }  { ...movie } />
                }) : data ? <DetailsCard movie={ data }/> : "Loading ..."
              }            
        </div>
    )
}

export default MoviesContainer;