import { useState } from 'react';
import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';

function Main() {
  const [chatIsChosen, setChatIsChosen] = useState(true);

  return (
    <div className='main-container flex'>
      <div className='left'>
        <SideNavBar />
      </div>
      <div className='right'>{chatIsChosen ? <ChatBox /> : <></>}</div>
    </div>
  );
}

export default Main;
