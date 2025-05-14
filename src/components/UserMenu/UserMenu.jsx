import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/auth/authOperations";
import { selectUserName } from "../../redux/auth/authSelectors";
import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  return (
    <div className={styles.userMenu}>
      <span className={styles.greeting}>Welcome, {userName}</span>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(logout())}
      >
        Log Out
      </button>
    </div>
  );
};

export default UserMenu;
