import { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

import ErrorMessage from "components/common/ErrorMessage/ErrorMessage";
import ComponentButton from "components/common/ComponentButton/ComponentButton";
import Loader from "components/common/Loader/Loader";

import { userSignUp } from "store/slices/authSlice";
import { validateFields } from "helpers/validate";

import styles from "./SignUpForm.module.scss";

function SignUpForm() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.auth);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({});
  const signUpFormFields = Array.from(Object.keys(userData));

  const getPlaceholder = (field) => {
    return field.charAt(0).toUpperCase() + field.slice(1);
  };

  const isBtnDisabled = () => {
    return (
      Object.values(userData).some((data) => !data.length) ||
      Object.values(validationErrors).some((error) => error.length)
    );
  };

  const handleSignUpInputChange = (ev) => {
    const { name, value } = ev.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
  };

  const handleSignUpInputBlur = (field) => {
    setValidationErrors((prevValidationErrors) => ({
      ...prevValidationErrors,
      [field]: validateFields(userData[field], {
        required: true,
        minLength: 4,
        maxLength: 40,
      }),
    }));
  };

  const handleLoginSubmit = (ev) => {
    ev.preventDefault();
    dispatch(userSignUp({ ...userData, id: Date.now() }));
  };

  return (
    <form onSubmit={handleLoginSubmit} className={styles["sign-up-form"]}>
      {signUpFormFields.map((field) => (
        <Fragment key={field}>
          {validationErrors && (
            <ErrorMessage
              value={validationErrors[field]}
              className="sign-up-input-validation"
            />
          )}
          <input
            type={field === "password" ? "password" : "text"}
            name={field}
            placeholder={getPlaceholder(field)}
            className={cx(styles["sign-up-input"], {
              [styles["invalid-input"]]: validationErrors[field],
            })}
            value={userData[field]}
            onChange={handleSignUpInputChange}
            onBlur={() => handleSignUpInputBlur(field)}
          />
        </Fragment>
      ))}
      <ComponentButton
        text={status === "loading" ? <Loader /> : "Sign up"}
        isDisabled={isBtnDisabled()}
        handleClick={handleLoginSubmit}
      />
    </form>
  );
}

export default SignUpForm;
