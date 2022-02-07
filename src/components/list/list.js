import { useSelector, useDispatch } from 'react-redux';
import { getfilteredContacts } from '../../redux/contacts/selector';
import contactsActions from '../../redux/contacts/actions';
import styles from './list.module.css';
import PropTypes from 'prop-types';

const ContactList = () => {
  const contacts = useSelector(getfilteredContacts);
  const dispatch = useDispatch();
  const onDelete = id => dispatch(contactsActions.deleteContact(id));

  return (
    <ul className={styles.contactList}>
      {contacts.map(contact => (
        <li key={contact.id} className={styles.contactItem}>
          {contact.name}: {contact.number}
          <button
            className={styles.button}
            onClick={() => onDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ),
  onDelete: PropTypes.func,
};

export default ContactList;
