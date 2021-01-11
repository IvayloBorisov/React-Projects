import { MoviesContainer, Aside } from '../../components/index';

import styles from './NowPlaying.module.css';

const NowPlaying = () => {

  return (
    <div className={ styles.container }>
      <div className={ styles.wrapper }>
        <MoviesContainer urlParam={"movie/now_playing"} title={ 'Now in theatres' } />
      </div>
      <Aside />
    </div>
  );
};

export default NowPlaying;
