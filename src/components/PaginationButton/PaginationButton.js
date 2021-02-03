import styles from './PaginationButton.module.css';

const Button = ({ click, name }) => {

  return (
      <button className={ styles.btn } onClick={click} name={ name }>
        {name === "next" ? "Next" : "Prev"}
      </button>
  );
};

export default Button;
