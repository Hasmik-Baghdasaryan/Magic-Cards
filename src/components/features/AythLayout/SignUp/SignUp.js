import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import WelcomeText from "components/common/WelcomeText/WelcomeText";
import ErrorMessage from "components/common/ErrorMessage/ErrorMessage";
import SignUpForm from "./SignUpForm/SignUpForm";

import { SIGN_UP_FAIL_MSG } from "constants/constants";
import { welcomeTextData } from "data/welcomeTextData";

import styles from "./SignUp.module.scss";

function SignUp() {
  const navigate = useNavigate();
  const { status } = useSelector((state) => state.auth);

  const [errorMsg, setErrorMsg] = useState("");
  const { title, text } = welcomeTextData;

  useEffect(() => {
    if (status === "success") navigate("/login");
    if (status === "fail") setErrorMsg(SIGN_UP_FAIL_MSG);
  }, [status, navigate]);

  return (
    <div className={styles["sign-up-section"]}>
      <section className={styles["text-section"]}>
        <WelcomeText title={title} text={text} />
      </section>
      <div className={styles["form-section"]}>
        <h3>Sign up</h3>
        {errorMsg && (
          <ErrorMessage value={errorMsg} className="sign-up-fail-message" />
        )}
        <SignUpForm />
      </div>
    </div>
  );
}

export default SignUp;
