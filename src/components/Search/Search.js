import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import styles from "./Search.module.css";

const Search = () => {

  const history = useHistory();
  const [query, setQuery] = useState("");
  
  const handleChange = event => {

    if(event.key === 'Enter') {
     setQuery(event.target.value);
    }
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    history.push(`/search/${query}`);
    // window.scrollTo(0, 0);
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container} >
      <input
        onChange={handleChange}
        onKeyPress={handleChange}
        value={query}
        className={styles["search-input"]}
        placeholder={"Search"}
      />
      <button type="submit" className={styles["btn-submit"]}>
        {<FaSearch className={styles["search-icon"]} />}
      </button>
    </form>
  );
};

export default Search;
