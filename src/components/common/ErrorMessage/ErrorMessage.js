import styles from "./ErrorMessage.module.scss";

function ErrorMessage({ value, className }) {
  return <span className={styles[className]}>{value}</span>;
}

export default ErrorMessage;
