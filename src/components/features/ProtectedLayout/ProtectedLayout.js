import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

function ProtectedLayout() {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(user ? "/feed" : "/login");
  }, [user, navigate]);

  return <Outlet />;
}

export default ProtectedLayout;
