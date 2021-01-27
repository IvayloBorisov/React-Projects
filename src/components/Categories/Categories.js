import { ListItem } from "../index";
import styles from "./Categories.module.css";

const Categories = ({ type, genre, clickHandler }) => {
  return (
    <>
      { type === 'footer' && <h3 className={styles.title}>Categories</h3> } 
      <ul name="category" className={styles[`${type}-category-container`]} onClick={clickHandler}>
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
