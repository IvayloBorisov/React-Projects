import { useParams } from 'react-router-dom';
import { Aside, MoviesContainer } from '../../components';

import useSmoothLoading from '../../hooks/useSmoothLoading';
import styles from './TvDetails.module.css';
const TvDetails = () => {
    const [ name, setName ] = useSmoothLoading();
    const tvId = useParams().id;

    return(
        <div onLoad={ setName } className={ `${ styles.container } ${ styles[name] }` }>
            <div className={ styles.wrapper }>
                <MoviesContainer urlParam={ `tv/${tvId}` } title={ "About the show" } />
            </div>
            <Aside />
        </div>
    )

}

export default TvDetails;