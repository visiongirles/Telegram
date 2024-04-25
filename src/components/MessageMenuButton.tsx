import { ForwardedRef, forwardRef } from 'react';
import { Point2D } from '../interfaces';
import { useAppDispatch } from '../hooks';
import { deleteMessageById } from '../features';

interface MessageMenuButtonProps {
  chatId: number;
  messageId: number;
  coords: Point2D;
  onClick: () => void;
  onEdit: (isEditing: boolean) => void;
}

export const MessageMenuButton = forwardRef(
  (
    { chatId, messageId, coords, onClick, onEdit }: MessageMenuButtonProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const dispatch = useAppDispatch();

    function handleDeleteMessage() {
      dispatch(deleteMessageById({ chatId, messageId }));
    }

    function handleEditMessage() {
      // 1, передать id Message, кот редактируем - InuotBoxMessage
      onEdit(true);
    }

    return (
      <div
        ref={ref}
        className='messageMenuButtonContainer'
        style={{ top: coords.y, left: coords.x }}
        onClick={onClick}
      >
        <div className='button-edit' onClick={handleEditMessage}>
          Edit
        </div>
        <div className='button-delete' onClick={handleDeleteMessage}>
          Delete
        </div>
      </div>
    );
  }
);
