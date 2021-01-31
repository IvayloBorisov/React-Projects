import useSmoothLoading from "../../hooks/useSmoothLoading";
import { Aside, Footer } from "../index";
import styles from "./PageLayout.module.css";

const PageLayout = (props) => {
  const [name, setName] = useSmoothLoading();
  return (
    <div onLoad={setName} className={`${styles.container} ${styles[name]}`}>
      <div className={styles.wrapper}>{props.children}</div>
      <Aside />
      <Footer />
    </div>
  );
};

export default PageLayout;
