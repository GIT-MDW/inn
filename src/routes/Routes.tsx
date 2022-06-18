import { Route, Routes } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import { User } from "../features/user/User";
import { Admin } from "../pages/Admin/Admin";
import Shop from "../pages/Shop/Shop";
import { ProtectedRoute } from "./ProtectedRoute/ProtectedRoute";

export const Routing = () => (
  <Routes>
    <Route path="/" element={<ProtectedRoute />}>
      <Route path="shop" element={<Shop />} />
      <Route path="admin" element={<Admin />} />
      <Route path="user" element={<User />} />
    </Route>
    <Route path="login" element={<SignIn />} />
  </Routes>
);
