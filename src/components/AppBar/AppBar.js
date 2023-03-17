import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';

const AppBar = () => {
  return (
    <header>
      <Navigation></Navigation>
      <UserMenu></UserMenu>
      <AuthNav></AuthNav>
    </header>
  );
};

export default AppBar;
