import { ListItem } from "../index";
import styles from "./Categories.module.css";

const Categories = ({ type, genre }) => {
  return (
    <>
      { type === 'footer' && <h4 className={styles.title}>Categories</h4> } 
      <ul className={styles[`${type}-category-container`]}>
        {genre &&
          genre.map((genre) => (
            <ListItem
              key={genre.id}
              title={genre.name}
              path={`/category/${genre.id}`}
              type={`${type}-category`}
            />
          ))}
      </ul>
    </>
  );
};

export default Categories;
