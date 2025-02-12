import { createBrowserRouter } from "react-router-dom";

import App from "components/App/App";
import ProtectedLayout from "components/features/ProtectedLayout/ProtectedLayout";
import SignIn from "components/features/AythLayout/SignIn/SignIn";
import SignUp from "components/features/AythLayout/SignUp/SignUp";
import AuthLayout from "components/features/AythLayout/AuthLayout";

export function createRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          element: <AuthLayout />,
          children: [
            {
              path: "/signup",
              element: <SignUp />,
            },
            {
              path: "/login",
              element: <SignIn />,
            },
          ],
        },
        {
          element: <ProtectedLayout />,
          children: [
            {
              path: "/profile",
              element: <h1>Profile</h1>,
            },
            {
              path: "/feed",
              element: <h1>Feed</h1>,
            },
          ],
        },
      ],
    },
  ]);

  return router;
}
