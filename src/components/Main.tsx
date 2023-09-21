import { useState } from 'react';
import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';
import { userHistory } from '../serverResponse/ServerResponse';

function Main() {
  const [chatIsChosen, setChatIsChosen] = useState(true);

  return (
    <div className='main-container'>
      <div className='left'>
        <SideNavBar conversations={userHistory.conversations} />
      </div>
      <div className='right'>
        {chatIsChosen ? (
          <ChatBox conversation={userHistory.conversations[0]} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Main;
