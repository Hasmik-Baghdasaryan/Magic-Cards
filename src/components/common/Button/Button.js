import classNames from "classnames";

import styles from "./Button.module.scss";
import { useLocation } from "react-router-dom";

function Button({ text, handleClick }) {
  const pathname = useLocation();
  const btnClass = classNames(styles.button, {
    [styles["login-button"]]: pathname === "/login",
    [styles["sign-up-button"]]: pathname === "/signup",
    [styles["card-button"]]: pathname !== "/login" && pathname !== "/signup",
  });
  return (
    <button onClick={handleClick} className={btnClass}>
      {text}
    </button>
  );
}

export default Button;
