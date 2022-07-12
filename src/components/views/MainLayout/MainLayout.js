import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import PropTypes from 'prop-types'

const MainLayout = ({func, children, ...userData }) => {
  return (
    <main>
      <Header logout={func} {...userData} />
      {children}
      <Footer />
    </main>
  )
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}

export default MainLayout;