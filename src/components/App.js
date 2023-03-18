import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout';
// import { fetchContacts } from 'redux/operations';
import PAGE_NAMES from 'router/paths';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/auth/operations';
import { RestrictedRoute } from 'router/RestrictedRoute';
import { PrivateRoute } from 'router/PrivateRoute';
import { useAuth } from 'hooks';

const Home = lazy(() => import('../pages/Home'));
const LogIn = lazy(() => import('../pages/LogIn'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing content...</b>
  ) : (
    <>
      <Routes>
        <Route exact path={PAGE_NAMES.homepage} element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path={PAGE_NAMES.register}
            element={
              <RestrictedRoute
                component={<Register />}
                redirectTo={PAGE_NAMES.contacts}
              />
            }
          />
          <Route
            path={PAGE_NAMES.login}
            element={
              <RestrictedRoute
                component={<LogIn />}
                redirectTo={PAGE_NAMES.contacts}
              />
            }
          />
          <Route
            path={PAGE_NAMES.contacts}
            element={
              <PrivateRoute
                component={<Contacts />}
                redirectTo={PAGE_NAMES.login}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        theme="dark"
        position="top-center"
        autoClose="1500"
      ></ToastContainer>
    </>
  );
};

export default App;
