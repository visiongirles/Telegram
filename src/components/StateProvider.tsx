import type { PropsWithChildren } from 'react';
import { Dispatch } from 'react';
import { createContext, useContext, useReducer } from 'react';
import {
  Messanger,
  Status,
  Profile,
  Settings,
  ChatPreview,
  Message,
} from '../interfaces/interface';

import chatOneResponse from '../data/chatOne.json';
import chatTwoResponse from '../data/chatTwo.json';
import navigationBarChatsResponse from '../data/navigationBarChats.json';

const initialProfile: Profile = {
  username: 'placeholder for username',
  profilePicture: 'placeholder for profilePicture', // picture of loading
  status: Status.Online,
};

const initialSettings: Settings = {
  darkMode: false,
};

const initialNavigationBarChat: ChatPreview = {
  chatId: 0,
  photo: 'placeholder for photo', // picture of loading
  lastMessage: {
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
};

export default function Main() {
  return <div>Something</div>;
}

// TODO: Check if I need a typecasting AS
function getChats() {
  return navigationBarChatsResponse;
}

function changeChat(chatId: number): Message[] {
  const updatedMessages = chatId === 1 ? chatOne : chatTwo;
  return updatedMessages;
}

// const something = [initialMessanger, () => {}];
// type Something = ReturnType<typeof something>;

// type Something = [Messanger, <Dispatch<Action>>];

// export const GameStateContext = createContext([initialMessanger, () => {}]);
export const MessangerStateContext = createContext(initialMessanger);
export const MessangerDispatchContext = createContext<Dispatch<Action>>(
  () => {}
);

export function useMessangerStateContext() {
  return useContext(MessangerStateContext);
}

export function useMessangerDispatchContext() {
  return useContext(MessangerDispatchContext);
}

export function StateProvider({ children }: PropsWithChildren) {
  const [messangerState, dispatch] = useReducer(
    messangerReducer,
    initialMessanger
  );

  return (
    <MessangerStateContext.Provider value={messangerState}>
      <MessangerDispatchContext.Provider value={dispatch}>
        {children}
      </MessangerDispatchContext.Provider>
    </MessangerStateContext.Provider>
  );
}

function messangerReducer(state: Messanger, action: Action): Messanger {
  switch (action.type) {
    case MessangerAction.GetChats: {
      const updatedState = {
        ...state,
        navigationBarChats: getChats(),
      };
      return updatedState;
    }

    case MessangerAction.ChangeCurrentChat: {
      // TODO: create mock function to do networking request - url & chatId
      const updatedMessages = changeChat(action.updatedChatId);
      const updatedState = {
        ...state,
        currentChat: {
          chatId: action.updatedChatId,
          messages: updatedMessages,
        },
      };
      return updatedState;
    }
  }
  const updatedMessanger = initialMessanger;
  return updatedMessanger;
}

export enum MessangerAction {
  GetChats = 'get-chats',
  ChangeCurrentChat = 'change-current-chat',
  DeleteChat = 'delete-chat',
  CreateNewChat = 'create-new-chat',
  TypeMessage = 'type-message',
  SendMessage = 'send-message',
  EditMessage = 'edit-message',
  DeleteMessage = 'delete-message',
}

// CHAT related actions
const changeCurrentChatAction = (updatedChatId: number) =>
  ({
    type: MessangerAction.ChangeCurrentChat,
    updatedChatId,
  } as const);

const deleteChatAction = (chatId: number) =>
  ({
    type: MessangerAction.DeleteChat,
    chatId,
  } as const);

//TODO: а кто будет следить какие id не заняты? не сервер. я буду в reducer
const getChatsAction = () => ({ type: MessangerAction.GetChats } as const);

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

//TODO: content && id - т.к. остальное не меняется?
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

type Action =
  | ReturnType<typeof getChatsAction>
  | ReturnType<typeof changeCurrentChatAction>
  | ReturnType<typeof deleteChatAction>
  | ReturnType<typeof createNewChatAction>
  | ReturnType<typeof typeMessageAction>
  | ReturnType<typeof sendMessageAction>
  | ReturnType<typeof editMessageAction>
  | ReturnType<typeof deleteMessageAction>;

const chatOne = chatOneResponse;

const chatTwo = chatTwoResponse;
