import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./NavBar.css";
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://cdn-icons-png.flaticon.com/512/8479/8479898.png"
          width="30"
          height="30"
          className="inline-block align-top align-top"
        />{' '}
        <p className='title'><strong>Climate Works</strong></p>
      </Navbar.Brand>
      <Nav className="ml-auto navbar-nav">
        <Nav.Link className="nav-link-custom mr-3" href="#Gadgets">Gadgets</Nav.Link>
        <Nav.Link className="nav-link-custom mr-3" href="#Bikes">Bikes</Nav.Link>
        <Nav.Link className="nav-link-custom mr-3" href="#Books">Books</Nav.Link>
        <Nav.Link className="nav-link-custom mr-3" href="#Clothing">Clothing</Nav.Link>
        <CartWidget />
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar