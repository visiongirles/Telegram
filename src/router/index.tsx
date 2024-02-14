import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import ErrorPage from '../components/ErrorPage';
import LoginPage from '../components/LoginPage';
import RegistrationPage from '../components/RegistrationPage';
import TelegramPage from '../components/TelegramPage';

export const router = createBrowserRouter([
  {
    path: '*',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'login',
        element: <LoginPage />,
      },
      {
        path: 'register',
        element: <RegistrationPage />,
      },
      {
        path: 'telegram',
        element: <TelegramPage />,
      },
    ],
  },
]);
