import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/common/HeaderButton/HeaderButton";
import Modal from "components/common/Modal/Modal";
import { resetStatus } from "store/slices/authSlice";

import styles from "./Header.module.scss";
import { useState } from "react";
import CreateCard from "components/features/ProtectedLayout/CreateCard/CreateCard";

function Header() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [isModalVisible, setIsModalVisible] = useState(false);
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
    if (buttonText === "Create Card") toggleCreateCardModal();
    else navigate(`/${path}`);
    dispatch(resetStatus());
  }

  function toggleCreateCardModal() {
    setIsModalVisible(!isModalVisible);
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
      {isModalVisible && (
        <Modal onClose={toggleCreateCardModal}>
          <CreateCard handleBtnClick={toggleCreateCardModal} />
        </Modal>
      )}
    </header>
  );
}

export default Header;
