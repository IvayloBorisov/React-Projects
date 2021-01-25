import { useState, useEffect } from "react";

import { ListItem, Categories } from "../index";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { navLinksInfo } from "../../utils/index";
import styles from "./Navigation.module.css";
import { getData } from "../../api";

const Navigation = ({ type }) => {
  const [classToggle, setClassToggle] = useState("hidden");
  const [isShowCategory, setIsShowCategory] = useState(false);
  const [moviesGenres, setMoviesGenres] = useState([]);

  useEffect(() => {
    const getMoviesByGenre = async () => {
      const result = await getData(["genre/movie/list"]);
      setMoviesGenres(result.genres);
    };

    getMoviesByGenre();
  }, []);

  const clickHandler = (event) => {
    event.preventDefault();
    if (event.target.name === "category") {
      return setIsShowCategory(!isShowCategory);
    }
    if (classToggle === "hidden") {
      return setClassToggle("show");
    }
    return setClassToggle("hidden");
  };

  return (
    <>
      <nav className={styles[`${type}-nav`]}>
        <ul className={styles[`list-container-${classToggle}`]}>
          {navLinksInfo.slice(0, navLinksInfo.length - 1).map((item) => {
            return (
              <ListItem
                key={item.id}
                title={item.title}
                path={item.path}
                type={type}
              />
            );
          })}
          <button className={styles["category-button"]}  name="category" onClick={clickHandler}>
            Category
          </button>
        </ul>
      </nav>
      <button className={styles["header-button"]} onClick={clickHandler}>
        {classToggle === "hidden" ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />}
      </button>
      {isShowCategory && (
        <Categories path={"/category"} type={type} genre={moviesGenres} />
      )}
    </>
  );
};

export default Navigation;
