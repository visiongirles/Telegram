import { useState } from 'react';
import { getCurrentYear } from '../utils/getCurrentYear';
import { useAppDispatch } from '../hooks';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const reqistrationInfo = {
      login: login,
      password: password,
    };
    // dispatch(fetchAuthentication(authenticationInfo)); // TODO: дописать fetch

    // отправка запроса на сервер login и password
  }

  function handleChangeLogin(event: React.ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value);
  }
  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  function handleClick() {
    <Link to='/login' />;
  }

  return (
    <main className='form-signin'>
      <h1>REGISTER</h1>
      <form className='flex col' onSubmit={handleSubmit}>
        <button>
          <Link to='/login'>Login</Link>
        </button>
        <button disabled={true}>Registration</button>
        <div className='flex col form-floating'>
          <label htmlFor='floatingInput'>Login</label>
          <input
            onChange={handleChangeLogin}
            type='text'
            className='form-control'
            id='floatingInput'
            value={login}
          />
        </div>
        <div className='flex col form-floating'>
          <label htmlFor='floatingPassword'>Password</label>
          <input
            onChange={handleChangePassword}
            type='password'
            className='form-control'
            id='floatingPassword'
            value={password}
          />
        </div>

        <div className=''>
          <input
            className='form-check-input'
            type='checkbox'
            value='remember-me'
            id='flexCheckDefault'
          />
          <label className='form-check-label' htmlFor='flexCheckDefault'>
            Remember me
          </label>
        </div>
        <button className='login-submit-button' type='submit'>
          Sign in
        </button>
        <p className=''>&copy; Duckate {getCurrentYear()}</p>
      </form>
    </main>
  );
}
