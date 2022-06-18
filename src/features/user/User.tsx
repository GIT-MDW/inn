import block from "bem-cn";
import { useEffect } from "react";
import { UserInfo } from "../../components/UserInfo/UserInfo";
import { Product } from "../product/Product";
import "./User.scss";

const b = block("user");

export const User = () => {
  useEffect(() => {
    localStorage.setItem("authorized", "true");
  }, []);

  return (
    <div className={b()}>
      <UserInfo />
      <Product />
    </div>
  );
};
