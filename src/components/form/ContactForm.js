import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import contactsActions from '../../redux/contacts/actions';
import { getContacts } from '../../redux/contacts/selector';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const duplicateName = contacts.find(
    contact => contact.name === name.toLowerCase()
  );

  const onSubmit = (name, number) =>
    dispatch(contactsActions.addContact(name, number));

  const handleSubmit = e => {
    e.preventDefault();
    if (duplicateName) {
      alert(`${name} is already on contacts`);
      return;
    }
    onSubmit(name.toLowerCase(), number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        Name
        <input
          type="text"
          name="name"
          className={styles.input}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
          onChange={handleChange}
        />
      </label>

      <label className={styles.label}>
        Number
        <input
          type="tel"
          name="number"
          className={styles.input}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
