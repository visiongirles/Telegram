import { Point2D } from '../interfaces/interface';

interface MessageMenuButtonProps {
  messageId: number;
  coords: Point2D;
}

export function MessageMenuButton({
  messageId,
  coords,
}: MessageMenuButtonProps) {
  return (
    <div
      className='messageMenuButtonContainer'
      style={{ top: coords.y, left: coords.x }}
    >
      <div className='button-edit'>Edit</div>
      <div className='button-delete'>Delete</div>
    </div>
  );
}
