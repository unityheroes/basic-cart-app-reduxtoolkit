import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart, FaBoxOpen } from "react-icons/fa";

function AppNavbar() {
const cartCount = useSelector((state) => state.cart.totalQuantity);

  return (
    <Navbar fixed="top" expand="lg" className="bg-white shadow-sm">
      <Container>
        <Link to="/" className="navbar-brand fw-bold text-primary">
          <FaBoxOpen className="me-2" />
          CartApp
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center gap-3">
            <Link to="/" className="nav-link d-flex align-items-center gap-1">
              <FaBoxOpen /> Products
            </Link>
            <Link to="/cart" className="nav-link d-flex align-items-center gap-1 position-relative">
              <FaShoppingCart />
              Cart
              <span className="cart-count">{cartCount}</span>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;