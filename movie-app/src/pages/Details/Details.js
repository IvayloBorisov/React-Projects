import { useParams } from 'react-router-dom';

import { MoviesContainer } from '../../components/index';

const MovieDetails = () => {

    let  movieId = useParams().id;

    console.log(movieId);
    return(
        <div>
            <h1>Details Page</h1>
            <MoviesContainer urlParam={ movieId }/>
        </div>
    )

}

export default MovieDetails;