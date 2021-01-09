import { MoviesContainer, Aside } from '../../components/index';

import styles from './Upcoming.module.css';

const Upcoming = () => {
  return (
    <div className={ styles.container }>
      <div className={ styles.wrapper }>
       <MoviesContainer urlParam={"movie/upcoming"} title={ 'Coming soon' }/>
      </div>
       <Aside />
    </div>
  );
};

export default Upcoming;
