import useSmoothLoading from "../../hooks/useSmoothLoading";
import { MoviesContainer, Aside, Footer } from "../../components/index";

import styles from "./TopRated.module.css";

const TopRated = () => {
  const [name, setName] = useSmoothLoading();

  return (
    <div onLoad={setName} className={` ${styles.container} ${styles[name]} `}>
      <div className={styles.wrapper}>
        <MoviesContainer 
         urlParam={["movie/top_rated"]} 
         title={"Top rated"} 
        />
      </div>
      <Aside />
      <Footer />
    </div>
  );
};

export default TopRated;
