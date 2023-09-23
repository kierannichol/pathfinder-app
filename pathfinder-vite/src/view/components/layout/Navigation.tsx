import {useHref, useNavigate} from "react-router-dom";
import {useActiveUser} from "../../../app/auth.tsx";
import {Button, Container, Navbar} from "react-bootstrap";
import { MdLogout } from "react-icons/md";

export default function Navigation() {
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
                activeUser?.logout().then(() => navigate('/login'));
              }}><MdLogout /> Logout</Button>}
        </Container>
      </Navbar>
  );
}