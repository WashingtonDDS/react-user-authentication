import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { SignUp } from "./pages/SignUp";
import { SignIn } from "./pages/SignIn";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route
        element={
          <>
            <Header />
            <ProtectedRoutes />
          </>
        }
      >
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
};

const ProtectedRoutes = () => {
  const token = localStorage.getItem("token");
  return token ? <Outlet /> : <Navigate to="/" />;
};
