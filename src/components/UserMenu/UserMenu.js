import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = e => {
    e.preventDefault();

    dispatch(logOut());
  };

  return (
    <div>
      <p>Welcome userName</p>
      <button type="button" onClick={handleLogOut}>
        Log Out
      </button>
    </div>
  );
};
export default UserMenu;
