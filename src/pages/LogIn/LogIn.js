import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

const LogIn = () => {
  const dispatch = useDispatch();

  const handleLogIn = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form onSubmit={handleLogIn} autoComplete="off">
      <label>
        Email
        <input type="email" name="email"></input>
      </label>
      <label>
        Password
        <input type="password" name="password"></input>
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};

export default LogIn;
