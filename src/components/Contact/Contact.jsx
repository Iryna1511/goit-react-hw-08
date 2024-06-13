import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import { FaUser } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import css from "./Conntact.module.css";

const Contact = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <>
      <div className={css.dscr}>
        <div className={css.row}>
          <FaUser />
          <h3>{name}</h3>
        </div>
        <div className={css.row}>
          <MdPhone />
          <p>{number}</p>
        </div>
      </div>
      <button onClick={handleDelete} type="button">
        Delete
      </button>
    </>
  );
};

export default Contact;
