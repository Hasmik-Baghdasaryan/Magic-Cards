import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import ComponentButton from "components/common/ComponentButton/ComponentButton";
import Loader from "components/common/Loader/Loader";

import { userSignIn } from "store/slices/authSlice";
import { getPlaceholder } from "helpers/utility";

import styles from "./SignInForm.module.scss";

function SignInForm({ updateErrorMsg }) {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });

  const [isRemembered, setIsRemembered] = useState(false);

  const SignInFormFields = Array.from(Object.keys(userInfo));

  const isBtnDisabled = () => {
    return Object.values(userInfo).some((data) => !data.length);
  };

  const handleSignInInputChange = (ev) => {
    const { name, value } = ev.target;
    setUserInfo((prevUserIno) => ({ ...prevUserIno, [name]: value }));
    updateErrorMsg("");
  };

  const handleCheckBoxChange = () => {
    setIsRemembered(!isRemembered);
  };

  const handleLoginSubmit = (ev) => {
    ev.preventDefault();
    dispatch(userSignIn({ ...userInfo, isRemembered }));
  };

  return (
    <form onSubmit={handleLoginSubmit} className={styles["login-form"]}>
      {SignInFormFields.map((field) => (
        <input
          key={field}
          type={field === "password" ? "password" : "text"}
          name={field}
          placeholder={getPlaceholder(field)}
          className={styles["login-input"]}
          value={userInfo[field]}
          onChange={handleSignInInputChange}
        />
      ))}
      <div className={styles["checkbox-section"]}>
        <input
          type="checkbox"
          name="remember-password"
          id="rememberPassword"
          className={styles.checkbox}
          checked={isRemembered}
          onChange={handleCheckBoxChange}
        />
        <label htmlFor="rememberPassword">Remember me</label>
      </div>
      <ComponentButton
        text={status === "loading" ? <Loader /> : "Login"}
        isDisabled={isBtnDisabled()}
        handleClick={handleLoginSubmit}
      />
    </form>
  );
}

export default SignInForm;
