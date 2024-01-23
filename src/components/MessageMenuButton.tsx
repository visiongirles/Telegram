import { ForwardedRef, forwardRef } from 'react';
import { Point2D } from '../interfaces';
import { deleteMessageAction } from '../reducers/actions';
import { useAppDispatch } from '../hooks/hooks';

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
    const dispatch = useAppDispatch();

    function handleDeleteMessage() {
      dispatch(deleteMessageAction(messageId));
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
