import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/HeaderButton/HeaderButton";
import { resetStatus } from "store/slices/authSlice";

import styles from "./Header.module.scss";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const buttonText = createButtonText();

  function createButtonText() {
    let btnText = "";
    if (user) btnText = "Create Card";
    if (!user && pathname === "/login") btnText = "Sign Up";
    if (!user && pathname === "/signup") btnText = "Login";

    return btnText;
  }

  function handleBtnClick() {
    const path = buttonText.toLocaleLowerCase().replace(/\s+/g, "");
    navigate(`/${path}`);
    dispatch(resetStatus());
  }

  return (
    <header className={styles.header}>
      <Link to={"/"} className={styles.logoLink}>
        MagicCards
      </Link>
      <nav>
        {user && (
          <Link to={"/profile"} className={styles.profileLink}>
            My profile
          </Link>
        )}
        {buttonText && (
          <Button text={buttonText} handleClick={handleBtnClick}></Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
