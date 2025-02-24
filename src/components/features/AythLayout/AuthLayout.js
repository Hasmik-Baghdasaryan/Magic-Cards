import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";
import { resetStatus } from "store/slices/authSlice";

function AuthLayout() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetStatus());
    navigate(user ? "/feed" : "/login");
  }, [user, navigate]);

  return <Outlet />;
}

export default AuthLayout;
