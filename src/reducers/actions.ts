import { ChatPreview, Message } from '../interfaces';

export enum MessangerAction {
  GetChatsPreview = 'get-chats',
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

const getChatsAction = (chatsPreview: ChatPreview[]) =>
  ({ type: MessangerAction.GetChatsPreview, chatsPreview } as const);

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

export type Action =
  | ReturnType<typeof getChatsAction>
  | ReturnType<typeof changeCurrentChatAction>
  | ReturnType<typeof deleteChatAction>
  | ReturnType<typeof createNewChatAction>
  | ReturnType<typeof typeMessageAction>
  | ReturnType<typeof sendMessageAction>
  | ReturnType<typeof editMessageAction>
  | ReturnType<typeof deleteMessageAction>;
