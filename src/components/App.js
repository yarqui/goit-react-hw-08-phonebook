import { lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout';
// import { fetchContacts } from 'redux/operations';
import PAGE_NAMES from 'router/paths';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/auth/operations';

const Home = lazy(() => import('../pages/Home'));
const LogIn = lazy(() => import('../pages/LogIn'));
const Register = lazy(() => import('../pages/Register'));
const Contacts = lazy(() => import('../pages/Contacts'));
const NotFound = lazy(() => import('../pages/NotFound'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route exact path={PAGE_NAMES.homepage} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={PAGE_NAMES.login} element={<LogIn />} />
          <Route path={PAGE_NAMES.register} element={<Register />} />
          <Route path={PAGE_NAMES.contacts} element={<Contacts />} />
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
