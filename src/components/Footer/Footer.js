import { Navigation } from '../index';
import { Search } from '../index';
import styles from './Footer.module.css';

const Footer = () => {

    return(
        <footer className={ styles.footer }>
            <div>
              <div>
                <h3>ARE YOU A MOVIE ADDICT?</h3>
                <p>Feel free to search your favorite movies</p>
                <Search />
              </div>
              <Navigation type={'footer'} />
            </div>
            <p>© 2021 Movie Addict</p>
        </footer>
    )
}

export default Footer;