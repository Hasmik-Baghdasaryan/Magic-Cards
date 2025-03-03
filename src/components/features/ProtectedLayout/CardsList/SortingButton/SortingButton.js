import cx from "classnames";

import styles from "./SortingButton.module.scss";

function SortingButton({ buttonText, size, isSelected }) {
  return (
    <button
      className={cx(styles.button, {
        [styles["small"]]: size === "small",
        [styles["large"]]: size === "large",
        [styles["selected-button"]]: isSelected,
      })}
    >
      {buttonText}
    </button>
  );
}

export default SortingButton;
