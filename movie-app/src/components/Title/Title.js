
import styles from './Title.module.css';

const Title = ({ titlePage }) => {

    return(
        <div className={ styles.container }>
            <h1 className={ styles.title }>{ titlePage.toUpperCase() }</h1>
        </div>
    )
}

export default Title;
