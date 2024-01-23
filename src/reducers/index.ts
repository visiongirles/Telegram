import { combineReducers } from 'redux';
import { messangerReducer } from './messangerReducer';

import {
  changeCurrentChatAction,
  deleteChatAction,
  getChatsAction,
  deleteMessageAction,
  sendMessageAction,
} from './actions';

export const rootReducer = combineReducers({
  messanger: messangerReducer,
});

export {
  getChatsAction,
  deleteChatAction,
  deleteMessageAction,
  changeCurrentChatAction,
  sendMessageAction,
};
