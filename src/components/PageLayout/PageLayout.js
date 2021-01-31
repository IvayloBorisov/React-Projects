import { useState, useEffect } from 'react';
import useSmoothLoading from '../../hooks/useSmoothLoading';
import { Aside, Footer, Loading } from '../index';
import { fakeRequest } from '../../utils/index';
import styles from './PageLayout.module.css';

const PageLayout = (props) => {

  const [isLoading, setLoading] = useState(true);
    const [ className, setClassName ] = useSmoothLoading();

    useEffect(() => {
      fakeRequest().then(() => {
        setLoading(!isLoading);
      });
    }, []);

    return (
      isLoading ? <Loading /> :
      <div onLoad={ setClassName } className={`${ styles.container } ${ styles[ className ] }`}>
          <div className={styles.wrapper}>
           { props.children }
          </div>
          <Aside />
          <Footer />
      </div>
    );

}

export default PageLayout;