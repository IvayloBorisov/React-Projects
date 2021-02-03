import { Link } from "react-router-dom";
import styles from "./ListItem.module.css";

const ListItem = ({ title, path, type }) => {

  return (
    <li className={styles[`${type}-item`]}>
      <Link to={path} className={styles[`${type}-link`]}>
        {title}
      </Link>
    </li>
  );
};

export default ListItem;
