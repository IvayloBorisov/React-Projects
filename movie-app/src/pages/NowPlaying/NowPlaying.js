import {MoviesContainer } from '../../components/index';

import styles from './NowPlaying.module.css';

const NowPlaying = () => {

  return (
    <div className={ styles.container }>
      <h1>Now Playing</h1>
      <MoviesContainer urlParam={"now_playing"} />
    </div>
  );
};

export default NowPlaying;
