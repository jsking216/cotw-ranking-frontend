import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar fixed="bottom">
      <Navbar.Brand href="/">Podcast Ratings</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Built by: <a href="https://jarf.me">Joshua King</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer;