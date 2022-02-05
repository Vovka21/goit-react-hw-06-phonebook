import React from 'react';
import styles from './list.module.css';
import PropTypes from 'prop-types';
import contactsActions from '../../redux/actions';
import { connect } from 'react-redux';

const ContactList = ({ contacts, onDelete }) => (
  <ul className={styles.contactList}>
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={styles.contactItem}>
        {name}: {number}
        <button className={styles.button} onClick={() => onDelete(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.string.isRequired).isRequired
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};

const getVisibleContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();

  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContacts(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
