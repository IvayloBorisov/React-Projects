
import styles from './Title.module.css';

const Title = ({ titlePage, type }) => {

    return(
        <div className={ styles[ `${ type }-container` ] }>
            <h1 className={ styles.title }>{ titlePage.toUpperCase() }</h1>
        </div>
    )
}

export default Title;
