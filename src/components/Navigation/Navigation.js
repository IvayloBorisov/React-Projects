import { useState, useEffect } from "react";

import { ListItem, Categories } from "../index";
import { FaAngleDoubleDown, FaAngleDoubleUp } from "react-icons/fa";
import { navLinksInfo } from "../../utils/index";
import { getData } from "../../api";
import styles from "./Navigation.module.css";

const Navigation = ({ type }) => {
  const [classToggle, setClassToggle] = useState("hidden");
  const [isShowCategory, setIsShowCategory] = useState(type === 'footer' ? true : false);
  const [moviesGenres, setMoviesGenres] = useState([]);

  useEffect(() => {
    const getMoviesByGenre = async () => {
      const result = await getData(["genre/movie/list"]);
      setMoviesGenres(result.genres);
    };

    getMoviesByGenre();
  }, []);

  const clickHandler = (event) => {
    
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
      <button className={styles[`${type}-button`]} onClick={clickHandler}>
        {classToggle === "hidden" ? <FaAngleDoubleDown /> : <FaAngleDoubleUp />}
      </button>
      {isShowCategory && (
        <Categories path={"/category"} type={type} genre={moviesGenres} />
      )}
    </>
  );
};

export default Navigation;
