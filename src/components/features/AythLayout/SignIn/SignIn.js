import Button from "components/common/Button/Button";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { userSignIn } from "store/slices/authSlice";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user && isAuthenticated) {
      navigate("/profile");
    }
  }, [isAuthenticated, user]);

  function handleSignInBtnClick() {
    dispatch(userSignIn({ email: "john@test.com", password: "1234" }));
  }

  return <Button text={"Sign In"} handleClick={handleSignInBtnClick} />;
}

export default SignIn;
