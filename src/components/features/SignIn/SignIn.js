import { useSelector } from "react-redux";
import { getAllUsers } from "../../../redux/usersRedux";
import { Container, Form, Button } from 'react-bootstrap';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const SignIn = (props) => {
  const users = useSelector(getAllUsers);
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState();

  const handleSubmit = e => {
    e.preventDefault();
    const userData = users.find(user => user.login === userLogin);
    props.func(userData);
    navigate('/');
  };

  return (
    <Container className='d-flex justify-content-center'>
      <Form onSubmit={handleSubmit}>
        <Form.Select className='mb-3' onChange={e => setUserLogin(e.target.value)}>
          <option key='blankChoice' hidden value>Select account</option>
          {users.map(user => (
            <option key={user.id}>{user.login}</option>
          ))}
        </Form.Select>
        <Button type='submit' variant='success'>Sign in</Button>
      </Form>
    </Container>
  );
};

export default SignIn;