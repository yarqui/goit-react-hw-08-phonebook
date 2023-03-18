import AuthNav from 'components/AuthNav';
import Navigation from 'components/Navigation';
import UserMenu from 'components/UserMenu';
import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Navigation></Navigation>

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
