import { useState } from 'react';
import { getCurrentYear } from '../utils/getCurrentYear';
import { fetchAuthentication } from '../features/authenticationSlice';
import { useAppDispatch } from '../hooks';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const authenticationInfo = {
      login: login,
      password: password,
    };
    dispatch(fetchAuthentication(authenticationInfo));

    // отправка запроса на сервер login и password
  }

  function handleChangeLogin(event: React.ChangeEvent<HTMLInputElement>) {
    setLogin(event.target.value);
  }
  function handleChangePassword(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value);
  }

  return (
    <main className='form-signin'>
      <h1>SIGN UP</h1>
      <form className='flex col' onSubmit={handleSubmit}>
        <button disabled={true}>Sign in</button>
        <button>
          {' '}
          <Link to='/register'>Registration</Link>
        </button>
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

// <div className="flex col">
//     <form onSubmit={handleSubmit} >
//         <label>
//         Login:
//             <input type="text" name="login" onChange={handleChangeLogin} value={login}/>
//         </label>
//         <label>
//         Password:
//             <input type="text" name="password" onChange={handleChangePassword}  value={password}/>
//         </label>
//         <input type="submit" value="Submit" />
//         </form>
// </div>
