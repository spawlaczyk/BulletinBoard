import { nanoid } from "nanoid";

// selectors
export const getAllUsers = state => state.users;
// actions
const createActionName = actionName => `app/posts/${actionName}`;
export const ADD_USER = createActionName('ADD_USER');

// action creators
export const addUser = payload => ({type: ADD_USER, payload});

const usersReducer = (statePart = [], action) => {
  switch(action.type) {
    case ADD_USER:
      return [...statePart, { ...action.payload, id: nanoid() }];
    default:
      return statePart;
  };
};

export default usersReducer;