import { MoviesContainer } from '../../components/index';

import styles from './Home.module.css'

const Home = () => {

    return(
        <div className={ styles.container }> 
            <h1 className={ styles.aside }>Home page</h1>
            <MoviesContainer urlParam={ "popular" }/>
        </div>
    )
}

export default Home;



