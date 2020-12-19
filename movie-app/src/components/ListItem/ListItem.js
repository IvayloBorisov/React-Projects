import { Link } from 'react-router-dom';


const ListItem = ({ title, path, type }) => {

    return(
        <li className={ `${ type }-nav-item` }>
            <Link to={ path } className={ `${ type }-nav-link` }>{ title }</Link>
        </li>
    )
}

export default ListItem;