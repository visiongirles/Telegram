function MessageSendBox() {
  return (
    <div className='sendbox'>
      <form action=''>
        <label htmlFor='message'>Kate says:</label>
        <input type='text' name='message' id='message' />
        <input type='submit' value='Submit' />
        <input type='reset' value='Reset' />
      </form>
    </div>
  );
}

export default MessageSendBox;
