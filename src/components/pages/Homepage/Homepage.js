import RenderPosts from "../../features/RenderPosts/RenderPosts";
import SearchForm from "../../views/SearchForm/SearchForm";
import Banner from "../../views/Banner/Banner";

const Homepage = ({...userData}) => {
  return (
    <>
      {userData.login ? <Banner {...userData} /> : ''}
      <SearchForm />
      <RenderPosts />
    </>
  );
};

export default Homepage;