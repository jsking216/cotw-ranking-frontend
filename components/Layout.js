import Header from './Header';
import Footer from './Footer';
import { Container } from 'react-bootstrap';

const Layout = ({ children }) => (
  <>
    <Header />
    <Container fluid="true" className="marginalized">
      {children}
    </Container>
    <Footer />
  </>
);

export default Layout;