import { MoviesContainer } from '../../components/index';

import styles from './TopRated.module.css';

const TopRated = () => {
  return (
    <div className={ styles.container }>
      <h1>Top Rated</h1>
       <MoviesContainer urlParam={"top_rated"} />
    </div>
  );
};

export default TopRated;
