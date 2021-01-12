import useSmoothLoading from '../../hooks/useSmoothLoading';
import { MoviesContainer, Aside } from "../../components/index";

import styles from "./Home.module.css";

const Home = () => {

  const [ name, setName ] = useSmoothLoading();
  return (
    <div onLoad={ setName } className={`${ styles.container } ${ styles[ name ] }`}>
        <div className={styles.wrapper}>
          <MoviesContainer
            urlParam={"movie/popular"}
            title={"Most popular films"}
          />
        </div>
        <Aside />
    </div>
  );
};

export default Home;
