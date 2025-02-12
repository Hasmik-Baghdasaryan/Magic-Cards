import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userSignIn } from "store/slices/authSlice";
import Button from "components/common/HeaderButton/HeaderButton";
import WelcomeText from "components/common/WelcomeText/WelcomeText";

import { welcomeTextData } from "data/welcomeTextData";
import styles from "./SignIn.module.scss";
import ComponentButton from "components/common/ComponentButton/ComponentButton";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  const { title, text } = welcomeTextData;

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  // function handleSignInBtnClick() {
  //   dispatch(userSignIn({ email: "john@test.com", password: "1234" }));
  // }

  const handleLoginSubmit = () => {};

  return (
    <div className={styles["sign-in-section"]}>
      <section className={styles["text-section"]}>
        <WelcomeText title={title} text={text} />
      </section>
      <div className={styles["form-section"]}>
        <h3>Log in</h3>
        <form onSubmit={handleLoginSubmit} className={styles["login-form"]}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={styles["login-input"]}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles["login-input"]}
          />
          <div className={styles["checkbox-section"]}>
            <input
              type="checkbox"
              name="remember-password"
              id="rememberPassword"
            />
            <label htmlFor="rememberPassword">Remember me</label>
          </div>
          <ComponentButton text={"Login"} />
        </form>
      </div>
    </div>
  );
}

export default SignIn;
