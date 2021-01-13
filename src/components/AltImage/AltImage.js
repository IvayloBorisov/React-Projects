import styles from './AltImage.module.css';

const AltImage = () => {

    return(
        <div className={ styles.container }>
            <div className={ styles.wrapper }>
              <p className={styles.title}>POSTER</p>
              <h2 className={ styles.subtitle }>NOT AVAILABLE</h2>
            </div>
        </div>
    )
}

export default AltImage;