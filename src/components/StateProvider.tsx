import type { PropsWithChildren } from 'react';
import { Dispatch } from 'react';
import { createContext, useContext, useReducer } from 'react';
import {
  Messanger,
  Status,
  Profile,
  Settings,
  NavigationBarChat,
  Message,
} from '../interfaces/interface';

const initialProfile: Profile = {
  username: 'placeholder for username',
  profilePicture: 'placeholder for profilePicture', // picture of loading
  status: Status.Online,
};

const initialSettings: Settings = {
  darkMode: false,
};

const initialNavigationBarChat = {
  chatId: 0,
  photo: 'placeholder for photo', // picture of loading
  lassMessage: {
    id: 1,
    date: Date.now(),
    author: 'placeholder for author',
    hasRead: false,
    isMine: false,
    content: 'placeholder for content',
  },
};

const initialMessanger: Messanger = {
  profile: initialProfile,
  settings: initialSettings,
  navigationBarChats: [initialNavigationBarChat],
  currentChat: undefined,
  draftMessage: '',
};

function messangerReducer(state: Messanger, action: Action): Messanger {
  const updatedMessanger = initialMessanger;
  return updatedMessanger;
}

export enum MessangerAction {
  ChangeCurrentChat = 'change-current-chat',
  DeleteChat = 'delete-chat',
  CreateNewChat = 'create-new-chat',
  TypeMessage = 'type-message',
  SendMessage = 'send-message',
  EditMessage = 'edit-message',
  DeleteMessage = 'delete-message',
}

// CHAT related actions
const changeCurrentChatAction = (
  currentChatId: number,
  currentChat: Message[]
) =>
  ({
    type: MessangerAction.ChangeCurrentChat,
    currentChatId,
    currentChat,
  } as const);

const deleteChatAction = (chatId: number) =>
  ({
    type: MessangerAction.DeleteChat,
    chatId,
  } as const);

//TODO: а кто будет следить какие id не заняты? не сервер. я буду в reducer
const createNewChatAction = () =>
  ({
    type: MessangerAction.CreateNewChat,
  } as const);

//  Messages related actions

const typeMessageAction = (draftMessage: string) =>
  ({
    type: MessangerAction.TypeMessage,
    draftMessage,
  } as const);

const sendMessageAction = (message: Message) =>
  ({
    type: MessangerAction.SendMessage,
    message,
  } as const);

//TODO content && id - т.к. остальное не меняется?
const editMessageAction = (message: Message) =>
  ({
    type: MessangerAction.EditMessage,
    message,
  } as const);

const deleteMessageAction = (messageId: number) =>
  ({
    type: MessangerAction.DeleteMessage,
    messageId,
  } as const);
