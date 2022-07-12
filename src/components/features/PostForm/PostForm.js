import { useState } from "react";
import { Form, Button } from 'react-bootstrap';
import moment from "moment";
import PropTypes from 'prop-types'

const PostForm = ({type, action, actionText, ...props}) => {
  const author = props.author;
  const [title, setTitle] = useState(props.title || '');
  const [status, setStatus] = useState(props.status || '');
  const [text, setText] = useState(props.text || '');
  const phone = props.phone;
  const [price, setPrice] = useState(props.price || '');
  const [location, setLocation] = useState(props.location || '');
  const created = props.created || moment().format('DD/MM/YYYY');
  const updateDate = () => type === 'Edit' ? moment().format('DD/MM/YYYY') : undefined;
  const updated = updateDate();
  
  const handleSubmit = e => {
    e.preventDefault();
    action({ author, title, created, updated, text, status, price, phone, location });
  };
  
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className='mb-3'>
        <Form.Label>Title</Form.Label>
        <Form.Control type='text' placeholder='Enter title' required value={title} minLength='10' maxLength='20' onChange={e => setTitle(e.target.value)} />
      </Form.Group>
      
      <Form.Group className='mb-3'>
        <Form.Label>Description</Form.Label>
        <Form.Control type='text' placeholder='Enter description' required value={text} minLength='20' maxLength='100' onChange={e => setText(e.target.value)} />
      </Form.Group>
      
      <Form.Group className='mb-3'>
        <Form.Label>Price</Form.Label>
        <Form.Control type='number' placeholder='Enter price' value={price} onChange={e => setPrice(e.target.value)} />
      </Form.Group>

      <Form.Group className='mb-3'>
        <Form.Label>Status</Form.Label>
        <Form.Select value={status} onChange={e => setStatus(e.target.value)}>
          <option>Published</option>
          <option>Closed</option>
          <option>Draft</option>
        </Form.Select>
      </Form.Group>
      
      <Form.Group className='mb-3'>
        <Form.Label>Location</Form.Label>
        <Form.Control type='text' placeholder="Enter your location" value={location} onChange={e => setLocation(e.target.value)} />
      </Form.Group>
      
      <Button type='submit' variant='success'>{actionText}</Button>
    </Form>
  );
};

PostForm.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  created: PropTypes.string,
  updated: PropTypes.string,
  status: PropTypes.string,
  price: PropTypes.number,
  phone: PropTypes.string,
  location: PropTypes.string,
  actionText: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
};

export default PostForm;