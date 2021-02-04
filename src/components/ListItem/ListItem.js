import { Link } from "react-router-dom";
import styles from "./ListItem.module.css";

const ListItem = ({ title, path, type }) => {

  const handleClick = () => {
    window.scrollTo(0, 0);
  }

  return (
    <li className={styles[`${type}-item`]}>
      <Link onClick={handleClick} to={path} className={styles[`${type}-link`]}>
        {title}
      </Link>
    </li>
  );
};

export default ListItem;
