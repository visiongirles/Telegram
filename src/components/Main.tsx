import { useState } from 'react';
import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';
import { userHistory } from '../serverResponse/ServerResponse';
import { Conversation } from '../interfaces/interface';

function Main() {
  const [chatIsChosen, setChatIsChosen] = useState(false);
  const [choosenChat, setChoosenChat] = useState({
    interlocutorName: '',
    interlocutorProfilePicture: '',
    messages: [],
  });

  function onConversationClick(index: number) {
    setChatIsChosen(true);
    setChoosenChat(userHistory.conversations[index]);
  }

  return (
    <div className='main-container'>
      <div className='left'>
        <SideNavBar
          conversations={userHistory.conversations}
          onConversationClick={onConversationClick}
        />
      </div>
      <div className='right'>
        {chatIsChosen ? <ChatBox conversation={choosenChat} /> : <></>}
      </div>
    </div>
  );
}

export default Main;
