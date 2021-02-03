import React, { useState, useEffect } from "react";
import { DetailsCard, Card, Title, Button, MoviesWithoutImage, ViewModeBtn } from "../index";
import { getData } from "../../api/index";
import styles from "./MoviesContainer.module.css";

const MoviesContainer = ({ urlParam, title }) => {
  const [data, setData] = useState([]);
  const [ viewMode, setViewMode ] = useState("column");
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    const getFilmsData = async () => {
      const movies = await getData(urlParam, pageNumber);
      setData(movies);
      window.scrollTo(0, 0);
    };
    getFilmsData();
  }, [urlParam, pageNumber]);

  const handleClickPaginationBtn = (event) => {

    if (event.target.name === "prev") {
      return setPageNumber(pageNumber - 1);
    }
    setPageNumber(pageNumber + 1);
  };

  const handleClickVewBtn = event => {
    if(viewMode === "column") {
      return setViewMode("line");
    }
    setViewMode("column");
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles['title-wrapper']}>
          <Title titlePage={title} type={"movie"} />
          { data.total_pages && <ViewModeBtn name={viewMode}  handleClick={ handleClickVewBtn }/> }
        </div>
        {data.results ? (
          data.results.map((movie) => {
            return viewMode === "column" ?
             <Card key={movie.id} type={"movie"} {...movie} />
             : <MoviesWithoutImage key={movie.id} type={"movie"} {...movie}/>
          })
        ) : (
        
          <DetailsCard movie={data} />
        )}
        {data.results &&
        <div className={styles["btn-container"]}>
          {pageNumber !== 1 && <Button click={handleClickPaginationBtn} name={"prev"} />}
          <Button click={handleClickPaginationBtn} name={"next"} />
        </div>
        }
        
      </div>
    </>
  );
};

export default MoviesContainer;
