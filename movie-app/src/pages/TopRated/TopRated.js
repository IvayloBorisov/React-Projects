import { MoviesContainer, Aside } from '../../components/index';

import styles from './TopRated.module.css';

const TopRated = () => {
  return (
    <div className={ styles.container }>
      <div className={ styles.wrapper }>
        <MoviesContainer urlParam={"movie/top_rated"} title={ 'Top rated' }/>
      </div>
      <Aside />
    </div>
  );
};

export default TopRated;
