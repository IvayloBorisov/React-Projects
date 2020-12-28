import React, { useState, useEffect } from 'react';

import { DetailsCard, MovieCard } from '../index';
import { getFilmsData } from '../../api/index';

const MoviesContainer = ({ urlParam }) => {

    const [ data, setData ] = useState({});

    useEffect(() => {

        const getData = async () => {
            setData(await getFilmsData(urlParam));
        }
        getData();

    }, [urlParam]);

    return(
        <div>           
              {
                data.hasOwnProperty('results') ?  data.results.map(movie => {
                    return <MovieCard key={ movie.id}  movie={ movie } />
                }) : data ? <DetailsCard movie={ data }/> : "Loading ..."
              }            
        </div>

    )

}

export default MoviesContainer;