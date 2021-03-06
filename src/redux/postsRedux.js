import { nanoid } from "nanoid";

// selectors
export const getAllPosts = state => state.posts;
export const getPostById = ({ posts }, postId) => posts.find(post => post.id === postId);

// actions
const createActionName = actionName => `app/posts/${actionName}`;
export const ADD_POST = createActionName('ADD_POST');
export const EDIT_POST = createActionName('EDIT_POST');
export const REMOVE_POST = createActionName('REMOVE_POST');
// action creators
export const addPost = payload => ({type: ADD_POST, payload});
export const editPost = payload => ({type: EDIT_POST, payload});
export const removePost = payload => ({type: REMOVE_POST, payload});

const postsReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_POST:
      return [...statePart, { ...action.payload, id: nanoid() }];
    case EDIT_POST:
      return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    case REMOVE_POST:
      return statePart.filter(post => post.id !== action.payload);
    default:
      return statePart;
  };
};

export default postsReducer;