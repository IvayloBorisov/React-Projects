import { MoviesContainer } from '../../components/index';

import styles from './Upcoming.module.css';

const Upcoming = () => {
  return (
    <div className={ styles.container }>
       <MoviesContainer urlParam={"movie/upcoming"} title={ 'Coming soon' }/>
    </div>
  );
};

export default Upcoming;
