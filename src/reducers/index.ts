import { combineReducers } from 'redux';
import { messangerReducer } from './messangerReducer';

export const rootReducer = combineReducers({
  messanger: messangerReducer,
});
