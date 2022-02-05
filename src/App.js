import React from 'react';
import ContactForm from './components/form/ContactForm';
import ContactList from './components/list/list';
import Filter from './components/filter/filter';
import './App.css';
import contactsActions from './redux/actions';
import { connect } from 'react-redux';

function App() {
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title-contacts">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(null, mapDispatchToProps)(App);
