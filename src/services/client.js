// webSocketConnection - a main element which act from client side to ensure connection with server
export let webSocketConnection;

// Alternativaly, https://controlc.com/020ee21d
export function createWebSocket(url) {
  webSocketConnection = new WebSocket(url);

  // when socket connection is open
  webSocketConnection.onopen = function (event) {
    console.log('Соединение установлено.');

    const token = localStorage.getItem('accessToken');
    const requestObjectToken = { type: 'set-token', token: token };
    const requestStringToken = JSON.stringify(requestObjectToken);
    webSocketSend(requestStringToken);

    const requestObject = { type: 'get-chats-preview' };
    const requestString = JSON.stringify(requestObject);
    webSocketSend(requestString);
  };

  // when socket connection is closed
  webSocketConnection.onclose = function (event) {
    if (event.wasClean) {
      console.log('Соединение закрыто чисто');
    } else {
      console.log('Обрыв соединения'); // например, "убит" процесс сервера
    }
    console.log('Код: ' + event.code + ' причина: ' + event.reason);
  };

  // when socket connection has error
  webSocketConnection.onerror = function (error) {
    console.log('Ошибка ' + error.message);
  };
}

// debouncing
export const webSocketSend = function (data) {
  // timeout to repeat in case of websocket is not ready
  const timeout = 1000;

  // readyState - true, если есть подключение
  if (!webSocketConnection.readyState) {
    setTimeout(function () {
      webSocketSend(data);
    }, timeout);
  } else {
    webSocketConnection.send(data);
  }
};
