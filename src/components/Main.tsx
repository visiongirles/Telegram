import TelegramPage from './TelegramPage';
import LoginPage from './LoginPage';

import { useAppSelector } from '../hooks/index.js';

export default function Main() {
  const isAuth = useAppSelector((store) => store.authentication.isAuthorized);
  return <> {isAuth ? <TelegramPage /> : <LoginPage />}</>;
}
