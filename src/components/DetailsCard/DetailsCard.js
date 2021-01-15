import { AltImage } from "../index";
import { formatDate, extractGenreName } from '../../utils';
import styles from "./DetailsCard.module.css";

const DetailsCard = ({ movie }) => {

  if(!movie.overview) {return null}
  const {
    backdrop_path,
    genres,
    overview,
    release_date,
    vote_average,
    production_companies,
  } = movie;



  return (
    <div className={ `${styles.container} ` } >
      <div className={ styles.image } 
           style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${backdrop_path})` }}>
      </div>
      <ul className={styles["movie-info"]}>
        <li>
          <p>
            Studio:{" "}
            {production_companies && production_companies.map((item) => (
              <span className={styles.company} key={item.id}>
                {item.name + ", "} 
              </span>
            ))}
          </p>
        </li>
        <li>
          <p>Release: <span className={ styles.date }>{formatDate(release_date, 'details')}</span></p>
        </li>
        <li>
          <p>Rating: <span className={ styles.rating }>{vote_average}</span></p>
        </li>
        <li>
          <p>
            {genres && genres.map((item) => (
              <span className={styles.genre} key={item.id}>
                {extractGenreName(item.name)}
              </span>
            ))}
          </p>
        </li>
        <li>
          <p className={ styles.overview }>{overview}</p>
        </li>
      </ul>
    </div>   
  );
};

export default DetailsCard;
