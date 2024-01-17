import { createStore } from 'redux';
import { messangerReducer } from './reducer';

export const store = createStore(messangerReducer);
