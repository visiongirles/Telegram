import { useMessangerDispatchContext } from '../context/dispatchContext';
import { Point2D } from '../interfaces/interface';
import { MessangerAction } from '../store/actions';

interface MessageMenuButtonProps {
  messageId: number;
  coords: Point2D;
}

export function MessageMenuButton({
  messageId,
  coords,
}: MessageMenuButtonProps) {
  const dispatch = useMessangerDispatchContext();

  function handleDeleteMessage(event: React.MouseEvent) {
    console.log(event);
    dispatch({ type: MessangerAction.DeleteMessage, messageId: messageId });
  }

  // function handleEditMessage() {
  //   dispatch({ type: MessangerAction.EditMessage, message: {} });
  // }
  console.log('Dratuti');
  return (
    <div
      className='messageMenuButtonContainer'
      style={{ top: coords.y, left: coords.x }}
    >
      <div className='button-edit'>Edit</div>
      <div
        className='button-delete'
        onClick={(event) => handleDeleteMessage(event)}
      >
        Delete
      </div>
    </div>
  );
}
