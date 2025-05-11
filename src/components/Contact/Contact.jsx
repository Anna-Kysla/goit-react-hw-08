import { FaUser, FaPhone } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();
  const { id, name, number } = contact;

  return (
    <div className={css.card}>
      <div className={css.info}>
        <p className={css.text}>
          <FaUser className={css.icon} />
          <span className={css.name}>{name}</span>
        </p>
        <p className={css.text}>
          <FaPhone className={css.icon} />
          <span>{number}</span>
        </p>
      </div>
      <button
        className={css.button}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
