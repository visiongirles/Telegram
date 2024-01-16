import { ForwardedRef, forwardRef } from 'react';
import { useMessangerDispatchContext } from '../context/dispatchContext';
import { Point2D } from '../interfaces/interface';
import { MessangerAction } from '../store/actions';

interface MessageMenuButtonProps {
  messageId: number;
  coords: Point2D;
  onClick: () => void;
}

export const MessageMenuButton = forwardRef(
  (
    { messageId, coords, onClick }: MessageMenuButtonProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const dispatch = useMessangerDispatchContext();

    function handleDeleteMessage() {
      dispatch({ type: MessangerAction.DeleteMessage, messageId: messageId });
    }

    return (
      <div
        ref={ref}
        className='messageMenuButtonContainer'
        style={{ top: coords.y, left: coords.x }}
        onClick={onClick}
      >
        <div className='button-edit'>Edit</div>
        <div className='button-delete' onClick={handleDeleteMessage}>
          Delete
        </div>
      </div>
    );
  }
);
