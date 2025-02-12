import { useDispatch } from "react-redux";

import { userSignUp } from "store/slices/authSlice";
import ComponentButton from "components/common/ComponentButton/ComponentButton";
import WelcomeText from "components/common/WelcomeText/WelcomeText";

import { welcomeTextData } from "data/welcomeTextData";
import styles from "./SignUp.module.scss";

function SignUp() {
  const dispatch = useDispatch();
  const { title, text } = welcomeTextData;

  const handleLoginSubmit = () => {};

  // function handleSignUpBtnClick() {
  //   dispatch(
  //     userSignUp({
  //       name: "John",
  //       surName: "Smith",
  //       email: "john@test.com",
  //       password: "1234",
  //       id: 1,
  //     })
  //   );
  // }
  return (
    <div className={styles["sign-up-section"]}>
      <section className={styles["text-section"]}>
        <WelcomeText title={title} text={text} />
      </section>
      <div className={styles["form-section"]}>
        <h3>Sign up</h3>
        <form onSubmit={handleLoginSubmit} className={styles["sign-up-form"]}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={styles["sign-up-input"]}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            className={styles["sign-up-input"]}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles["sign-up-input"]}
          />
          <ComponentButton text={"Sign up"} />
        </form>
      </div>
    </div>
  );
}

export default SignUp;
