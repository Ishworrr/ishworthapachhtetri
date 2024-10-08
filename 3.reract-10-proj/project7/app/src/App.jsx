import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Support from "./pages/Support/Support";
import TransactionPage from "./pages/Transaction/Transaction";
import SignUp from "./pages/Auth/Signup/SignUp";
import SignIn from "./pages/Auth/Signin/signin";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/registerEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ForgotPaswordSent from "./pages/Auth/ForgotPaswordSent/ForgotPaswordSent";
import ResetPasswordSuccess from "./pages/Auth/ResetPasswordSuccess/ResetPasswordSuccess";
import ResetPassword from "./pages/Auth/ResetPassword/ResetPassword";
//import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AlreadySigninRoute from "./components/Auth/AlreadySigninRoute";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/transactions",
      element: (
        <ProtectedRoute>
          <TransactionPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/support",
      element: (
        <ProtectedRoute>
          <Support />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AlreadySigninRoute>
          <SignUp />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/signin",
      element: (
        <AlreadySigninRoute>
          <SignIn />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/register-email-verify/:email",
      element: (
        <AlreadySigninRoute>
          <RegisterEmailVerify />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/email-verify/:token",
      element: (
        <AlreadySigninRoute>
          <RegisterSuccess />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password",
      element: (
        <AlreadySigninRoute>
          <ForgotPassword />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-success/:email",
      element: (
        <AlreadySigninRoute>
          <ForgotPaswordSent />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password-verify/:token",
      element: (
        <AlreadySigninRoute>
          <ResetPassword />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/reset-success",
      element: (
        <AlreadySigninRoute>
          <ResetPasswordSuccess />
        </AlreadySigninRoute>
      ),
    },
  ]);
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
