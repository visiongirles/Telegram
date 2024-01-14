// webSocketConnection - a main element which act from client side to ensure connection with server
export const webSocketConnection = new WebSocket(
  'ws://localhost:3000/websockets'
);

// when socket connection is open
webSocketConnection.onopen = function (event) {
  // function which is fired with certain interval {timeToSend} ms
  // TODO: incorporate sendMessage const (below in file)
  const timeToSend = 2000;

  setInterval(() => {
    webSocketConnection.send('Hello world!');
  }, timeToSend);
  console.log('Соединение установлено.');
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

// debouncing
const webSocketSend = function (data) {
  // readyState - true, если есть подключение
  if (!webSocketConnection.readyState) {
    setTimeout(function () {
      webSocketSend(data);
    }, 100);
  } else {
    webSocketConnection.send(data);
  }
};

// manage sending of messages
const sendMessage = (message) =>
  webSocketConnection.send(
    // TODO: align with Messanger Action
    JSON.stringify({ event: 'chat-message', payload: { userName, message } })
  );
