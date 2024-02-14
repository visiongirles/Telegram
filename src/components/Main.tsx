import TelegramPage from './TelegramPage';
import LoginPage from './LoginPage';
import { useAppDispatch, useAppSelector } from '../hooks/index.js';
import { useEffect } from 'react';
import RegistrationPage from './RegistrationPage.js';
import { fetchAuthenticationByToken } from '../features/authenticationSlice.js';
import { Route, Routes } from 'react-router-dom';
import ErrorPage from './ErrorPage.js';
export default function Main() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      // LoginPage
      console.log('Нет токена в localStorage');
    } else {
      dispatch(fetchAuthenticationByToken(accessToken));
    }
  }, []);

  const isAuth = useAppSelector((store) => store.authentication.isAuthorized);
  // return <> {isAuth ? <TelegramPage /> : <LoginPage />}</>;
  if (!isAuth) {
    return (
      <Routes>
        <Route path='*' Component={LoginPage} errorElement={<ErrorPage />} />
        <Route path='/login' Component={LoginPage} />
        <Route path='/register' Component={RegistrationPage} />
      </Routes>
    );
  } else {
    return (
      <Routes>
        <Route path='/' Component={TelegramPage} errorElement={<ErrorPage />} />
      </Routes>
    );
  }
}
