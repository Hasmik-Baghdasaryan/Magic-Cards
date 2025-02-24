import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import WelcomeText from "components/common/WelcomeText/WelcomeText";
import SignInForm from "./SignInForm/SignInForm";
import ErrorMessage from "components/common/ErrorMessage/ErrorMessage";

import { welcomeTextData } from "data/welcomeTextData";
import styles from "./SignIn.module.scss";

function SignIn() {
  const navigate = useNavigate();
  const { user, status, error } = useSelector((state) => state.auth);

  const [errorMsg, setErrorMsg] = useState("");

  const { title, text } = welcomeTextData;

  useEffect(() => {
    if (status === "fail") setErrorMsg(error);
    if (user) navigate("/profile");
  }, [user, error, status, navigate]);

  return (
    <div className={styles["sign-in-section"]}>
      <section className={styles["text-section"]}>
        <WelcomeText title={title} text={text} />
      </section>
      <div className={styles["form-section"]}>
        <h3>Log in</h3>
        {errorMsg && (
          <ErrorMessage value={errorMsg} className="sign-in-fail-message" />
        )}
        <SignInForm updateErrorMsg={setErrorMsg} />
      </div>
    </div>
  );
}

export default SignIn;
