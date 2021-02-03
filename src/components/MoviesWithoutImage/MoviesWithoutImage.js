import { ListItem } from "../index";
import { formatDate } from "../../utils/index";
import styles from "./MoviesWithoutImage.module.css";

const MoviesWithoutImage = ({ title, type, id, release_date }) => {
  
  return (
    <div className={styles.container}>
      <ListItem title={title} type={"line-view"} path={`/movie/${id}`} />
      <span className={styles["release-date"]}>
        {formatDate(release_date, type)}
      </span>
    </div>
  );
};

export default MoviesWithoutImage;
