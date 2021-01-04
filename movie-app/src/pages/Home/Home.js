import { MoviesContainer, Aside } from '../../components/index';

import styles from './Home.module.css'

const Home = () => {

    return(
        <div className={ styles.container }> 
            <MoviesContainer urlParam={ "movie/popular" } title={ 'Most popular films' } />
            <Aside urlParam={ "tv/popular" } />
        </div>
    )
}

export default Home;



