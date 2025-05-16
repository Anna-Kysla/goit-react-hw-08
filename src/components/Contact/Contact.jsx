import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={styles.contact}>
      <p className={styles.text}>
        {name}: {number}
      </p>
      <button type="button" className={styles.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
