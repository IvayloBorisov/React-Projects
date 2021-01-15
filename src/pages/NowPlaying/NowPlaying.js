import { MoviesContainer, Aside, Footer } from "../../components/index";
import useSmoothLoading from "../../hooks/useSmoothLoading";

import styles from "./NowPlaying.module.css";

const NowPlaying = () => {
  const [name, setName] = useSmoothLoading();

  return (
    <div onLoad={setName} className={`${styles.container} ${styles[name]}`}>
      <div className={styles.wrapper}>
        <MoviesContainer
          urlParam={"movie/now_playing"}
          title={"Now in theatres"}
        />
      </div>
      <Aside />
      <Footer />
    </div>
  );
};

export default NowPlaying;
