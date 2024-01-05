import SideNavBar from './SideNavBar';
import ChatBox from './ChatBox';
import { useMessangerStateContext } from './StateProvider';

function Main() {
  const state = useMessangerStateContext();
  const chatIsChosen = !!state.currentChat;

  return (
    <div className='main-container'>
      <div className='left'>
        <SideNavBar
        // conversations={userHistory.conversations}
        // onConversationClick={onConversationClick}
        />
      </div>
      {/* <div className='right'>{chatIsChosen && <ChatBox />}</div> */}
    </div>
  );
}

export default Main;
