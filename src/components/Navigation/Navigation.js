import { useAuth } from 'hooks';
import PAGE_NAMES from 'router/paths';
import { NavLinkStyled, NavStyled } from './Navigation.styled';

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <NavStyled>
      <NavLinkStyled to={PAGE_NAMES.homepage}>Home</NavLinkStyled>
      {isLoggedIn && (
        <NavLinkStyled to={PAGE_NAMES.contacts}>Contacts</NavLinkStyled>
      )}
    </NavStyled>
  );
};

export default Navigation;
