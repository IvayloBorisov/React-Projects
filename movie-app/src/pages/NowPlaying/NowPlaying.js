import { MoviesContainer, Aside } from '../../components/index';

import styles from './NowPlaying.module.css';

const NowPlaying = () => {

  return (
    <div className={ styles.container }>
      <MoviesContainer urlParam={"movie/now_playing"} title={ 'Now in theatres' } />
      <Aside />
    </div>
  );
};

export default NowPlaying;
