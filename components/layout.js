import Header from './Header';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';

const Layout = ({ children }) => (
  <>
    <Header />
    <Container fluid="true">
      {children}
    </Container>
    <Footer />
  </>
);

export default Layout;