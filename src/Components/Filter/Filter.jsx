import useStyles from './useStyle';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from '../../redux/contacts-selectors';
import { changeFilter } from '../../redux/contacts-actions';

import PropTypes from 'prop-types';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <>
      <label className={classes.contacts_label}>Find contacts by name </label>
      <input
        className={classes.contacts_input}
        name="filter"
        type="text"
        value={filter}
        onChange={e => dispatch(changeFilter(e.target.value))}
      ></input>
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
