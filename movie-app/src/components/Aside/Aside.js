import { useState, useEffect } from 'react';
import { Card, Title } from '../index';
import { getData } from '../../api/index';
import { formatGenres } from '../../utils/index';

import styles from './Aside.module.css';

const Aside = () => {

    const [ data, setData ] = useState({});
    const [ genres, setGenres ] = useState([]);

    useEffect(() => {
        const getShowsData = async () => {
            const tvShows = await getData("tv/popular");
            const tvGenres = await getData("genre/tv/list");
            setData(tvShows);
            setGenres(tvGenres.genres);
        }
        getShowsData();
    }, []);

    return(
        <aside className={ styles.aside }>
            <Title titlePage={ 'You might also like' } type={ 'tv' } />
          {
              data.hasOwnProperty('results') ? data.results.slice(0, 10).map(tv => {
                console.log(tv.poster_path)

                  const genre = formatGenres(genres, tv.genre_ids);
                  return <Card key={ tv.id } type={ 'tv' } cardGenre={ genre } { ...tv } />
              }) : "Loading..."
          }
        </aside>
    )
}

export default Aside;