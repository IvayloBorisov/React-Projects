import {MoviesContainer } from '../../components/index';

const NowPlaying = () => {

  return (
    <div>
      <h1>Now Playing</h1>
      <MoviesContainer urlParam={"now_playing"} />
    </div>
  );
};

export default NowPlaying;
