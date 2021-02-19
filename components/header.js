import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const styles = {
  navLink: {
    color: 'white',
  }
}

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="md" >
      <Navbar.Brand href="/">PoddyRater</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/" style={styles.navLink}>Home</Nav.Link>
          <Nav.Link href="/podcasts" style={styles.navLink}>Podcasts</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;