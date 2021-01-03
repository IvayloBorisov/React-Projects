import { Link } from "react-router-dom";

import styles from "./Card.module.css";

const Card = ({ title, backdrop_path, id }) => {

  return (
    <div className={styles.card}>
      <div className={styles["image-container"]}>
        <Link to={`/movie/${id}`}>
          <img
            className={ styles.image }
            src={`https://image.tmdb.org/t/p/w500${ backdrop_path } `}
            alt="movie-poster"
          />
        </Link>
      </div>
      <div className={styles.content}>
        <h3 className={styles["card-title"]}>{title}</h3>
      </div>
    </div>
  );
};

export default Card;
