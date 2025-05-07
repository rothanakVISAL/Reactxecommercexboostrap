import { Link } from 'react-router-dom';
import { Navbar as BsNavbar, Nav, Container } from 'react-bootstrap';

const Navbar = () => {
    return (
        <BsNavbar bg="dark" variant="dark" expand="lg">
            <Container>
                <BsNavbar.Brand as={Link} to="/">E-Shop</BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BsNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
};

export default Navbar;