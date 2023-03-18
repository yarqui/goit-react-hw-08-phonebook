import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavStyled = styled.nav`
  padding: 20px;
  display: flex;
  gap: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #000000;
  text-decoration: none;
  padding: 10px;
  font-weight: 700;

  &.active {
    border-bottom: 2px solid #a5f7ff;
  }
`;
