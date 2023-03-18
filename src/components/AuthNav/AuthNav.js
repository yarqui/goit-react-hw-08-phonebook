import { NavLinkStyled } from 'components/Navigation/Navigation.styled';
import { useAuth } from 'hooks';
import { AuthMenuWrap } from './AuthNav.styled';
const AuthNav = () => {
  const { isRefreshing } = useAuth();

  return (
    !isRefreshing && (
      <AuthMenuWrap>
        <NavLinkStyled to="/register">Register</NavLinkStyled>
        <NavLinkStyled to="/login">Log In</NavLinkStyled>
      </AuthMenuWrap>
    )
  );
};

export default AuthNav;
