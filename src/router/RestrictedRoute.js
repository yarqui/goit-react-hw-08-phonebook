import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';
import PAGE_NAMES from './paths';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

export const RestrictedRoute = ({
  component: Component,
  redirectTo = PAGE_NAMES.homepage,
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};
