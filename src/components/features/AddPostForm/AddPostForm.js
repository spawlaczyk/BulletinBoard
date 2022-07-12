import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addPost } from "../../../redux/postsRedux";
import NotFound from "../../pages/NotFound/NotFound";
import PostForm from "../PostForm/PostForm";

const AddPostForm = ({...userData}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate('/');

  const handleSubmit = post => {
    dispatch(addPost(post));
    navigate('/');
  };

  if(!userData.login) return <NotFound />
  return <PostForm author={userData.login} phone={userData.phone} action={handleSubmit} actionText='Add' type='Add' />
};

export default AddPostForm;