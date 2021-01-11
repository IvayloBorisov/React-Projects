import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Image.module.css";

const Image = ({ type, id, backdrop_path, poster_path }) => {
  const [imageIsLoaded, setImageIsLoaded] = useState(false);
  const handleImageLoad = () => {
    console.log("yes");
    setImageIsLoaded(true);
  };

  return (
    <div className={styles[`${type}-image-container`]}>
      <Link to={`/movie/${id}`}>
        <img
          className={`${
            type === "movie" ? styles["movie-image"] : styles["tv-image"]
          } ${imageIsLoaded ? styles["visible"] : styles["hidden"]}`}
          src={`https://image.tmdb.org/t/p/w500${
            type === "movie" ? backdrop_path : poster_path
          } `}
          alt={`${type}-poster`}
          onLoad={handleImageLoad}
        />
      </Link>
    </div>
  );
};

export default Image;
