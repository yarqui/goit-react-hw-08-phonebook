import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';

const Register = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input type="text" name="name"></input>
      </label>
      <label>
        Email
        <input type="email" name="email"></input>
      </label>
      <label>
        Password
        <input type="password" name="password"></input>
      </label>
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default Register;
