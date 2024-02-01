import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Header.css"

function Header() {
  return (
    <Navbar expand="lg" className="header-body">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="https://jonothan98.github.io/Personal-Website/">Home</Nav.Link>
            <Nav.Link href="https://jonothan98.github.io/Personal-Website/projects">Projects</Nav.Link>
            <Nav.Link href="https://jonothan98.github.io/Personal-Website/about-me">About</Nav.Link>
            <Nav.Link href="https://jonothan98.github.io/Personal-Website/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;