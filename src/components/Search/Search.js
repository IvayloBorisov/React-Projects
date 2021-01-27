
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.container}>
      <input className={styles["search-input"]} placeholder={"Search"} />
      <button className={styles["btn-submit"]} type="submit">
        {<FaSearch className={styles["search-icon"]} />}
      </button>
    </form>
  );
};

export default Search;
