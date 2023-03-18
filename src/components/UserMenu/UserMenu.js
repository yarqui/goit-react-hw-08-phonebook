import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserMenuButton, UserMenuWrap } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrap>
      <p>Welcome {user.name}</p>
      <UserMenuButton
        type="button"
        onClick={() => {
          dispatch(logOut());
        }}
      >
        Log Out
      </UserMenuButton>
    </UserMenuWrap>
  );
};
export default UserMenu;
