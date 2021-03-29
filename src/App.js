import { useSelector } from 'react-redux';
import { getContacts } from './redux/contacts-selectors';

import React from 'react';

import ContactForm from './Components/ContactForm/ContactForm';
import Filter from './Components/Filter/Filter';
import ContactList from './Components/ContactList/ContactList';

import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  main_container: {
    width: 450,
    height: 'auto',
    borderRadius: 5,
    margin: '2% auto',
    boxShadow: '0 9 50 hsla(20, 67%, 75%, 0.31)',
    padding: '2%',
    backgroundImage: 'linear-gradient(-225deg, #E3FDF5 50%, #FFE6FA 50%)',
  },
  header_title: {
    fontSize: '250%',
    fontFamily: 'Playfair Display serif',
    color: '#3e403f',
  },
});
function App() {
  const classes = useStyles();
  const contacts = useSelector(getContacts);

  return (
    <div className={classes.main_container}>
      <h1 className={classes.header_title}>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length >= 1 && <Filter />}
      {contacts.length > 0 ? (
        <ContactList />
      ) : (
        <p>We coudnt find any contacts in your phonebook, add some contacts</p>
      )}
    </div>
  );
}

export default App;
