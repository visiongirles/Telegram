import { ForwardedRef, forwardRef } from 'react';
import { Point2D, DeletedMessage } from '../interfaces';
import { useAppDispatch } from '../hooks';
import { deleteMessage } from '../features';

interface MessageMenuButtonProps {
  chatId: number,
  messageId: number;
  coords: Point2D;
  onClick: () => void;
}

export const MessageMenuButton = forwardRef(
  (
    { chatId, messageId, coords, onClick }: MessageMenuButtonProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const dispatch = useAppDispatch();

    function handleDeleteMessage() {
      dispatch(deleteMessage({chatId, messageId}));
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
