import block from "bem-cn";
import { useAppSelector } from "../../app/hooks";
import { selectUser } from "../../features/user/userSlice";
import "./UserInfo.scss";

const b = block("user-info");

export const UserInfo = () => {
  const account = useAppSelector(selectUser);

  return (
    <div className={b()}>
      <div className={b("id")}>Id: {account.id}</div>
      <div className={b("name")}>Name: {account.name}</div>
      <div className={b("age")}>Age: {account.age}</div>
      <div className={b("item")}>
        Create Single Item - {account.createSingleItem ? "You can create item" : "You can't create single item"}
      </div>
      <div className={b("item")}>
        Create Single Item -
        {account.createMultipleItems ? "You can create Multiple item" : "You can't create Multiple items"}
      </div>
    </div>
  );
};
