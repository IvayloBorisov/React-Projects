
const MovieCard = ({ imageUrl, title }) => {

    return(
        <div className="card-container">
            <div className="image-container">
                <img src={ `https://image.tmdb.org/t/p/w500${ imageUrl }` } alt="movie-poster" />
            </div>
            <h3 className="movie-title">{ title }</h3>
        </div>
    )
}

export default MovieCard;