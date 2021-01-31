import { useParams } from 'react-router-dom';
import useSmoothLoading from '../../hooks/useSmoothLoading';
import { MoviesContainer, Aside, Footer } from "../../components/index";

import styles from "./CategoriesPage.module.css";


const CategoriesPage = () => {

  const [ name, setName ] = useSmoothLoading();
  const {id} = useParams();
  const urlParam = `&sort_by=popularity.desc&with_genres=${ id }`

    return(
        <div onLoad={ setName } className={`${ styles.container } ${ styles[ name ] }`}>
        <div className={styles.wrapper}>
          <MoviesContainer
            urlParam={["discover/movie", urlParam]}
            title={"Similar movies"}
          />
        </div>
        <Aside />
        <Footer />
    </div>
    )
}

export default CategoriesPage;