import { useDispatch } from "react-redux";

import { userSignUp } from "store/slices/authSlice";
import Button from "components/common/Button/Button";

function SignUp() {
  const dispatch = useDispatch();

  function handleSignUpBtnClick() {
    dispatch(
      userSignUp({
        name: "John",
        surName: "Smith",
        email: "john@test.com",
        password: "1234",
        id: 1,
      })
    );
  }
  return <Button text={"Sign Up"} handleClick={handleSignUpBtnClick} />;
}

export default SignUp;
