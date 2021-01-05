import { Link } from "react-router-dom";
import { formatDate } from '../../utils/index';

import styles from "./Card.module.css";

const Card = ({ 
               type, 
               title, 
               name, 
               backdrop_path, 
               poster_path, 
               id, 
               vote_average, 
               first_air_date, 
               cardGenre 
              }) => {
    return (
    <div className={styles[ `${ type }-card` ]}>
      <div className={styles[ `${ type }-image-container` ]}>
        <Link to={`/movie/${id}`}>
          <img
            className={ styles[ `${ type }-image` ] }
            src={`https://image.tmdb.org/t/p/w500${ type === 'movie' ? backdrop_path : poster_path } `}
            alt={ `${ type }-poster` }
          />
        </Link>
      </div>
      <div className={styles[ `${ type }-content` ]}>
        <h3 className={styles[`${ type }-title` ]}>{ type === 'movie' ? title : name }</h3>
        {
          type === 'tv' ? 
            <ul className={ styles[ 'tv-info' ] }>
              <li>{ `${ formatDate(first_air_date) }` }</li>
              <li>{ `${ cardGenre }` }</li>
              <li>{ ` ${ vote_average }/10` }</li>
            </ul>  : ''
        }
      </div>
    </div>
  );
};

export default Card;
