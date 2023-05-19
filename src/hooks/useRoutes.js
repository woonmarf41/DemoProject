import { Navigate } from "react-router-dom";

import LoginPage from "../pages/Login";
import SignupPage from "../pages/Signup";
import Homepage from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import RootLayout from "../layouts/RootLayout";
import LoginLayout from "../layouts/LoginLayout";
import NotFound from "../pages/NotFound";

export const routes = (isLoggedIn) => [
  {
    path: "/",
    element: isLoggedIn ? <RootLayout /> : <Navigate to={"/login"} />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/",
    element: !isLoggedIn ? <LoginLayout /> : <Navigate to={"/"} />,
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];
