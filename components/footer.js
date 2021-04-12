import React from 'react';
import { Navbar } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">PoddyRater</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text variant="dark">
          Built by: <a href="https://jarf.me">Joshua King</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Footer;