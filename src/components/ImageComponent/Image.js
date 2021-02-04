import { useState } from "react";
import { Link } from "react-router-dom";
import { AltImage } from "../index";
import { formatDate, formatOverview } from "../../utils/index";
import styles from "./Image.module.css";

const Image = ({
  id,
  backdrop_path,
  poster_path,
  type,
  title,
  name,
  first_air_date,
  cardGenre,
  vote_average,
  overview,
}) => {
  
  const [alt, setAlt] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <div className={styles[`${type}-image-container`]}>
      <Link onClick={handleClick} to={`/${type}/${id}`}>
        {!alt ? (
          <img
            className={`${
              type === "movie" ? styles["movie-image"] : styles["tv-image"]
            } `}
            src={`https://image.tmdb.org/t/p/w500${
              type === "movie" ? backdrop_path : poster_path
            } `}
            alt={""}
            onError={() => setAlt(true)}
          />
        ) : (
          <AltImage />
        )}
        <div className={styles[`${type}-content`]}>
          <h4 className={styles[`${type}-title`]}>
            {type === "movie" ? title : name}
          </h4>
          {type === "tv" ? (
            <div className={styles[`${type}-info`]}>
              <span>{`${formatDate(first_air_date)}`}</span>
              <span>{`${cardGenre}`}</span>
              <span>{` ${vote_average}/10`}</span>
              <div className={styles["overview-info"]}>
                <h4 className={styles[`${type}-overview`]}>Summary</h4>
                <p>{`${formatOverview(overview)}`}</p>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </Link>
    </div>
  );
};

export default Image;
