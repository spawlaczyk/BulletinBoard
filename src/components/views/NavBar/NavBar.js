import { Navbar, Nav, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const NavBar = ({logout, ...userData}) => {
  return (
    <Navbar expand='lg' bg='success' variant='dark' className='px-3 mt-4 mb-4 rounded'>
      <Navbar.Brand className='me-auto'>
        Bulletin Board
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='ms-auto'>
          <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
          <Nav.Link as={NavLink} to='/post/add'>Add post</Nav.Link>
          {!userData.login ? <Nav.Link as={NavLink} to='/signin'>Sign in</Nav.Link> : ''}
          {!userData.login ? <Nav.Link as={NavLink} to='/signup'>Sign up</Nav.Link> : ''}
          {userData.login ? <Button onClick={logout} variant='danger'>Log out</Button> : ''}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
};

export default NavBar;