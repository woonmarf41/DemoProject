import { Outlet } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const RootLayout = () => {
  const { logout } = useAuth();

  return (
    <>
      <header>
        <Navbar bg="dark" variant="dark" className="d-flex mb-3">
          <Container>
            <Navbar.Brand href="/">Attack on Titan</Navbar.Brand>
            <Nav className="me-auto ">
              <Link
                to="/"
                style={{ textDecoration: "none" }}
                className="text-light"
              >
                Home
              </Link>

              <Link
                to="/dashboard"
                style={{ textDecoration: "none" }}
                className="text-light ps-3"
              >
                Dashboard
              </Link>
            </Nav>
            <Link className="ml-auto p-2 text-light" onClick={logout}>
              Logout
            </Link>
          </Container>
        </Navbar>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
