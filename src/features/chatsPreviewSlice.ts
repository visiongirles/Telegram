// import { ChatPreview } from '../interfaces';
import { PayloadAction } from 'redux';
import { Message } from '../interfaces';

interface ChatPreview {
  chatId: number;
  photo: string;
  lastMessage: Message;
  draftMessage?: string;
}

const initialChatsPreview: ChatPreview = {
  chatId: 0,
  photo:
    'https://i.pinimg.com/originals/2e/60/07/2e60079f1e36b5c7681f0996a79e8af4.jpg', // picture of loading
  lastMessage: {
    id: 1,
    date: Date.now(),
    author: 'placeholder for author',
    hasRead: false,
    isMine: false,
    content: 'placeholder for content',
  },
};

export const chatsPreviewSlice = createSlice({
  name: 'chatsPreview',
  // `createSlice` will infer the state type from the `initialState` argument
  initialChatPreview: initialChatsPreview,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    getChatsPreview: (state, action: PayloadAction<number>) => {
      state = action.payload;
    },
  },
});

function createSlice(arg0: {
  name: string;
  // `createSlice` will infer the state type from the `initialState` argument
  initialState: any;
  reducers: {
    increment: (state: any) => void;
    decrement: (state: any) => void;
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state: any, action: PayloadAction<number>) => void;
  };
}) {
  throw new Error('Function not implemented.');
}
