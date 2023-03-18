import AppBar from 'components/AppBar';
import PropTypes from 'prop-types';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './Layout.styled';

const Layout = () => {
  return (
    <main>
      <Container>
        <AppBar></AppBar>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet></Outlet>
        </Suspense>
      </Container>
    </main>
  );
};

Layout.propTypes = {
  children: PropTypes.any,
};
export default Layout;
