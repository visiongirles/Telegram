import { Message, Messanger } from '../interfaces/interface';
import { Action, MessangerAction } from './actions';
import { initialMessanger } from './initialMessanger';
import chatsPreviewResponse from '../data/chatsPreviewResponse.json';
import chatOneResponse from '../data/chatOne.json';
import chatTwoResponse from '../data/chatTwo.json';

// mock data response
const chatOne = chatOneResponse;
const chatTwo = chatTwoResponse;

export function messangerReducer(state: Messanger, action: Action): Messanger {
  switch (action.type) {
    case MessangerAction.GetChatsPreview: {
      const updatedState = {
        ...state,
        chatsPreview: getChats(),
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

    case MessangerAction.SendMessage: {
      if (state.currentChat?.chatId === undefined) return state;

      // подумать state.currentChat?.messages.push(action.message)
      const updatedMessages: Message[] = [
        ...(state.currentChat?.messages ?? []),
        action.message,
      ];
      const updatedState: Messanger = {
        ...state,
        currentChat: {
          ...state.currentChat,
          messages: updatedMessages,
        },
      };
      return updatedState;
    }
  }

  const updatedMessanger = initialMessanger;
  return updatedMessanger;
}

// mock fetch() for chatsPreview (left side)
function getChats() {
  return chatsPreviewResponse;
}

// mock fetch() for a particular chat messanges  (right side)
function changeChat(chatId: number): Message[] {
  const updatedMessages = chatId === 1 ? chatOne : chatTwo;
  return updatedMessages;
}
