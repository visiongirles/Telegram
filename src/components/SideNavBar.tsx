import TopNavBar from './TopNavBar';
import SideNavBarElement from './SideNavBarElement';
import { MessangerAction } from '../store/actions';
import { useMessangerStateContext } from '../context/stateContext';
import { useMessangerDispatchContext } from '../context/dispatchContext';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Messanger } from '../interfaces/interface';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

function SideNavBar() {
  const state = useAppSelector((state) => state.messanger);

  // const state = useSelector<RootState>((state) => state.messanger);
  // const dispatch = useMessangerDispatchContext();
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();

  const chatsPreview = state.chatsPreview;

  function onConversationClick(chatId: number) {
    dispatch({
      type: MessangerAction.ChangeCurrentChat,
      updatedChatId: chatId,
    });
  }

  return (
    <>
      <TopNavBar />
      <div className='sidebar'>
        {chatsPreview.map((chatPreview) => (
          <SideNavBarElement
            key={chatPreview.chatId}
            conversation={chatPreview}
            onConversationClick={() => onConversationClick(chatPreview.chatId)}
            isSelected={chatPreview.chatId === state.currentChat?.chatId}
          />
        ))}
      </div>
    </>
  );
}

export default SideNavBar;
