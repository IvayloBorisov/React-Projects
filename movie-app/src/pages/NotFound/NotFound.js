import { ListItem } from '../../components/index';

import styles from './NotFound.module.css';

const NotFound = () => {

    return(
        <div className={ styles.wrapper }>
            <div className={ styles.container }>
            <p className={ styles.number }>404</p>
            <h1 className={ styles.title }>OOPS!</h1>
            <p className={ styles.subtitle }>The page you requested could not be found...</p>
            <ListItem title={ 'Back To Home' } path={ '/' } />
            </div>
        </div>
    )
}

export default NotFound;