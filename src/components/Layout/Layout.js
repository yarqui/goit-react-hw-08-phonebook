import AppBar from 'components/AppBar';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <main>
      <AppBar></AppBar>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet></Outlet>
      </Suspense>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};
export default Layout;
