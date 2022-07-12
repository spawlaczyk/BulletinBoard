import { createStore, combineReducers } from "redux";
import initialState from "./initialState";
import postsReducer from "./postsRedux";
import usersReducer from "./usersRedux";

const subreducers = {
  posts: postsReducer,
  users: usersReducer
};

const reducer = combineReducers(subreducers);
const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;