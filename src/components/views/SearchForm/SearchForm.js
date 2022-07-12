import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';

const SearchForm = () => {
  const [searchPhrase, setSearchPhrase] = useState('');
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();
    navigate(`/search/${searchPhrase}`);
  };

  return (
    <Form onSubmit={handleSubmit} className='d-flex justify-content-center mb-2'>
      <Form.Control placeholder='Search for announcements...' className='me-3 w-50' onChange={e => setSearchPhrase(e.target.value)} />
      <Button variant='success' type='submit'>Search</Button>
    </Form>
  );
};

export default SearchForm;