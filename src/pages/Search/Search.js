import { useParams } from 'react-router-dom';
import { MoviesContainer, Aside, Footer } from '../../components/index';
import useSmoothLoading from '../../hooks/useSmoothLoading';
import styles from './Search.module.css';

const Search = () => {

  const { query } = useParams();
  const [name, setName] = useSmoothLoading();
  return (
    <div onLoad={setName} className={` ${styles.container} ${styles[name]} `}>
      <div className={styles.wrapper}>
        <MoviesContainer 
         urlParam={["search/movie", `&query=${query}`]} 
         title={"Search"} 
        />
      </div>
      <Aside />
      <Footer />
    </div>
  );
}

export default Search;