import React from 'react';
import './App.css';
import {NavLink, Outlet} from 'react-router-dom';
import {Container, Nav, Navbar} from "react-bootstrap";

function App() {
  return (
      <div>
        <Navigation />
        <div id="content">
          <Outlet />
        </div>
      </div>
  );
}

function Navigation() {
  return (
      <Navbar id="primary-nav-bar" bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="mb-0 h1" href="/">Pathfinder 1E Tools</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link to="/character/edit" as={NavLink}>Create Character</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default App;
