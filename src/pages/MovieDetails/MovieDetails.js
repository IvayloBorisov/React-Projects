import { useParams } from "react-router-dom";
import useSmoothLoading from '../../hooks/useSmoothLoading';
import { MoviesContainer, Aside, Footer } from "../../components/index";
import styles from './MovieDetails.module.css';

const MovieDetails = () => {
  const [ name, setName ] = useSmoothLoading();
  const movieId = useParams().id;

  return (
    <div onLoad={ setName } className={ `${ styles.container } ${ styles[name] }` }>
      <div className={ styles.wrapper }>
        <MoviesContainer
          urlParam={`movie/${movieId}`}
          title={"About the movie"}
        />
      </div>
      <Aside />
      <Footer />
    </div>
  );
};

export default MovieDetails;
