import { useState } from 'react';
import useStyles from './useStyles.js';

import { useSelector, useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts-actions';
import { getContacts } from '../../redux/contacts-selectors';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const classes = useStyles();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleInputChange = e => {
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
  const checkNameInContacts = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };
  const checkNumberInContacts = number => {
    return contacts.find(contact => contact.number === number);
  };
  const checkEmptyBars = (name, number) => {
    return name === '' || number === '';
  };
  const checkSpelling = number => {
    return !/\d{3}\d{2}\d{3}\d{2}/g.test(number);
  };

  const ResetFields = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkNameInContacts(name)) {
      alert(`${name} is already in contacts!`);
    } else if (checkNumberInContacts(number)) {
      alert(` ${number} is already in contacts!`);
    } else if (checkEmptyBars(name, number)) {
      alert(`Enter Name and Number in order to add contact`);
    } else if (checkSpelling(number)) {
      alert('Enter valid telephone number');
    } else {
      dispatch(addContact(name, number));
    }
    ResetFields();
  };

  return (
    <form onSubmit={handleSubmit} className={classes.add_form}>
      <label className={classes.input_label}>Name</label>
      <input
        className={classes.contacts_input}
        name="name"
        type="text"
        placeholder="John Smith"
        value={name}
        onChange={handleInputChange}
      ></input>
      <label className={classes.input_label}>Number</label>
      <input
        className={classes.contacts_input}
        name="number"
        type="tel"
        placeholder="111-11-111-11"
        value={number}
        onChange={handleInputChange}
      ></input>
      <button className={classes.submit_button}>Add Contact</button>
    </form>
  );
};

export default ContactForm;
