import { nav } from './navigation.jsx';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useAppSelector } from '../hooks/index';

export const RenderRoutes = () => {
  const isAuth = useAppSelector((store) => store.authentication.isAuthorized);

  return (
    <Routes>
      {nav.map((r, i) => {
        if (r.isPrivate && isAuth) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  );
};
