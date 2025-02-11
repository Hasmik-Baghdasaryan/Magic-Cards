import { createBrowserRouter } from "react-router-dom";

import App from "components/App/App";

export function createRouter() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "/signup",
          element: <h1>Sign Up</h1>,
        },
        {
          path: "/login",
          element: <h1>Sign In</h1>,
        },
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
  ]);

  return router;
}
