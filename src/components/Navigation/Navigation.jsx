import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.link}>
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink to="/contacts" className={styles.link}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
