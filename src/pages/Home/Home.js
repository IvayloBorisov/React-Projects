import { useState, useEffect } from 'react';
import { fakeDelay } from '../../utils';
import { MoviesContainer, Aside, Loading } from '../../components/index';

import styles from './Home.module.css'

const Home = () => {

    const [ isLoading, setLoading ] = useState(true);

    useEffect(() => {
        fakeDelay().then(() => {
            setLoading(!isLoading);
        });
    }, []);

    return(
        isLoading ? <Loading /> :
        <div className={ styles.container }>
            <div className={ styles.wrapper }>
             <MoviesContainer 
              urlParam={ "movie/popular" } 
              title={ 'Most popular films' } 
              />
            </div> 
             <Aside />
        </div>
    )
}

export default Home;



