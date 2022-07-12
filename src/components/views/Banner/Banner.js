import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Banner = ({...userData}) => {
  return (
    <div className='my-4 p-4 rounded' style={{ background: 'rgb(25,135,84)' }}>
      <div className='d-flex justify-content-center me-auto'>
        <h3 className='m-0 me-auto text-center' style={{ color: 'white' }}>{`Hello ${userData.login}!`}</h3>
        <Button as={NavLink} to='/post/add' variant='success'>Add new announcement</Button>
      </div>
    </div>
  );
};

export default Banner;