import { Link } from 'react-router-dom';

import styles from './ListItem.module.css';


const ListItem = ({ title, path, type }) => {

    return(
        <li className={ styles[ `${ type }-nav-item` ] }>
            <Link to={ path } className={ `${ type }-nav-link` }>{ title }</Link>
        </li>
    )
}

export default ListItem;