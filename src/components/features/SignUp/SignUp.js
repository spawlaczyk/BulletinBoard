import { Form, Button } from 'react-bootstrap';
import { addUser } from '../../../redux/usersRedux';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const SignUp = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate('/');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addUser({login, password, phone}));
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>User email</Form.Label>
        <Form.Control type='email' placeholder='Enter email' required onChange={e => setLogin(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control type='password' placeholder='Enter password' required onChange={e => setPassword(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Phone number</Form.Label>
        <Form.Control type='number' placeholder='Enter phone number' onChange={e => setPhone(e.target.value)} />
      </Form.Group>
      <Button type='submit' variant='success'>Sign up</Button>
    </Form>
  );
};

export default SignUp;