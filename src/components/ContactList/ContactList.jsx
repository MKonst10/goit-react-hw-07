import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import {
  deleteContact,
  selectFilteredContacts,
} from "../../redux/contactsSlice";

export default function ContactList() {
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDeleteContact = (contactData) => {
    dispatch(deleteContact(contactData));
  };

  return (
    <ul className={styles.list}>
      {filteredContacts.map((contact) => (
        <li key={contact.id}>
          <Contact data={contact} onDelete={handleDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
