// Login.js
import { useState } from 'react';
import { Form, Button, Alert, Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
 // Replace with your actual image path
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Your login logic
        console.log(formData);
        setLoading(false);
    };

    return (
        <Container fluid className="min-vh-100 d-flex align-items-center">
            <Row className="w-100">
                {/* Form Section */}
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <div style={{ maxWidth: '400px', width: '100%' }}>
                        <Card className="shadow">
                            <Card.Body>
                                <h2 className="text-center mb-4">
                                    <i className="fas fa-user-circle me-2"></i> Welcome Back
                                </h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={handleSubmit} noValidate>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) =>
                                                setFormData({ ...formData, email: e.target.value })
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            required
                                            value={formData.password}
                                            onChange={(e) =>
                                                setFormData({ ...formData, password: e.target.value })
                                            }
                                        />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Remember me" />
                                    </Form.Group>
                                    <Button
                                        type="submit"
                                        className="w-100 rounded-pill"
                                        disabled={loading}
                                    >
                                        {loading ? (
                                            <>
                                                <i className="fas fa-spinner fa-spin me-2"></i>
                                                Signing In...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-sign-in-alt me-2"></i>
                                                Sign In
                                            </>
                                        )}
                                    </Button>
                                </Form>

                                {/* Optional: Social Icons */}
                                <div className="text-center mt-4">
                                    <span>Or sign in with</span>
                                    <div className="mt-2">
                                        <i className="fab fa-google fa-lg mx-2 text-danger" role="button"></i>
                                        <i className="fab fa-facebook fa-lg mx-2 text-primary" role="button"></i>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                        <div className="text-center mt-3">
                            New user? <Link to="/register">Create an account</Link>
                        </div>
                    </div>
                </Col>

                {/* Image Section */}
                <Col md={6} className="d-none d-md-block p-0">
                    <img
                        src={"https://img.freepik.com/free-vector/headphone-concept-illustration_114360-30281.jpg?t=st=1746614651~exp=1746618251~hmac=d64bcaee7eec03430f782f6901a491154db51d00f795d917bf1aae5f0535eb9d&w=1380"}
                        alt="Login Visual"
                        className="img-fluid h-100 w-100 object-fit-cover"
                        style={{ objectFit: 'cover' }}
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Login;
