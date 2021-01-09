import { MoviesContainer, Aside } from '../../components/index';

import styles from './Home.module.css'

const Home = () => {

    return(
        <div className={ styles.container }>
            <div className={ styles.wrapper }>
             <MoviesContainer urlParam={ "movie/popular" } title={ 'Most popular films' } />
            </div> 
             <Aside />
        </div>
    )
}

export default Home;



