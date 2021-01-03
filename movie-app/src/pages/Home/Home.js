import { MoviesContainer } from '../../components/index';

import styles from './Home.module.css'

const Home = () => {

    return(
        <div className={ styles.container }> 
            <MoviesContainer urlParam={ "popular" } title={ 'Most popular films' } />
        </div>
    )
}

export default Home;



