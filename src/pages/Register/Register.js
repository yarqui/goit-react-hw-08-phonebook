import {
  Form,
  InputField,
  InputLabel,
} from 'components/ContactForm/ContactForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button } from './Register.styled';

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
    <Form onSubmit={handleSubmit} autoComplete="off">
      <InputLabel htmlFor="name">Name</InputLabel>

      <InputField type="text" name="name" id="name"></InputField>

      <InputLabel htmlFor="email">Email</InputLabel>

      <InputField type="email" name="email" id="email"></InputField>

      <InputLabel htmlFor="password">Password</InputLabel>

      <InputField
        type="password"
        name="password"
        id="password"
        autoComplete="on"
      ></InputField>

      <Button type="submit">Sign Up</Button>
    </Form>
  );
};
export default Register;
