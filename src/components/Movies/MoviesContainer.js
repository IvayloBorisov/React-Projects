import React, { useState, useEffect } from "react";
import useSmoothLoading from "../../hooks/useSmoothLoading";
import { DetailsCard, Card, Title, Button } from "../index";
import { getData } from "../../api/index";

import styles from "./MoviesContainer.module.css";

const MoviesContainer = ({ urlParam, title }) => {
  const [data, setData] = useState({});
  const [pageNumber, setPageNumber] = useState(1);

  console.log(data)
  useEffect(() => {
    const getFilmsData = async () => {
      const movies = await getData(urlParam, pageNumber);
      setData(movies);
      window.scrollTo(0, 0);
    };
    getFilmsData();
  }, [urlParam, pageNumber]);

  const handleClick = (event) => {
    event.preventDefault();

    if (event.target.name === "prev") {
      return setPageNumber(pageNumber - 1);
    }
    setPageNumber(pageNumber + 1);
  };

  return (
    <>
      <div className={styles.container}>
        <Title titlePage={title} type={"movie"} />
        {data.hasOwnProperty("results") ? (
          data.results.map((movie) => {
            return <Card key={movie.id} type={"movie"} {...movie} />;
          })
        ) : (
          <DetailsCard movie={data} />
        )}
        <div className={styles["btn-container"]}>
          {pageNumber !== 1 && <Button click={handleClick} name={"prev"} />}
          <Button click={handleClick} name={"next"} />
        </div>
      </div>
    </>
  );
};

export default MoviesContainer;
