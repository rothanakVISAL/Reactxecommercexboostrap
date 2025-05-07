import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light mt-5 py-4">
            <Container>
                <div className="text-center">
                    <p>&copy; 2023 E-Shop. All rights reserved.</p>
                    <p>Contact: info@eshop.com | Tel: (555) 123-4567</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;