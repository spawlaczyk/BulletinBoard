import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams, Navigate } from "react-router-dom";
import { editPost, getPostById } from "../../../redux/postsRedux";
import PostForm from "../PostForm/PostForm";
import NotFound from "../../pages/NotFound/NotFound";

const EditPostForm = ({...userData}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate('/');
  const { id } = useParams();
  const postData = useSelector(state => getPostById(state, id));

  const handleSubmit = post => {
    dispatch(editPost({...post, id}));
    navigate('/');
  };
  
  if(!userData.login) return <NotFound />
  else if(!postData) return <Navigate to='/' />
  else if(userData.login !== postData.author && !userData.userAdmin) return <NotFound />
    return (
      <PostForm
      actionText='Save changes'
      action={handleSubmit}
      author={postData.author}
      title={postData.title}
      text={postData.text}
      created={postData.created}
      updated={postData.updated}
      status={postData.status}
      price={postData.price}
      phone={postData.phone}
      location={postData.location}
      type='Edit'
      />
    )
};

export default EditPostForm;