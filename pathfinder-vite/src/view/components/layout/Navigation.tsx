import {useNavigate} from "react-router-dom";
import {useActiveUser} from "../../../app/auth.tsx";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {MdLogout} from "react-icons/md";
import React from "react";

export default function Navigation() {
  const navigate = useNavigate();
  const basePath = "/";
  const equipmentPath = "/equipment";
  const activeUser = useActiveUser();
  return (
      <Navbar id="primary-nav-bar" bg="primary" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand className="mb-0 h1" onClick={() => navigate(equipmentPath)}>Pathfinder 1E Tools</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/*<Nav.Link href={basePath}>Character</Nav.Link>*/}
              <Nav.Link onClick={() => navigate(equipmentPath)}>Equipment</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          {activeUser && <Button
              className="logout-button"
              variant={"link"}
              style={{ color: "white" }}
              onClick={() => {
                activeUser?.logout().then(() => navigate('/login'));
              }}><MdLogout /> Logout</Button>}
        </Container>
      </Navbar>
  );
}