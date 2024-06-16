import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import SignUp from "./pages/Auth/Signup/SignUp";
import SignIn from "./pages/Auth/Signin/signin";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/registerEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgotPassword from "./pages/Auth/Forgot PAssword/ForgotPassword";
import ForgotPaswordSentVerification from "./pages/Auth/ForgotPaswordSentVerification/ForgotPaswordSentVerification";
import ResetPasswordDone from "./pages/Auth/ResetPasswordDone/ResetPasswordDone";
import ResetPassword from "./pages/Auth/Reset PAssword/Reset PAssword";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/transactions",
    element: <TransactionPage />,
  },
  {
    path: "/support",
    element: <Support />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/register-email-and-verify",
    element: <RegisterEmailVerify />,
  },
  {
    path: "/register-success",
    element: <RegisterSuccess />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/forgot-password-verification",
    element: <ForgotPaswordSentVerification />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
  {
    path: "/reset-password-done",
    element: <ResetPasswordDone />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
