import { ReactComponent as Logo } from "assets/images/loader.svg";
import styles from "./Loader.module.scss";

function Loader() {
  return <Logo className={styles.spinner} />;
}

export default Loader;
