import {faRightFromBracket} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from 'react';
import {Button, Container, Navbar} from "react-bootstrap";
import {Outlet, useHref, useNavigate} from 'react-router-dom';
import './App.scss';
import {useActiveUser} from "./app/auth";
import {firebaseLogout} from "./app/firebase";

function App() {
  return (
      <>
        <Navigation />
        <Outlet />
      </>
  );
}

function Navigation() {
  const navigate = useNavigate();
  const basePath = useHref("/");
  const activeUser = useActiveUser();
  return (
      <Navbar id="primary-nav-bar" bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="mb-0 h1" href={basePath}>Pathfinder 1E Tools</Navbar.Brand>
          {activeUser && <Button
              className="logout-button"
              variant={"link"}
              style={{ color: "white" }}
              onClick={() => {
                firebaseLogout().then(() => navigate('/login'));
              }}><FontAwesomeIcon icon={faRightFromBracket}/> Logout</Button>}
        </Container>
      </Navbar>
  );
}

export default App;
