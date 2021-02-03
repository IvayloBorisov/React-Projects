import { CgMenuGridO, CgMenu } from "react-icons/cg";
import styles from "./ViewModeBtn.module.css";

const ViewModeBtn = ({ name, handleClick }) => {
  return (
    <div className={styles["btn-view-mode"]}>
      <span className={styles.title}>VIEW MODE</span>
      <button className={styles.btn} onClick={handleClick}>
       { name === "column" ?
            <CgMenuGridO className={styles["btn-view"]} />
           : <CgMenu className={styles["btn-view"]} />
        
       }
      </button>
    </div>
  );
};

export default ViewModeBtn;
