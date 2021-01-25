import { MoviesContainer, Aside, Footer } from "../../components/index";
import useSmoothLoading from "../../hooks/useSmoothLoading";
import styles from "./Upcoming.module.css";

const Upcoming = () => {
  const [name, setName] = useSmoothLoading();

  return (
    <div onLoad={setName} className={`${styles.container} ${styles[name]}`}>
      <div className={styles.wrapper}>
        <MoviesContainer 
         urlParam={["movie/upcoming"]} 
         title={"Coming soon"} 
        />
      </div>
      <Aside />
    <Footer />
    </div>
  );
};

export default Upcoming;
