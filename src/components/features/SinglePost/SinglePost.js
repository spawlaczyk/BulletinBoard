import { useDispatch, useSelector } from "react-redux";
import { useParams, NavLink, useNavigate, Navigate } from 'react-router-dom';
import { getPostById, removePost } from "../../../redux/postsRedux";
import { Row, Card, Col, Button } from "react-bootstrap";

const SinglePost = ({...userData}) => {
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemove = () => {
    dispatch(removePost(id));
    navigate('/');
  };

  if(!postData) return <Navigate to='/' />
  return (
    <Row className='d-flex justify-content-evenly'>
      <Col className='col-md-6 border border-success rounded p-4'>
        <Card className='border-0'>
          <Card.Img src='/images/photos/test.jpg' />
          <Card.Body className='px-0'>
            <Card.Title style={{ fontSize: '40px' }}>
              {postData.title}
            </Card.Title>
            <Card.Text>
              {postData.location}
            </Card.Text>
            <b>Description: </b>
            <Card.Text>
              {postData.text}
            </Card.Text>
            <b>Created: </b>
            <Card.Text>
              {postData.created}
            </Card.Text>
            <b>Updated: </b>
            <Card.Text>
              {postData.updated}
            </Card.Text>
          </Card.Body>
        <div className='me-auto d-flex align-items-center'>
          <Button as={NavLink} to={`/post/edit/${id}`} variant='success' className='w-10'>Edit</Button>
          {userData.login === postData.author || userData.userAdmin ? <Button variant='danger' className='ms-2' onClick={handleRemove}>Remove</Button> : ''}
        </div>
        </Card>
      </Col>
      <Col className='col-md-3 border border-success rounded p-4 d-flex justify-content-center' style={{ height: '20rem' }}>
        <Card className='border-0 text-center' style={{ width: '15rem' }}>
          <Card.Img src='/images/photos/test.jpg' alt='avatar' style={{ borderRadius: '50%', width: '8rem', height: '8rem', margin: '0 auto' }} />
          <Card.Body>
            <Card.Text>
              {postData.author}
            </Card.Text>
            <b>Phone number: </b>
            <Card.Text>
              {postData.phone}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default SinglePost;