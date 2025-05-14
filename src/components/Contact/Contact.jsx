import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/contactsOperations";
import styles from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <li className={styles.contact}>
      <p className={styles.text}>
        {name}: {number}
      </p>
      <button
        type="button"
        className={styles.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
