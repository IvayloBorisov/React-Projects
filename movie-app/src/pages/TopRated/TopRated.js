import { MoviesContainer } from '../../components/index';

import styles from './TopRated.module.css';

const TopRated = () => {
  return (
    <div className={ styles.container }>
      <MoviesContainer urlParam={"top_rated"} title={ 'Top rated' }/>
    </div>
  );
};

export default TopRated;
