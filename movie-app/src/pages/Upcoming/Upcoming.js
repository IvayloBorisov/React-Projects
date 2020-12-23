import { MoviesContainer } from '../../components/index';


const Upcoming = () => {
  return (
    <div>
      <h1>Upcoming</h1>
      <MoviesContainer urlParam={"upcoming"} />
    </div>
  );
};

export default Upcoming;
