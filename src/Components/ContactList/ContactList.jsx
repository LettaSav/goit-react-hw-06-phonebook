import useStyles from './useStyle';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts-actions';
import { ShowContacts } from '../../redux/contacts-selectors';

const ContactList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const showContacts = useSelector(ShowContacts);

  return (
    <ul className={classes.contact_list}>
      {showContacts.map(({ id, name, number }) => (
        <li key={id} className={classes.contact_item}>
          <p>
            {name}: {number}
          </p>
          <button
            className={classes.btn}
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
