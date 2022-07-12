import { Row, Card, Col, Button } from "react-bootstrap";
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";
import { getAllPosts } from "../../../redux/postsRedux";

const RenderPosts = () => {
  const posts = useSelector(getAllPosts);

  return (
    <Row xs={1} md={2} className='g-4 mt-2'>
      {posts.map(post =>
        <Col key={post.id}>
          <Card key={post.id} border="success" className='p-3'>
            <Card.Img variant='top' src='/images/photos/test.jpg' className='mb-3 rounded' />
            <div className='d-flex'>
              <div>
                <Card.Title className='mb-3'>
                  {post.title}
                </Card.Title>
                <Card.Text className='mb-3'>
                  <b>Location: </b><span>{post.location}</span>
                </Card.Text>
              </div>
              <div className='ms-auto d-flex align-items-center'>
                <Button size='md' variant='success' as={NavLink} to={'/post/' + post.id}>
                  Show details...
                </Button>
              </div>
            </div>
          </Card>
        </Col>)}
    </Row>
  );
};

export default RenderPosts;