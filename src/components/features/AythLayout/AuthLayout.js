import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

function AuthLayout() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(user ? "/feed" : "/login");
  }, [user, navigate]);

  return <Outlet />;
}

export default AuthLayout;
