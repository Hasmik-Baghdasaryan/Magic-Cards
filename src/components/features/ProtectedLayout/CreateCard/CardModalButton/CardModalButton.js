import styles from "./CardModalButton.module.scss";

function CardModalButton({ buttonText, isDisabled, handleClick }) {
  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={styles.button}
    >
      {buttonText}
    </button>
  );
}

export default CardModalButton;
