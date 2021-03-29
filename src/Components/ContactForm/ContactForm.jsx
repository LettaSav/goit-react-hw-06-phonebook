import { useState } from 'react';
import useStyles from './useStyles.js';

import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';

const ContactForm = ({ onSubmit }) => {
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

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(name, number);
    setName('');
    setNumber('');
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

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsActions.addContact(name, number)),
});

export default connect(null, mapDispatchToProps)(ContactForm);
