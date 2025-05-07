import { Navbar as BsNavbar, Nav, Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyNavbar() {
    return (
        <BsNavbar bg="dark" variant="dark" expand="lg">
            <Container>
                <BsNavbar.Brand as={Link} to="/">E-Shop</BsNavbar.Brand>
                <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BsNavbar.Collapse id="basic-navbar-nav" className="justify-content-between w-100">
                    {/* Centered nav links */}
                    <Nav className="mx-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
                    </Nav>

                    {/* Right-aligned buttons */}
                    <div className="d-flex gap-2">
                        <Button as={Link} to="/login" variant="outline-light" size="sm">Login</Button>
                        <Button as={Link} to="/register" variant="light" size="sm">Register</Button>
                    </div>
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
}

export default MyNavbar;
