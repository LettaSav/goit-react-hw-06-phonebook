import useStyles from './useStyle';
import { connect } from 'react-redux';
import contactsActions from '../../redux/contacts-actions';

import PropTypes from 'prop-types';

const Filter = ({ onChange, value }) => {
  const classes = useStyles();
  return (
    <>
      <label className={classes.contacts_label}>Find contacts by name </label>
      <input
        className={classes.contacts_input}
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      ></input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
const mapStateToProps = state => ({
  value: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
