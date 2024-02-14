import Main from '../components/Main';
import TelegramPage from '../components/TelegramPage';
import RegistrationPage from '../components/RegistrationPage';
import LoginPage from '../components/LoginPage';

export const nav = [
  { path: '/', name: 'Main', element: <Main />, isPrivate: false },
  {
    path: '/login',
    name: 'LoginPage',
    element: <LoginPage />,
    isPrivate: false,
  },
  {
    path: '/register',
    name: 'RegistrationPage',
    element: <RegistrationPage />,
    isPrivate: false,
  },
  {
    path: '/telegram',
    name: 'TelegramPage',
    element: <TelegramPage />,
    isPrivate: true,
  },
];
