import { Message, Messanger } from '../interfaces/interface';
import { Action, MessangerAction } from './actions';
import { initialMessanger } from './initialMessanger';
import chatsPreviewResponse from '../data/chatsPreviewResponse.json';
import chatOneResponse from '../data/chatOne.json';
import chatTwoResponse from '../data/chatTwo.json';
import chatThreeResponse from '../data/chatThree.json';
import chatFourResponse from '../data/chatFour.json';
import chatFiveResponse from '../data/chatFive.json';

// mock data response
const chatOne = chatOneResponse;
const chatTwo = chatTwoResponse;
const chatThree = chatThreeResponse;
const chatFour = chatFourResponse;
const chatFive = chatFiveResponse;

export function messangerReducer(state: Messanger, action: Action): Messanger {
  // console.log(action);

  switch (action.type) {
    case MessangerAction.GetChatsPreview: {
      const updatedState = {
        ...state,
        chatsPreview: action.chatsPreview,
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
      if (state.currentChat === undefined) return state;

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

    case MessangerAction.DeleteMessage: {
      if (state.currentChat === undefined) return state;
      const updatedMessages: Message[] = state.currentChat?.messages.filter(
        (message) => {
          return message.id !== action.messageId;
        }
      );
      const updatedState: Messanger = {
        ...state,
        currentChat: { ...state.currentChat, messages: updatedMessages },
      };
      console.log(updatedState);
      return updatedState;
    }
  }

  return initialMessanger;
}

// mock fetch() for chatsPreview (left side)
// function getChats() {
//   return chatsPreviewResponse;
// }

// mock fetch() for a particular chat messanges  (right side)
function changeChat(chatId: number): Message[] {
  let updatedMessages: Message[] = [];
  switch (chatId) {
    case 1: {
      updatedMessages = chatOne;
      break;
    }
    case 2: {
      updatedMessages = chatTwo;
      break;
    }
    case 3: {
      updatedMessages = chatThree;
      break;
    }
    case 4: {
      updatedMessages = chatFour;
      break;
    }
    case 5: {
      updatedMessages = chatFive;
      break;
    }
    default: {
      updatedMessages = chatOne;
    }
  }

  return updatedMessages;
}
