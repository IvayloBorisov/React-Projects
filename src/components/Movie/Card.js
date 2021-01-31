import { Image } from '../index';

import styles from "./Card.module.css";

const Card = (props) => {

    const { type } = props;
    
    return (
    <div className={styles[ `${ type }-card` ]}>
      <Image { ...props }/>
    </div>
  );
};

export default Card;
