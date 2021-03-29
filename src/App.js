import { useState } from 'react';

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

  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem('contacts')) ?? [];
  });

  React.useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  // const [filter, setFilter] = useState('');

  // function updateFilter(e) {
  //   setFilter(e.currentTarget.value);
  // }

  // const addContact = (name, number) => {
  //   const newContact = {
  //     id: uuidv4(),
  //     name: name,
  //     number: number,
  //   };
  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already in contacts!`);
  //   } else if (contacts.find(contact => contact.number === number)) {
  //     alert(` ${number} is already in contacts!`);
  //   } else if (name === '' || number === '') {
  //     alert(`Enter Name and Number in order to add contact`);
  //   } else if (!/\d{3}\d{2}\d{3}\d{2}/g.test(number)) {
  //     alert('Enter valid telephone number');
  //   } else {
  //     setContacts(prevState => [newContact, ...prevState]);
  //   }
  // };

  // const onDelete = contactId => {
  //   setContacts(contacts.filter(({ id }) => id !== contactId));
  // };

  // const showContacts = () => {
  //   const normalizeFilter = filter.toLowerCase();
  //   return contacts.filter(({ name }) =>
  //     name.toLowerCase().includes(normalizeFilter),
  //   );
  // };

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
