import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarr() {
  return (
      <>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
          <Navbar.Brand href="/">Home</Navbar.Brand>
            <Nav.Link href="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export {NavBarr};