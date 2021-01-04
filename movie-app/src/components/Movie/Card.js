import { Link } from "react-router-dom";

import styles from "./Card.module.css";

const Card = ({ type, title, backdrop_path, poster_path, id }) => {

  return (
    <div className={styles[ `${ type }-card` ]}>
      <div className={styles[ `${ type }-image-container` ]}>
        <Link to={`/movie/${id}`}>
          <img
            className={ styles.image }
            src={`https://image.tmdb.org/t/p/w500${ type === 'movie' ? backdrop_path : poster_path } `}
            alt={ `${ type }-poster` }
          />
        </Link>
      </div>
      <div className={styles[ `${ type }-content` ]}>
        <h3 className={styles[`${ type }-title` ]}>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
