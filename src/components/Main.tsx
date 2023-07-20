import { useState } from 'react';
import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';

function Main() {
  const [chatIsChosen, setChatIsChosen] = useState(true);

  return (
    <div className='main'>
      <SideNavBar />
      {chatIsChosen ? <ChatBox /> : <></>}
    </div>
  );
}

export default Main;
