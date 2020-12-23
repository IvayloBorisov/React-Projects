import { MoviesContainer } from '../../components/index';

const TopRated = () => {
  return (
    <div>
      <h1>Top Rated</h1>
      <MoviesContainer urlParam={"top_rated"} />
    </div>
  );
};

export default TopRated;
