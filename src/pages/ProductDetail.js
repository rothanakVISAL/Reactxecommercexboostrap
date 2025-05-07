import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Container, Row, Col, Image, Alert, Spinner } from 'react-bootstrap';
import { useCart } from '../services/CartContext';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('Product not found');
                return res.json();
            })
            .then(data => {
                setProduct(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [id]);

    if (loading) return <Spinner animation="border" className="d-block mx-auto mt-4" />;
    if (error) return <Alert variant="danger" className="mt-4">{error}</Alert>;
    if (!product) return null;

    return (
        <Container className="my-5">
            <Row>
                <Col md={6}>
                    <Image src={product.image} fluid className="product-image" />
                </Col>
                <Col md={6}>
                    <h1>{product.title}</h1>
                    <h3 className="my-4">${product.price}</h3>
                    <p>{product.description}</p>
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => addToCart(product)}
                    >
                        Add to Cart
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetail;