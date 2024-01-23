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
export const changeCurrentChatAction = (updatedChatId: number) =>
  ({
    type: MessangerAction.ChangeCurrentChat,
    updatedChatId,
  } as const);

export const deleteChatAction = (chatId: number) =>
  ({
    type: MessangerAction.DeleteChat,
    chatId,
  } as const);

export const getChatsAction = (chatsPreview: ChatPreview[]) =>
  ({ type: MessangerAction.GetChatsPreview, chatsPreview } as const);

export const createNewChatAction = () =>
  ({
    type: MessangerAction.CreateNewChat,
  } as const);

//  Messages related actions
export const typeMessageAction = (draftMessage: string) =>
  ({
    type: MessangerAction.TypeMessage,
    draftMessage,
  } as const);

export const sendMessageAction = (message: Message) =>
  ({
    type: MessangerAction.SendMessage,
    message,
  } as const);

export const editMessageAction = (message: Message) =>
  ({
    type: MessangerAction.EditMessage,
    message,
  } as const);

export const deleteMessageAction = (messageId: number) =>
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
