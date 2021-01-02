import { MoviesContainer } from '../../components/index';

import styles from './Upcoming.module.css';

const Upcoming = () => {
  return (
    <div className={ styles.container }>
      <h1>Upcoming</h1>
       <MoviesContainer urlParam={"upcoming"} />
    </div>
  );
};

export default Upcoming;
