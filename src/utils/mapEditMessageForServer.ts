export function mapEditMessageForServer(
  text: string,
  messageId: number,
  chatId: number
) {
  const mappedMessage = {
    chat_id: chatId,
    message_id: messageId,
    txt: text,
  };
  return mappedMessage;
}
