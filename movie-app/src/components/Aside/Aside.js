import { useState, useEffect } from 'react';
import { Card, Title } from '../index';
import { getData } from '../../api/index';

import styles from './Aside.module.css';

const Aside = ({ urlParam }) => {

    const [ data, setData ] = useState({});

    useEffect(() => {
        const getShowsData = async () => {
            const tvShows = await getData(urlParam);
            setData(tvShows);
        }
        getShowsData();
    }, [ urlParam ]);

    return(
        <aside className={ styles.aside }>
            <Title titlePage={ 'You might also like' }/>
          {
              data.hasOwnProperty('results') ? data.results.slice(0, 10).map(tv => {
                  return <Card key={ tv.id } type={ 'tv' } { ...tv }/>
              }) : "Loading..."
          }
          <Card />
        </aside>
    )

}

export default Aside;