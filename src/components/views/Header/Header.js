import NavBar from "../NavBar/NavBar";

const Header = ({logout, ...userData}) => {
  return (
    <>
      <NavBar logout={logout} {...userData} />
    </>      
  );
};

export default Header;