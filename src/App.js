import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Homepage from "./components/pages/Homepage/Homepage";
import NotFound from "./components/pages/NotFound/NotFound";
import SinglePost from "./components/features/SinglePost/SinglePost";
import EditPostForm from "./components/features/EditPostForm/EditPostForm";
import AddPostForm from "./components/features/AddPostForm/AddPostForm";
import SignUp from "./components/features/SignUp/SignUp";
import SignIn from "./components/features/SignIn/SignIn";
import MainLayout from "./components/views/MainLayout/MainLayout";
import { useState } from "react";
import FilteredPosts from "./components/features/FilteredPosts/FilteredPosts";

const App = () => {
  const [userData, setUserData] = useState();
  
  const isLogged = (data) => {
    setUserData(data);
  };

  const logout = () => {
    setUserData(undefined);
  };

  return (
    <Container>
      <MainLayout func={logout} {...userData}>
        <Routes>
          <Route path='/' element={<Homepage {...userData} />} />
          <Route path='/post/:id' element={<SinglePost {...userData} />} />
          <Route path='/post/edit/:id' element={<EditPostForm {...userData} />} />
          <Route path='/post/add' element={<AddPostForm {...userData} />} />
          <Route path='/search/:searchPhrase' element={<FilteredPosts />} />
          <Route path='/signin' element={<SignIn func={isLogged} />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </MainLayout>
    </Container>
  );
}

export default App;
