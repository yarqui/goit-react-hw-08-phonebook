import {
  Form,
  InputField,
  InputLabel,
} from 'components/ContactForm/ContactForm.styled';
import { Button } from 'pages/Register/Register.styled';
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
    <Form onSubmit={handleLogIn} autoComplete="off">
      <InputLabel htmlFor="email">Email</InputLabel>

      <InputField type="email" name="email" id="email"></InputField>

      <InputLabel htmlFor="password">Password</InputLabel>

      <InputField
        type="password"
        name="password"
        id="password"
        autoComplete="on"
      ></InputField>

      <Button type="submit">Log In</Button>
    </Form>
  );
};

export default LogIn;
