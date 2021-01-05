import { Link } from "react-router-dom";
import { formatDate, formatOverview } from '../../utils/index';

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
               overview, 
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
            <div className={ styles[ `${ type }-info` ] }>
              <span>{ `${ formatDate(first_air_date) }` }</span>
              <span>{ `${ cardGenre }` }</span>
              <span>{ ` ${ vote_average }/10` }</span>
              <div className={ styles[ 'overview-info' ] }>
                <h4 className={ styles[ `${ type }-overview` ]} >Summary</h4>
                <p >{ `${ formatOverview(overview) }` }</p>
              </div> 
            </div>  : ''
        }
      </div>
    </div>
  );
};

export default Card;
