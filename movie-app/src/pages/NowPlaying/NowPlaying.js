import { MoviesContainer } from '../../components/index';

import styles from './NowPlaying.module.css';

const NowPlaying = () => {

  return (
    <div className={ styles.container }>
      <MoviesContainer urlParam={"now_playing"} title={ 'Now in theatres' } />
    </div>
  );
};

export default NowPlaying;
