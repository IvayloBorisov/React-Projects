import { MoviesContainer } from '../../components/index';

const Home = () => {

    return(
        <div> 
            <h1>Home page</h1>
            <MoviesContainer urlParam={ "popular" }/>
        </div>
    )
}

export default Home;



