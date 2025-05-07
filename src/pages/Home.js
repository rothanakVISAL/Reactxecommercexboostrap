import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as featuredProducts from "react-bootstrap/ElementChildren";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=4')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (
        <Container className="mt-4">
            {/* Hero Section */}
            <div className="p-5 mb-4 bg-light rounded-3">
                <div className="container-fluid py-5">
                    <div className="row align-items-center">
                        {/* Text Section */}
                        <div className="col-md-6">
                            <h1 className="display-5 fw-bold">Welcome to E-Shop</h1>
                            <p className="col-md-10 fs-4">
                                Discover amazing products at great prices
                            </p>
                            <Link to="/products" className="btn btn-primary btn-lg">
                                Shop Now
                            </Link>
                        </div>

                        {/* 3D Image Section */}
                        <div className="col-md-6 text-center">
                            <img
                              src={"https://img.freepik.com/free-photo/discount-water-bottle-podium_23-2150165468.jpg?t=st=1746609371~exp=1746612971~hmac=61d6a298be150bbd543ed37541db984fd51f1ca7e7e2fc8f8edef91ada63400b&w=1800"}
                                alt="3D Shopping"
                                className="img-fluid"
                                style={{ maxHeight: '500px' }}
                            />
                        </div>
                    </div>
                </div>
            </div>



            {/* Additional Sections */}
            <section className="store-info mb-5">
                <Row className="g-4 text-center">
                    <Col md={4}>
                        <div className="p-3 border rounded bg-light">
                            <i className="bi bi-truck h1 text-primary"></i>
                            <h3>Fast Shipping</h3>
                            <p>Free shipping on all orders over $50</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-3 border rounded bg-light">
                            <i className="bi bi-arrow-counterclockwise h1 text-primary"></i>
                            <h3>Easy Returns</h3>
                            <p>30-day hassle-free returns</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="p-3 border rounded bg-light">
                            <i className="bi bi-shield-check h1 text-primary"></i>
                            <h3>Secure Payment</h3>
                            <p>100% secure payment processing</p>
                        </div>
                    </Col>
                </Row>
            </section>

            {/* Featured Products */}
            <h2 className="my-4">Featured Products</h2>
            <Row xs={1} md={2} lg={4} className="g-4">
                {products.map(product => (
                    <Col key={product.id}>
                        <Card className="h-100">
                            <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'contain' }} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>${product.price}</Card.Text>
                                <Button variant="primary">Add to Cart</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>


        </Container>
    );
};

export default Home;