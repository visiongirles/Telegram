interface MessageBoxProps {
  date: Date;
  sender: string;
  hasRead: boolean;
  content: string;
}

function MessageBox({ date, sender, hasRead, content }: MessageBoxProps) {
  return (
    <>
      <div>{date.toDateString()}</div>
      <div>От {sender}</div>
      <div>{hasRead}</div>
      <div>{content}</div>
    </>
  );
}

export default MessageBox;
