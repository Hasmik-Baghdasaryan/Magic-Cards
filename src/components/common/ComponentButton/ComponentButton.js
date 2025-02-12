import styles from "./ComponentButton.module.scss";

function ComponentButton({ text, handleClick, isDisabled }) {
  return (
    <button
      onClick={handleClick}
      className={styles.button}
      disabled={isDisabled}
    >
      {text}
    </button>
  );
}

export default ComponentButton;
