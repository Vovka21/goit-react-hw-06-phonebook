import React from 'react';
import ContactForm from './components/form/ContactForm';
import ContactList from './components/list/list';
import Filter from './components/filter/filter';
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title-contacts">Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};

export default App;
