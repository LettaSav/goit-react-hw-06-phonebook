import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter.type]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
