import { Link } from 'react-router-dom';

const MovieCard = props => {

    const { title, backdrop_path, id } = props.movie;

    return(
        <div className="card-container">
            <div className="image-container">
                <Link to={ `/movie/${ id }` }>
                  <img src={ `https://image.tmdb.org/t/p/w500${ backdrop_path }` } alt="movie-poster" />
                </Link>
            </div>
            <h3 className="movie-title">{ title }</h3>
        </div>
    )
}

export default MovieCard;