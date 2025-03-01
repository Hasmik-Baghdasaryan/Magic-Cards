import cx from "classnames";
import styles from "./CardModalButton.module.scss";

function CardModalButton({ buttonText, isDisabled, handleClick }) {
  return (
    <button
      disabled={isDisabled}
      onClick={handleClick}
      className={cx(styles.button, {
        [styles["create-button"]]: buttonText === "Create",
      })}
    >
      {buttonText}
    </button>
  );
}

export default CardModalButton;
