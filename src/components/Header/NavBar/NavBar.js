import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import "./NavBar.css";
import CartWidget from '../CartWidget/CartWidget';
import {Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Navbar className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>
        <Link className="nav-link-custom mr-3" to='/'>
          <img
            alt=""
            src="https://cdn-icons-png.flaticon.com/512/8479/8479898.png"
            width="30"
            height="30"
            className="inline-block align-top align-top"
          />{' '}
        </Link>
        <p className='title'><strong>Climate Works</strong></p>
      </Navbar.Brand>
      <Nav className="ml-auto navbar-nav">
        <Link className="nav-link-custom mr-3" to='/category/gadgets'>
         Gadgets
        </Link>
        <Link className="nav-link-custom mr-3" to='/category/bikes'>
         Bikes
        </Link>
        <Link className="nav-link-custom mr-3" to='/category/books'>
         Books
        </Link>
        <Link className="nav-link-custom mr-3" to='/category/clothing'>
         Clothing
        </Link>
        <CartWidget />
      </Nav>
    </Container>
  </Navbar>
  )
}

export default NavBar