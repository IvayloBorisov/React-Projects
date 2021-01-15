import { Image } from '../index';
import { formatDate, formatOverview } from '../../utils/index';

import styles from "./Card.module.css";

const Card = ({ 
               type, 
               title, 
               name, 
               backdrop_path, 
               poster_path, 
               id, 
               vote_average, 
               first_air_date,
               overview, 
               cardGenre 
              }) => {

    const imageProp = {
      type,
      backdrop_path, 
      poster_path, 
      id, 
    }
    
    return (
    <div className={styles[ `${ type }-card` ]}>
      <Image { ...imageProp }/>
      <div className={styles[ `${ type }-content` ]}>
        <h4 className={styles[`${ type }-title` ]}>{ type === 'movie' ? title : name }</h4>
        {
          type === 'tv' ? 
            <div className={ styles[ `${ type }-info` ] }>
              <span>{ `${ formatDate(first_air_date) }` }</span>
              <span>{ `${ cardGenre }` }</span>
              <span>{ ` ${ vote_average }/10` }</span>
              <div className={ styles[ 'overview-info' ] }>
                <h4 className={ styles[ `${ type }-overview` ]} >Summary</h4>
                <p >{ `${ formatOverview(overview) }` }</p>
              </div> 
            </div>  : ''
        }
      </div>
    </div>
  );
};

export default Card;
